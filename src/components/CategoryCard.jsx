import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CategoryCard(props) {

  const cardData = props.data;
  return (
    <>
      <div className="card-2 bg-9">
        <figure className="img-hover-scale overflow-hidden">
          <Link to={`/shop/${cardData?.slug}`}>
            <img src={`${cardData?.image?.[0]?.url}`} alt='' />
          </Link>
        </figure>
        <h6>
          <Link to={`/shop/${cardData?.slug}`}>{cardData?.name}</Link>
          {/* <Link to={`/shop/${cardData?.slug}`} state={cardData}>
            {cardData?.name}
          </Link> */}
        </h6>
        {/* <span>26 items</span> */}
      </div>
    </>
  );
}
