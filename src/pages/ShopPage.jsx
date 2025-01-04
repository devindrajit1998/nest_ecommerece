import { useLocation } from "react-router-dom";
import Breadcumb from "../components/Breadcumb";
import ProductCard from "../components/ProductCard";
import SubCategoyBar from "../components/SubCategoyBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoryBySlug, fetchSubcategoryByCategoryId } from "../redux/slice/CommonFetchSlice";

export default function ShopPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname.split('/shop/')[1];
  const singleCategory = useSelector((state) => state.commonFetchSlice.singleCategory);
  const subCategories = useSelector((state) => state.commonFetchSlice.subCategoryData);
  const productsData = useSelector((state) => state.commonFetchSlice.subCategoryProducts);
  const categoryId = singleCategory?.data?.[0]?.documentId;
  // fetch category data by slug

  // console.log(subCategories);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchCategoryBySlug(currentPath));
      dispatch(fetchSubcategoryByCategoryId(categoryId));
    };

    fetchData();
  }, [currentPath, categoryId]);

  return (
    <main className="main">
      <Breadcumb data={singleCategory?.data} />
      <div className="container mb-30">
        <div className="row">
          <div className="col-lg-4-5">
            <div className="shop-product-fillter">
              <div className="totall-product">
                <p>
                  We found <strong className="text-brand">{productsData?.length}</strong> items for
                  you!
                </p>
              </div>
              <div className="sort-by-product-area">
                <div className="sort-by-cover mr-10">
                  <div className="sort-by-product-wrap">
                    <div className="sort-by">
                      <span>
                        <i className="fi-rs-apps" />
                        Show:
                      </span>
                    </div>
                    <div className="sort-by-dropdown-wrap">
                      <span>
                        {" "}
                        50 <i className="fi-rs-angle-small-down" />
                      </span>
                    </div>
                  </div>
                  <div className="sort-by-dropdown">
                    <ul>
                      <li>
                        <a className="active" href="#">
                          50
                        </a>
                      </li>
                      <li>
                        <a href="#">100</a>
                      </li>
                      <li>
                        <a href="#">150</a>
                      </li>
                      <li>
                        <a href="#">200</a>
                      </li>
                      <li>
                        <a href="#">All</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sort-by-cover">
                  <div className="sort-by-product-wrap">
                    <div className="sort-by">
                      <span>
                        <i className="fi-rs-apps-sort" />
                        Sort by:
                      </span>
                    </div>
                    <div className="sort-by-dropdown-wrap">
                      <span>
                        {" "}
                        Featured <i className="fi-rs-angle-small-down" />
                      </span>
                    </div>
                  </div>
                  <div className="sort-by-dropdown">
                    <ul>
                      <li>
                        <a className="active" href="#">
                          Featured
                        </a>
                      </li>
                      <li>
                        <a href="#">Price: Low to High</a>
                      </li>
                      <li>
                        <a href="#">Price: High to Low</a>
                      </li>
                      <li>
                        <a href="#">Release Date</a>
                      </li>
                      <li>
                        <a href="#">Avg. Rating</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row product-grid">
              {productsData?.map((item) => {
                return (
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <ProductCard data={item} />
                  </div>
                )
              })}
              {/*end product card*/}
            </div>
            {/*product grid*/}
            <div className="pagination-area mt-20 mb-20">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-start">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fi-rs-arrow-small-left" />
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link dot" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      6
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fi-rs-arrow-small-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div
            className="col-lg-1-5 primary-sidebar sticky-sidebar"
            style={{
              position: "relative",
              overflow: "visible",
              boxSizing: "border-box",
              minHeight: 1,
            }}
          >
            {/* Fillter By Price */}
            {/* Product sidebar Widget */}
            <div
              className="theiaStickySidebar"
              style={{
                paddingTop: 0,
                paddingBottom: 1,
                position: "static",
                transform: "none",
              }}
            >
              <SubCategoyBar data={subCategories} />

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
