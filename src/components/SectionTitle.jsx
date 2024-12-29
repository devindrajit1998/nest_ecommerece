export default function SectionTitle(props) {
  return (
    <>
      <div className="section-title">
        <div className="title">
          <h3>{props.title}</h3>
        </div>
        {props.nav && (
          <ul className="nav nav-tabs links" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active">All</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link">Milks &amp; Dairies</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link">Coffes &amp; Teas</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link">Pet Foods</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link">Meats</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link">Vegetables</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link">Fruits</button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
