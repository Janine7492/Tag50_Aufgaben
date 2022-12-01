import { useParams } from "react-router-dom";
import Data from "../components/data/Data.json"

function Details() {

    const params = useParams();

    const car = Data[params.car];

    console.log(car);

    return (
        <div>
            <h2>{car.CarMake}</h2>
            <h2>{car.carModel}</h2>
            <p>{car.CarYear}</p>

        </div>
    );
};

export default Details;