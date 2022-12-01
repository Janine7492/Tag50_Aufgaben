import { Link } from "react-router-dom";
import "./BlogItem.css";

function BlogItem(props) {
    return (
        <div className="blogItemWrapper">
            <img src={props.img} alt={props.title}></img>
            <h2>{props.title}</h2>
            <Link to={"/details/" + props.id} className="button">Read more</Link>
        </div>
    )
};

export default BlogItem;