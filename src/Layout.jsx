import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuickViewModal from "./components/QuickViewModal";
import MobileHeader from "./components/MobileHeader";
import { useDispatch, useSelector } from "react-redux";
import MainLoader from "./components/MainLoader";
import FuncLoader from "./components/FuncLoader";
import { fetchCategory } from "./redux/slice/CommonFetchSlice";
import { updateLocalCart } from "./redux/slice/CartSlice";
import MiniLoader from "./components/MiniLoader";

const HomePage = lazy(() => import("./pages/HomePage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const UserPage = lazy(() => import("./pages/UserPage"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const WishlistPage = lazy(() => import("./pages/WishlistPage"));
const SearchResult = lazy(() => import("./pages/SearchResult"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function Layout() {
  const dispatch = useDispatch();

  // fetch cart data from localstorage
  const localCart = JSON.parse(localStorage.getItem("cartData")) || [];

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(updateLocalCart(localCart));
  }, []);
  // Loader state
  const loadingState = useSelector((state) => state.commonFetchSlice.loading);
  // backdrop state
  const showBackdrop = useSelector((state) => state.FunctionalSlice.backdrop);
  // product modal state
  const showProductModal = useSelector((state) => state.FunctionalSlice.modalState);
  // searchData state
  const searchData = useSelector((state) => state.productSlice.searchData);
  // user login status
  const userLoginStatus = useSelector((state) => state.userSlice.isSession);
  // user loading state
  const userLoading = useSelector((state) => state.userSlice.loading);


  return (
    <>
      {/* {userLoading && <MiniLoader />} */}
      {loadingState && <MainLoader />}
      {showProductModal && <QuickViewModal data={{ showProductModal }} />}
      <Header />
      <MobileHeader />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/:category" element={<ShopPage />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/dashboard" element={userLoginStatus ? <UserPage /> : <Navigate to="/login"/>} />
          <Route path="/login" element={userLoginStatus ? <Navigate to="/dashboard"/> : <LoginPage />} />
          <Route path="/register" element={userLoginStatus ? <Navigate to="/dashboard"/> : <RegistrationPage />} />
          <Route path="*" element={<NotFound />} />
          {searchData?.data && <Route path="/search" element={<SearchResult />} />}
        </Routes>
      </Suspense>
      <Footer />
      {showBackdrop && <div className="body-overlay-1" />}
    </>
  );
}
