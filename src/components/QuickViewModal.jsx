import { useDispatch, useSelector } from "react-redux";
import ProductThumb from "./ProductThumb";
import { toggleProductModal } from "../redux/slice/FunctionalSlice";
import { clearSingleProduct, productSlice } from "../redux/slice/ProductSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addToCart } from "../redux/slice/CartSlice";

export default function QuickViewModal(props) {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productSlice.singleProduct.data);
  const [quantity, setQuantity] = useState(1);

  const handleModalData = () => {
    dispatch(toggleProductModal(null))
    dispatch(clearSingleProduct());
  }

  // handle add to cart

  const handleAddToCart = async (productData) => {
    await dispatch(addToCart(productData))
    setQuantity(1);
  }
  return (
    <div className={`modal fade custom-modal d-block ${props.data.showProductModal}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            className="btn-close" onClick={handleModalData}
          />
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                <div className="detail-gallery">
                  <ProductThumb data={productData} />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="detail-info pr-30 pl-30">
                  <span className="stock-status out-stock"> Sale Off </span>
                  <h3 className="title-detail">
                    <Link to={`/product/${productData.documentId}`} className="text-heading">
                      {productData.title}
                    </Link>
                  </h3>
                  <div className="product-detail-rating">
                    <div className="product-rate-cover text-end">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        />
                      </div>
                      <span className="font-small ml-5 text-muted">
                        {" "}
                        (32 reviews)
                      </span>
                    </div>
                  </div>
                  <div className="clearfix product-price-cover">
                    <div className="product-price primary-color float-left">
                      <span className="current-price text-brand">₹{productData.price - productData.price * productData.offer * 0.01}</span>
                      <span>
                        <span className="save-price font-md color3 ml-15">
                          {productData.offer}% Off
                        </span>
                        <span className="old-price font-md ml-15">₹{productData.price}</span>
                      </span>
                    </div>
                  </div>
                  <div className="detail-extralink mb-30">
                    <div className="detail-qty border radius">
                      <a className="qty-down" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>
                        <i className="fi-rs-angle-small-down" />
                      </a>
                      <span className="qty-val">{quantity}</span>
                      <a className="qty-up" onClick={() => setQuantity(quantity < 5 ? quantity + 1 : quantity)}>
                        <i className="fi-rs-angle-small-up" />
                      </a>
                    </div>
                    <div className="product-extra-link2">
                      <button
                        onClick={() => handleAddToCart({ data: productData, quant: quantity })}
                        className="button button-add-to-cart"
                      >
                        <i className="fi-rs-shopping-cart" />
                        Add to cart
                      </button>
                    </div>
                    {quantity == 5 && <p className="font-xs text-danger ">Maximum 5 products can be added at a time</p>}
                  </div>
                  <div className="font-xs">
                    <ul>
                      <li className="mb-5">
                        Vendor: <span className="text-brand">Nest</span>
                      </li>
                      <li className="mb-5">
                        MFG:<span className="text-brand"> Jun 4.2021</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
