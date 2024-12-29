import { useDispatch } from "react-redux"
import { toggleProductModal } from "../redux/slice/FunctionalSlice";
import { fetchProductById } from "../redux/slice/ProductSlice";
import { addToCart, addToWishlist } from "../redux/slice/CartSlice";
import { useState } from "react";

export default function ProductCard(props) {
  const cardData = props.data;

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  // handle open modal
  const handleQuickView = async () => {
    await dispatch(fetchProductById(cardData?.documentId));
    dispatch(toggleProductModal("show"));
  }

  // handle add to cart

  const handleAddToCart = async (cardData) => {
    await dispatch(addToCart(cardData));
    setQuantity(1);
  }
  return (
    <>
      <div
        className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
        data-wow-delay=".1s"
      >
        <div className="product-img-action-wrap">
          <div className="product-img product-img-zoom">
            <a href="shop-product-right.html">
              <img
                className="default-img"
                src={cardData?.image[0]?.url}
                alt=''
              />
              <img
                className="hover-img"
                src={cardData?.image[1]?.url}
                alt=''
              />
            </a>
          </div>
          <div className="product-action-1">
            <a
              aria-label="Add To Wishlist"
              className="action-btn"
              onClick={() => dispatch(addToWishlist(cardData))}
            >
              <i className="fi-rs-heart" />
            </a>

            <a
              aria-label="Quick view"
              className="action-btn"
              onClick={handleQuickView}
            >
              <i className="fi-rs-eye" />
            </a>
          </div>
          <div className="product-badges product-badges-position product-badges-mrg">
            <span className="hot">Hot</span>
          </div>
        </div>
        <div className="product-content-wrap">
          <div className="product-category">
            <a href="shop-grid-right.html">Snack</a>
          </div>
          <h2>
            <a href="shop-product-right.html">
              {cardData?.title}
            </a>
          </h2>
          <div className="product-rate-cover">
            <div className="product-rate d-inline-block">
              <div className="product-rating" style={{ width: "90%" }} />
            </div>
            <span className="font-small ml-5 text-muted"> (4.0)</span>
          </div>
          <div>
            <span className="font-small text-muted">
              By <a href="vendor-details-1.html">NestFood</a>
            </span>
          </div>
          <div className="product-card-bottom">
            <div className="product-price">
              <span>₹{cardData?.price - cardData?.price * cardData?.offer * 0.01}</span>
              <span className="old-price">₹{cardData?.price}</span>
            </div>
            <div className="add-cart">
              <a className="add" onClick={() => handleAddToCart({ data: cardData, quant: quantity })}>
                <i className="fi-rs-shopping-cart mr-5" />
                Add
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
