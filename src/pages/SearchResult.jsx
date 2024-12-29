import React from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function SearchResult() {
    const searchData = useSelector((state) => state.productSlice.searchData);
    console.log(searchData)
    return (
        <main className="main">
            <div className="container mb-30">
                <div className="row">
                    <div className="col-lg-12">
                        {searchData?.data?.length > 0 ? <><div className="shop-product-fillter">
                            <div className="totall-product">
                                <p>
                                    We found <strong className="text-brand">{searchData?.data?.length}</strong> items for
                                    you!
                                </p>
                            </div>
                        </div>
                            <div className="row product-grid">
                                {searchData?.data?.map((items) => {
                                    return (
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <ProductCard data={items} />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="pagination-area mt-20 mb-20">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="fi-rs-arrow-small-left" />
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link dot" href="#">
                                                ...
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                6
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="fi-rs-arrow-small-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div></> : <> <div className="no-result-section">
                                <img src="https://img.freepik.com/premium-vector/result-found-flat-style-design-vector-stock-illustrations_848977-514.jpg" alt="No Result Found" />
                                <h2>No Results Found</h2>
                                <p>We couldn't find what you're looking for. Try searching with different keywords or check back later.</p>
                                <Link to="/" className="btn btn-theme">Go Back to Home</Link>
                            </div></>}



                    </div>
                </div>
            </div>
        </main>
    )
}
