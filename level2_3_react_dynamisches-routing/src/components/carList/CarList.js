import "./CarList.css";
import Data from "../data/Data.json";
import Car from "../car/Car";


function CarList() {

    return (
        <div className="grid">
            {Data.map((singleCar) => {
                return <Car key={singleCar.id} carName={singleCar.CarMake} carModel={singleCar.carModel} id={singleCar.id} />
            })}
        </div>
    );
};

export default CarList;