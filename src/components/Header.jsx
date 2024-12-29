import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toggleMobileMenu } from "../redux/slice/FunctionalSlice";
import { useEffect, useState } from "react";
import { searchProductByName } from "../redux/slice/ProductSlice";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // mobile menu state
  const mobileMenuState = useSelector((state) => state.FunctionalSlice.mobileMenu);
  // console.log(mobileMenuState)
  const cartQuantity = useSelector((state) => state.cartSlice.cartData);
  const wishQuantity = useSelector((state) => state.cartSlice.wishlist);

  // user login status

  const userLoginStatus = useSelector((state) => state.userSlice.loginStatus);

  const [formData, setFormData] = useState("");
  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(searchProductByName(formData));
    navigate("/search");
    setFormData('');
    console.log("Form submitted!");
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  // useEffect(() => {
  //   navigate("/");
  // }, []);
  return (
    <header className="header-area header-style-1 header-height-2">
      <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="header-wrap">
            <div className="logo logo-width-1">
              <Link to="/">
                <img src="/imgs/theme/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="header-right">
              <div className="search-style-2">
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Search for items..." value={formData} onChange={handleChange} />
                  <button className="header_search">Search</button>
                </form>
              </div>
              <div className="header-action-right">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <Link to="/wishlist">
                      <img
                        className="svgInject"
                        alt="Nest"
                        src="/imgs/theme/icons/icon-heart.svg"
                      />
                      <span className="pro-count blue">{wishQuantity?.length || 0}</span>
                    </Link>
                    <Link to="/wishlist">
                      <span className="lable">Wishlist</span>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link className="mini-cart-icon" to="/cart">
                      <img alt="Nest" src="/imgs/theme/icons/icon-cart.svg" />
                      <span className="pro-count blue">{cartQuantity?.length || 0}</span>
                    </Link>
                    <Link to="/cart">
                      <span className="lable">Cart</span>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link to={`${userLoginStatus ? '/dashboard' : '/login'}`}>
                      <img
                        className="svgInject"
                        alt="Nest"
                        src="/imgs/theme/icons/icon-user.svg"
                      />
                    </Link>
                    <Link to={`${userLoginStatus ? '/dashboard' : '/login'}`}>
                      <span className="lable ml-0">Account</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom header-bottom-bg-color sticky-bar">
        <div className="container">
          <div className="header-wrap header-space-between position-relative">
            <div className="logo logo-width-1 d-block d-lg-none">
              <a href="index.html">
                <img src="/imgs/theme/logo.svg" alt="logo" />
              </a>
            </div>
            <div className="header-nav d-none d-lg-flex">
              <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                <nav>
                  <ul>
                    <li className="hot-deals">
                      <img
                        src="/imgs/theme/icons/icon-hot.svg"
                        alt="hot deals"
                      />
                      <a href="shop-grid-right.html">Hot Deals</a>
                    </li>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about-us">About</NavLink>
                    </li>
                    <li className="position-static">
                      <NavLink to="#">
                        Shop <i className="fi-rs-angle-down" />
                      </NavLink>
                      <ul className="mega-menu">
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title" href="#">
                            Fruit &amp; Vegetables
                          </a>
                          <ul>
                            <li>
                              <a href="shop-product-right.html">
                                Meat &amp; Poultry
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Fresh Vegetables
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Herbs &amp; Seasonings
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Cuts &amp; Sprouts
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Exotic Fruits &amp; Veggies
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Packaged Produce
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title" href="#">
                            Breakfast &amp; Dairy
                          </a>
                          <ul>
                            <li>
                              <a href="shop-product-right.html">
                                Milk &amp; Flavoured Milk
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Butter and Margarine
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Eggs Substitutes
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Marmalades</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Sour Cream</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Cheese</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title" href="#">
                            Meat &amp; Seafood
                          </a>
                          <ul>
                            <li>
                              <a href="shop-product-right.html">
                                Breakfast Sausage
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Dinner Sausage
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Chicken</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Sliced Deli Meat
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Wild Caught Fillets
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Crab and Shellfish
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-mega-menu sub-mega-menu-width-34">
                          <div className="menu-banner-wrap">
                            <a href="shop-product-right.html">
                              <img
                                src="/imgs/banner/banner-menu.png"
                                alt="Nest"
                              />
                            </a>
                            <div className="menu-banner-content">
                              <h4>Hot deals</h4>
                              <h3>
                                Don't miss
                                <br />
                                Trending
                              </h3>
                              <div className="menu-banner-price">
                                <span className="new-price text-success">
                                  Save to 50%
                                </span>
                              </div>
                              <div className="menu-banner-btn">
                                <a href="shop-product-right.html">Shop now</a>
                              </div>
                            </div>
                            <div className="menu-banner-discount">
                              <h3>
                                <span>25%</span>
                                off
                              </h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="hotline d-none d-lg-flex">
              <img src="/imgs/theme/icons/icon-headphone.svg" alt="hotline" />
              <p>
                1900 - 888<span>24/7 Support Center</span>
              </p>
            </div>
            <div className="header-action-icon-2 d-block d-lg-none">
              <div className="burger-icon burger-icon-white" onClick={() => dispatch(toggleMobileMenu('sidebar-visible'))}>
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
            <div className="header-action-right d-block d-lg-none">
              <div className="header-action-2">
                <div className="header-action-icon-2">
                  <a href="shop-wishlist.html">
                    <img alt="Nest" src="/imgs/theme/icons/icon-heart.svg" />
                    <span className="pro-count white">4</span>
                  </a>
                </div>
                <div className="header-action-icon-2">
                  <a className="mini-cart-icon" href="#">
                    <img alt="Nest" src="/imgs/theme/icons/icon-cart.svg" />
                    <span className="pro-count white">2</span>
                  </a>
                  <div className="cart-dropdown-wrap cart-dropdown-hm2">
                    <ul>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="shop-product-right.html">
                            <img alt="Nest" src="/imgs/shop/thumbnail-3.jpg" />
                          </a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4>
                            <a href="shop-product-right.html">
                              Plain Striola Shirts
                            </a>
                          </h4>
                          <h3>
                            <span>1 × </span>$800.00
                          </h3>
                        </div>
                        <div className="shopping-cart-delete">
                          <a href="#">
                            <i className="fi-rs-cross-small" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="shop-product-right.html">
                            <img alt="Nest" src="/imgs/shop/thumbnail-4.jpg" />
                          </a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4>
                            <a href="shop-product-right.html">
                              Macbook Pro 2022
                            </a>
                          </h4>
                          <h3>
                            <span>1 × </span>$3500.00
                          </h3>
                        </div>
                        <div className="shopping-cart-delete">
                          <a href="#">
                            <i className="fi-rs-cross-small" />
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div className="shopping-cart-footer">
                      <div className="shopping-cart-total">
                        <h4>
                          Total <span>$383.00</span>
                        </h4>
                      </div>
                      <div className="shopping-cart-button">
                        <a href="shop-cart.html">View cart</a>
                        <a href="shop-checkout.html">Checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
