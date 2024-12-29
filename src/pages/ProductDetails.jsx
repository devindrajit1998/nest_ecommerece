import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import he from "he";
import ProductThumb from "../components/ProductThumb";
import RelatedProductSlider from "../components/RelatedProductSlider";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../redux/slice/ProductSlice";

export default function ProductDetails() {
  const location = useLocation();
  const producId = location.pathname.split("/product/")[1];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductById(producId));
  }, []);

  const productData = useSelector((state) => state.productSlice.singleProduct?.data);

  const [tab, setTab] = useState("tab-1");
  const handleTabChange = (tabId) => {
    setTab(tabId);
  };
  // calculate avg review
  const avgReview = productData?.review.reduce((acc, items) => {
    return acc + Number(items.rating) / productData?.review?.length;;
  }, 0);

  // calculate start rating percentage

  const allRating = productData?.review?.map((items) => items.rating);
  // find start rating percentage
  const fiveStar = Number((100 / allRating?.length * allRating?.filter((item) => item == 5).length).toFixed(2));
  const fourStar = Number((100 / allRating?.length * allRating?.filter((item) => item == 4).length).toFixed(2));
  const threeStar = Number((100 / allRating?.length * allRating?.filter((item) => item == 3).length).toFixed(2));
  const twoStar = Number((100 / allRating?.length * allRating?.filter((item) => item == 2).length).toFixed(2));
  const oneStar = Number((100 / allRating?.length * allRating?.filter((item) => item == 1).length).toFixed(2));
  console.log({ fiveStar, fourStar, threeStar, twoStar, oneStar });


  return (
    <main className="main">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="index.html" rel="nofollow">
              <i className="fi-rs-home mr-5" />
              Home
            </a>
            <span /> <a href="shop-grid-right.html">Vegetables &amp; tubers</a>
            <span /> Seeds of Change Organic
          </div>
        </div>
      </div>
      <div className="container mb-30">
        <div className="row">
          <div className="col-xl-10 col-lg-12 m-auto">
            <div className="product-detail accordion-detail">
              <div className="row mb-50 mt-30">
                <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                  <div className="detail-gallery">
                    <ProductThumb data={productData} />
                  </div>
                  {/* End Gallery */}
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="detail-info pr-30 pl-30">
                    <span className="stock-status out-stock"> Sale Off </span>
                    <h2 className="title-detail">
                      {productData?.title}
                    </h2>
                    <div className="product-detail-rating">
                      <div className="product-rate-cover text-end">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "100%" }}
                          >
                            {Array.from({ length: Math.floor(avgReview) }).map((i) => (
                              <i key={i} className="fa-solid fa-star" />
                            ))}
                            {Array.from({ length: Math.ceil(5 - avgReview) }).map((i) => (
                              <i key={i} className="fa-regular fa-star" />
                            ))}
                          </div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                          ({productData?.review.length} reviews)
                        </span>
                      </div>
                    </div>
                    <div className="clearfix product-price-cover">
                      <div className="product-price primary-color float-left">
                        <span className="current-price text-brand">₹{productData?.price - productData?.price * productData?.offer * 0.01}</span>
                        <span>
                          <span className="save-price font-md color3 ml-15">
                            {productData?.offer}% Off
                          </span>
                          <span className="old-price font-md ml-15">₹{productData?.price}</span>
                        </span>
                      </div>
                    </div>
                    <div className="short-desc mb-30">
                      <p className="font-lg">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquam rem officia, corrupti reiciendis minima
                        nisi modi, quasi, odio minus dolore impedit fuga eum
                        eligendi.
                      </p>
                    </div>
                    <div className="attr-detail attr-size mb-30">
                      <strong className="mr-10">Size / Weight: </strong>
                      <ul className="list-filter size-filter font-small">
                        <li>
                          <a href="#">50g</a>
                        </li>
                        <li className="active">
                          <a href="#">60g</a>
                        </li>
                        <li>
                          <a href="#">80g</a>
                        </li>
                        <li>
                          <a href="#">100g</a>
                        </li>
                        <li>
                          <a href="#">150g</a>
                        </li>
                      </ul>
                    </div>
                    <div className="detail-extralink mb-50">
                      <div className="detail-qty border radius">
                        <a href="#" className="qty-down">
                          <i className="fi-rs-angle-small-down" />
                        </a>
                        <span className="qty-val">1</span>
                        <a href="#" className="qty-up">
                          <i className="fi-rs-angle-small-up" />
                        </a>
                      </div>
                      <div className="product-extra-link2">
                        <button
                          type="submit"
                          className="button button-add-to-cart"
                        >
                          <i className="fi-rs-shopping-cart" />
                          Add to cart
                        </button>
                        <a
                          aria-label="Add To Wishlist"
                          className="action-btn hover-up"
                          href="shop-wishlist.html"
                        >
                          <i className="fi-rs-heart" />
                        </a>
                        <a
                          aria-label="Compare"
                          className="action-btn hover-up"
                          href="shop-compare.html"
                        >
                          <i className="fi-rs-shuffle" />
                        </a>
                      </div>
                    </div>
                    <div className="font-xs">
                      <ul className="mr-50 float-start">
                        <li className="mb-5">
                          Type: <span className="text-brand">Organic</span>
                        </li>
                        <li className="mb-5">
                          MFG:<span className="text-brand"> Jun 4.2021</span>
                        </li>
                        <li>
                          LIFE: <span className="text-brand">70 days</span>
                        </li>
                      </ul>
                      <ul className="float-start">
                        <li className="mb-5">
                          SKU: <a href="#">FWM15VKT</a>
                        </li>
                        <li className="mb-5">
                          Tags:{" "}
                          <a href="#" rel="tag">
                            Snack
                          </a>
                          ,{" "}
                          <a href="#" rel="tag">
                            Organic
                          </a>
                          ,{" "}
                          <a href="#" rel="tag">
                            Brown
                          </a>
                        </li>
                        <li>
                          Stock:
                          <span className="in-stock text-brand ml-5">
                            8 Items In Stock
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Detail Info */}
                </div>
              </div>
              <div className="product-info">
                <div className="tab-style3">
                  <ul className="nav nav-tabs text-uppercase">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${tab === 'tab-1' && 'active'}`} onClick={() => handleTabChange("tab-1")}
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${tab === 'tab-2' && 'active'}`} onClick={() => handleTabChange("tab-2")}
                      >
                        Additional info
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${tab === 'tab-3' && 'active'}`} onClick={() => handleTabChange("tab-3")}
                      >
                        Vendor
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${tab === 'tab-4' && 'active'}`} onClick={() => handleTabChange("tab-4")}
                      >
                        Reviews ({productData?.review.length})
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content shop_info_tab entry-main-content">
                    {tab === "tab-1" ? <><div
                      className="tab-pane fade show active"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(he.decode(productData?.desc || "")),
                      }}
                    ></div></> : tab === "tab-2" ? <> <div
                      className="tab-pane fade show active"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(he.decode(productData?.moredetails || "")),
                      }}
                    ></div></> : tab === "tab-3" ? <><div className="tab-pane fade show active">
                      <div className="vendor-logo d-flex mb-30">
                        <img src="/imgs/vendor/vendor-18.svg" alt='' />
                        <div className="vendor-name ml-15">
                          <h6>
                            <a href="vendor-details-2.html">Noodles Co.</a>
                          </h6>
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
                      </div>
                      <ul className="contact-infor mb-50">
                        <li>
                          <img src="/imgs/theme/icons/icon-location.svg" alt='' />
                          <strong>Address: </strong>{" "}
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img src="/imgs/theme/icons/icon-contact.svg" alt='' />
                          <strong>Contact Seller:</strong>
                          <span>(+91) - 540-025-553</span>
                        </li>
                      </ul>
                      <div className="d-flex mb-55">
                        <div className="mr-30">
                          <p className="text-brand font-xs">Rating</p>
                          <h4 className="mb-0">92%</h4>
                        </div>
                        <div className="mr-30">
                          <p className="text-brand font-xs">Ship on time</p>
                          <h4 className="mb-0">100%</h4>
                        </div>
                        <div>
                          <p className="text-brand font-xs">Chat response</p>
                          <h4 className="mb-0">89%</h4>
                        </div>
                      </div>
                      <p>
                        Noodles &amp; Company is an American fast-casual
                        restaurant that offers international and American noodle
                        dishes and pasta in addition to soups and salads.
                        Noodles &amp; Company was founded in 1995 by Aaron
                        Kennedy and is headquartered in Broomfield, Colorado.
                        The company went public in 2013 and recorded a $457
                        million revenue in 2017.In late 2018, there were 460
                        Noodles &amp; Company locations across 29 states and
                        Washington, D.C.
                      </p>
                    </div></> : tab === "tab-4" ? <><div className="tab-pane fade show active">

                      <div className="comments-area">
                        <div className="row">
                          <div className="col-lg-8">
                            <h4 className="mb-30">
                              Customer questions &amp; answers
                            </h4>
                            <div className="comment-list">
                              {productData?.review?.map((item, index) => {
                                return (
                                  <div className="single-comment justify-content-between d-flex mb-30" key={index}>
                                    <div className="user justify-content-between d-flex">
                                      <div className="thumb text-center">
                                        <img src={item?.profile_image} alt='' />
                                        <a
                                          href="#"
                                          className="font-heading text-brand"
                                        >
                                          {item?.author}
                                        </a>
                                      </div>
                                      <div className="desc">
                                        <div className="d-flex justify-content-between mb-10">
                                          <div className="d-flex align-items-center">
                                            <span className="font-xs text-muted">
                                              {item?.timestamp?.map((item, index) => {
                                                return (
                                                  <span className="me-1" key={index}>{item}</span>
                                                )
                                              })}
                                            </span>
                                          </div>
                                          <div className="product-rate d-inline-block">
                                            <div
                                              className="product-rating"
                                              style={{ width: "100%" }}
                                            >
                                              {Array.from({ length: item?.rating }).map((i) => (
                                                <i key={i} className="fa-solid fa-star" />
                                              ))}
                                              {Array.from({ length: 5 - item?.rating }).map((i) => (
                                                <i key={i} className="fa-regular fa-star" />
                                              ))}
                                              {/* <i className="fa-regular fa-star-half-stroke" /> */}
                                            </div>
                                          </div>
                                        </div>
                                        <p className="mb-10">
                                          {item?.comment}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}


                            </div>
                          </div>
                          <div className="col-lg-4">
                            <h4 className="mb-30">Customer reviews</h4>
                            <div className="d-flex mb-30">
                              <div className="product-rate d-inline-block mr-15">
                                <div
                                  className="product-rating"
                                  style={{ width: "100%" }}
                                >
                                  {Array.from({ length: Math.floor(avgReview) }).map((i) => (
                                    <i key={i} className="fa-solid fa-star" />
                                  ))}
                                  {Array.from({ length: Math.ceil(5 - avgReview) }).map((i) => (
                                    <i key={i} className="fa-regular fa-star" />
                                  ))}
                                </div>
                              </div>
                              <h6>{avgReview.toFixed(0)} out of 5</h6>
                            </div>
                            <div className="progress">
                              <span>5 star</span>
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${fiveStar > 100 ? 0 : fiveStar}%` }}
                                aria-valuenow={fiveStar > 100 ? 0 : fiveStar}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                {fiveStar > 100 ? 0 : fiveStar}%
                              </div>
                            </div>
                            <div className="progress">
                              <span>4 star</span>
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${fourStar > 100 ? 0 : fourStar}%` }}
                                aria-valuenow={fourStar > 100 ? 0 : fourStar}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                {fourStar > 100 ? 0 : fourStar}%
                              </div>
                            </div>
                            <div className="progress">
                              <span>3 star</span>
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${threeStar > 100 ? 0 : threeStar}%` }}
                                aria-valuenow={threeStar > 100 ? 0 : threeStar}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                {threeStar > 100 ? 0 : threeStar}%
                              </div>
                            </div>
                            <div className="progress">
                              <span>2 star</span>
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${twoStar > 100 ? 0 : twoStar}%` }}
                                aria-valuenow={twoStar > 100 ? 0 : twoStar}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                {twoStar > 100 ? 0 : twoStar}%
                              </div>
                            </div>
                            <div className="progress mb-30">
                              <span>1 star</span>
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${oneStar > 100 ? 0 : oneStar}%` }}
                                aria-valuenow={oneStar > 100 ? 0 : oneStar}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                {oneStar > 100 ? 0 : oneStar}%
                              </div>
                            </div>
                            <a href="#" className="font-xs text-muted">
                              How are ratings calculated?
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="comment-form">
                        <h4 className="mb-15">Add a review</h4>
                        <div className="product-rate d-inline-block mb-30" />
                        <div className="row">
                          <div className="col-lg-8 col-md-12">
                            <form
                              className="form-contact comment_form"
                              action="#"
                              id="commentForm"
                            >
                              <div className="row">
                                <div className="col-12">
                                  <div className="form-group">
                                    <textarea
                                      className="form-control w-100"
                                      name="comment"
                                      id="comment"
                                      cols={30}
                                      rows={9}
                                      placeholder="Write Comment"
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <input
                                      className="form-control"
                                      name="name"
                                      id="name"
                                      type="text"
                                      placeholder="Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <input
                                      className="form-control"
                                      name="email"
                                      id="email"
                                      type="email"
                                      placeholder="Email"
                                    />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-group">
                                    <input
                                      className="form-control"
                                      name="website"
                                      id="website"
                                      type="text"
                                      placeholder="Website"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <button
                                  type="submit"
                                  className="button button-contactForm"
                                >
                                  Submit Review
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div></> : ""}
                  </div>
                </div>
              </div>
              <RelatedProductSlider />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
