import "./Details.css"
import { useParams } from "react-router-dom";
import Data from "../components/data/Data";

function Details() {
    const params = useParams();

    const id = Data[params.id];
    console.log(id);

    if (!id) {
        return (
            <div className="errorWrapper">
                <p>404 - Page not found</p>
            </div>
        )
    }

    return (
        <div className="detailsWrapper">
            <img src={id.img_url} alt={id.title}></img>
            <section className="detailsHeadline">
                <h2>{id.title}</h2>
                <h3>{id.published_date}</h3>
            </section>
            <p>{id.description}</p>
            <p className="author">By {id.author}</p>
        </div>
    )
};

export default Details;