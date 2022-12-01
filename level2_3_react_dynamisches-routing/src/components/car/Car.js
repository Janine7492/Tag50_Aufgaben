import "./Car.css";
import { Link } from "react-router-dom";

function Car(props) {
    return (
        <div className="grid-item">
            <h2>{props.carName} -  {props.carModel}</h2>
            <Link to={`/details/${props.id - 1}`}>Read more</Link>
        </div>
    );
};

export default Car;