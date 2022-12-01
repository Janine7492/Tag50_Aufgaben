import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigationWrapper">
            <h1 className='headerTitle'>My Life</h1>
            <ul>
                <li>
                    <Link to="/home" className="navbar">Home</Link>
                </li>
                <li>
                    <Link to="/blog" className="navbar">Blog</Link>
                </li>
            </ul>
        </div>
    )
};

export default Navigation;