import { useDispatch } from "react-redux";
import { fetchProductBySubcategoryId } from "../redux/slice/CommonFetchSlice";
import { useEffect } from "react";

export default function SubCategoyBar(props) {
    const dispatch = useDispatch();
    const subData = props.data;
    useEffect(() => {
        const id = subData?.[0]?.documentId;
        dispatch(fetchProductBySubcategoryId(id));
    }, [subData]);
    return (
        <div className="sidebar-widget widget-category-2 mb-30">
            <h5 className="section-title style-1 mb-30">Subcategory</h5>
            <ul>
                {subData?.map((items) => {
                    return (
                        <li key={items.id}>
                            <a onClick={() => dispatch(fetchProductBySubcategoryId(items.documentId))}>{items.name}</a>
                            {/* <span className="count">15</span> */}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
