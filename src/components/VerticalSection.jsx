import MiniProductCard from "./MiniProductCard";

export default function VerticalSection() {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0">
      <h4 className="section-title style-1 mb-30 ">Top Selling</h4>
      <div className="product-list-small ">
        <MiniProductCard />
        <MiniProductCard />
        <MiniProductCard />
      </div>
    </div>
  );
}
