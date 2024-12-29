import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toggleMobileMenu } from "../redux/slice/FunctionalSlice";

export default function MobileHeader() {
  const dispatch = useDispatch();
  // mobile menu state
  const mobileMenuState = useSelector((state) => state.FunctionalSlice.mobileMenu);
  return (
    <div className={`mobile-header-active mobile-header-wrapper-style ${mobileMenuState}`}>
      <div className="mobile-header-wrapper-inner">
        <div className="mobile-header-top">
          <div className="mobile-header-logo">
            <Link to="/">
              <img src="/imgs/theme/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
            <button className="close-style search-close" onClick={() => dispatch(toggleMobileMenu(null))}>
              <i className="icon-top" />
              <i className="icon-bottom" />
            </button>
          </div>
        </div>
        <div className="mobile-header-content-area">
          <div className="mobile-search search-style-3 mobile-header-border">
            <form action="#">
              <input type="text" placeholder="Search for items…" />
              <button type="submit">
                <i className="fi-rs-search" />
              </button>
            </form>
          </div>
          <div className="mobile-menu-wrap mobile-header-border">
            {/* mobile menu start */}
            <nav>
              <ul className="mobile-menu font-heading">
                <li className="menu-item-has-children">
                  <NavLink to="/">Home</NavLink>

                </li>
                <li className="menu-item-has-children">
                  <a href="shop-grid-right.html">shop</a>
                  <ul className="dropdown">
                    <li>
                      <a href="shop-grid-right.html">
                        Shop Grid – Right Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="shop-grid-left.html">Shop Grid – Left Sidebar</a>
                    </li>
                    <li>
                      <a href="shop-list-right.html">
                        Shop List – Right Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="shop-list-left.html">Shop List – Left Sidebar</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth.html">Shop - Wide</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Single Product</a>
                      <ul className="dropdown">
                        <li>
                          <a href="shop-product-right.html">
                            Product – Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-left.html">
                            Product – Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-full.html">
                            Product – No sidebar
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-vendor.html">
                            Product – Vendor Infor
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop-filter.html">Shop – Filter</a>
                    </li>
                    <li>
                      <a href="shop-wishlist.html">Shop – Wishlist</a>
                    </li>
                    <li>
                      <a href="shop-cart.html">Shop – Cart</a>
                    </li>
                    <li>
                      <a href="shop-checkout.html">Shop – Checkout</a>
                    </li>
                    <li>
                      <a href="shop-compare.html">Shop – Compare</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Shop Invoice</a>
                      <ul className="dropdown">
                        <li>
                          <a href="shop-invoice-1.html">Shop Invoice 1</a>
                        </li>
                        <li>
                          <a href="shop-invoice-2.html">Shop Invoice 2</a>
                        </li>
                        <li>
                          <a href="shop-invoice-3.html">Shop Invoice 3</a>
                        </li>
                        <li>
                          <a href="shop-invoice-4.html">Shop Invoice 4</a>
                        </li>
                        <li>
                          <a href="shop-invoice-5.html">Shop Invoice 5</a>
                        </li>
                        <li>
                          <a href="shop-invoice-6.html">Shop Invoice 6</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Vendors</a>
                  <ul className="dropdown">
                    <li>
                      <a href="vendors-grid.html">Vendors Grid</a>
                    </li>
                    <li>
                      <a href="vendors-list.html">Vendors List</a>
                    </li>
                    <li>
                      <a href="vendor-details-1.html">Vendor Details 01</a>
                    </li>
                    <li>
                      <a href="vendor-details-2.html">Vendor Details 02</a>
                    </li>
                    <li>
                      <a href="vendor-dashboard.html">Vendor Dashboard</a>
                    </li>
                    <li>
                      <a href="vendor-guide.html">Vendor Guide</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Mega menu</a>
                  <ul className="dropdown">
                    <li className="menu-item-has-children">
                      <a href="#">Women's Fashion</a>
                      <ul className="dropdown">
                        <li>
                          <a href="shop-product-right.html">Dresses</a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">
                            Blouses &amp; Shirts
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">
                            Hoodies &amp; Sweatshirts
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">Women's Sets</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Men's Fashion</a>
                      <ul className="dropdown">
                        <li>
                          <a href="shop-product-right.html">Jackets</a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">
                            Casual Faux Leather
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">Genuine Leather</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Technology</a>
                      <ul className="dropdown">
                        <li>
                          <a href="shop-product-right.html">Gaming Laptops</a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">
                            Ultraslim Laptops
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">Tablets</a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">
                            Laptop Accessories
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-right.html">
                            Tablet Accessories
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="blog-category-fullwidth.html">Blog</a>
                  <ul className="dropdown">
                    <li>
                      <a href="blog-category-grid.html">Blog Category Grid</a>
                    </li>
                    <li>
                      <a href="blog-category-list.html">Blog Category List</a>
                    </li>
                    <li>
                      <a href="blog-category-big.html">Blog Category Big</a>
                    </li>
                    <li>
                      <a href="blog-category-fullwidth.html">
                        Blog Category Wide
                      </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Single Product Layout</a>
                      <ul className="dropdown">
                        <li>
                          <a href="blog-post-left.html">Left Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-post-right.html">Right Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-post-fullwidth.html">No Sidebar</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Pages</a>
                  <ul className="dropdown">
                    <li>
                      <a href="page-about.html">About Us</a>
                    </li>
                    <li>
                      <a href="page-contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="page-account.html">My Account</a>
                    </li>
                    <li>
                      <a href="page-login.html">Login</a>
                    </li>
                    <li>
                      <a href="page-register.html">Register</a>
                    </li>
                    <li>
                      <a href="page-purchase-guide.html">Purchase Guide</a>
                    </li>
                    <li>
                      <a href="page-privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="page-terms.html">Terms of Service</a>
                    </li>
                    <li>
                      <a href="page-404.html">404 Page</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Language</a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">English</a>
                    </li>
                    <li>
                      <a href="#">French</a>
                    </li>
                    <li>
                      <a href="#">German</a>
                    </li>
                    <li>
                      <a href="#">Spanish</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            {/* mobile menu end */}
          </div>
          <div className="mobile-header-info-wrap">
            <div className="single-mobile-header-info">
              <a href="page-contact.html">
                <i className="fi-rs-marker" /> Our location{" "}
              </a>
            </div>
            <div className="single-mobile-header-info">
              <a href="page-login.html">
                <i className="fi-rs-user" />
                Log In / Sign Up{" "}
              </a>
            </div>
            <div className="single-mobile-header-info">
              <a href="#">
                <i className="fi-rs-headphones" />
                (+01) - 2345 - 6789{" "}
              </a>
            </div>
          </div>
          <div className="mobile-social-icon mb-50">
            <h6 className="mb-15">Follow Us</h6>
            <a href="#">
              <img src="/imgs/theme/icons/icon-facebook-white.svg" alt='' />
            </a>
            <a href="#">
              <img src="/imgs/theme/icons/icon-twitter-white.svg" alt='' />
            </a>
            <a href="#">
              <img src="/imgs/theme/icons/icon-instagram-white.svg" alt='' />
            </a>
            <a href="#">
              <img src="/imgs/theme/icons/icon-pinterest-white.svg" alt='' />
            </a>
            <a href="#">
              <img src="/imgs/theme/icons/icon-youtube-white.svg" alt='' />
            </a>
          </div>
          <div className="site-copyright">
            Copyright 2021 © Nest. All rights reserved. Powered by AliThemes.
          </div>
        </div>
      </div>
    </div>
  );
}
