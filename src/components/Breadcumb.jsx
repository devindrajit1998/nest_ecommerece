import { Link } from "react-router-dom";

export default function Breadcumb(props) {
  const allData = props.data;
  // console.log(allData)
  return (
    <div className="page-header mt-30 mb-50">
      <div className="container">
        <div className="archive-header">
          <div className="row align-items-center">
            <div className="col-xl-3">
              <h1 className="mb-15">{allData?.[0]?.name}</h1>
              <div className="breadcrumb">
                <Link to='/' rel="nofollow">
                  <i className="fi-rs-home mr-5" />
                  Home
                </Link>
                <span /> Shop <span /> Snack
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
