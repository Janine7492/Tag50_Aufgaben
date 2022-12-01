import { Link } from "react-router-dom";
import "./Home.css";


function Home() {
    return (
        <div className="homeWrapper">
            <h2>Welcome to my simple Blog</h2>
            <Link to="/blog" className="button">Go to articles</Link>
        </div>
    )
};

export default Home;