import { useDispatch } from "react-redux";
import { toggleProductModal } from "../redux/slice/FunctionalSlice";

export default function ProductCardSecondary() {
  const dispatch= useDispatch();
  return (
    <div className="product-cart-wrap">
      <div className="product-img-action-wrap">
        <div className="product-img product-img-zoom">
          <a href="shop-product-right.html">
            <img
              className="default-img"
              src="/imgs/shop/product-1-1.jpg"
              alt
            />
            <img
              className="hover-img"
              src="/imgs/shop/product-1-2.jpg"
              alt
            />
          </a>
        </div>
        <div className="product-action-1">
          <a
            aria-label="Quick view"
            className="action-btn small hover-up"
            onClick={() => dispatch(toggleProductModal("show"))}
          >
            <i className="fi-rs-eye" />
          </a>
          <a
            aria-label="Add To Wishlist"
            className="action-btn small hover-up"
          >
            <i className="fi-rs-heart" />
          </a>
          {/* <a
            aria-label="Compare"
            className="action-btn small hover-up"
            href="shop-compare.html"
          >
            <i className="fi-rs-shuffle" />
          </a> */}
        </div>
        <div className="product-badges product-badges-position product-badges-mrg">
          <span className="hot">Save 15%</span>
        </div>
      </div>
      <div className="product-content-wrap">
        <div className="product-category">
          <a href="shop-grid-right.html">Hodo Foods</a>
        </div>
        <h2>
          <a href="shop-product-right.html">
            Seeds of Change Organic Quinoa, Brown
          </a>
        </h2>
        <div className="product-rate d-inline-block">
          <div className="product-rating" style={{ width: "80%" }} />
        </div>
        <div className="product-price mt-10">
          <span>$238.85 </span>
          <span className="old-price">$245.8</span>
        </div>
        <div className="sold mt-15 mb-15">
          <div className="progress mb-5">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <span className="font-xs text-heading"> Sold: 90/120</span>
        </div>
        <a href="shop-cart.html" className="btn w-100 hover-up">
          <i className="fi-rs-shopping-cart mr-5" />
          Add To Cart
        </a>
      </div>
    </div>
  );
}
