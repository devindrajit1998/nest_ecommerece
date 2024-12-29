export default function MiniProductCard() {
  return (
    <article className="row align-items-center hover-up">
      <figure className="col-md-4 mb-0">
        <a href="shop-product-right.html">
          <img src="/imgs/shop/thumbnail-2.jpg" alt='' />
        </a>
      </figure>
      <div className="col-md-8 mb-0">
        <h6>
          <a href="shop-product-right.html">
            Nestle Original Coffee-Mate Coffee Creamer
          </a>
        </h6>
        <div className="product-rate-cover">
          <div className="product-rate d-inline-block">
            <div className="product-rating" style={{ width: "90%" }} />
          </div>
          <span className="font-small ml-5 text-muted"> (4.0)</span>
        </div>
        <div className="product-price">
          <span>$32.85</span>
          <span className="old-price">$33.8</span>
        </div>
      </div>
    </article>
  );
}
