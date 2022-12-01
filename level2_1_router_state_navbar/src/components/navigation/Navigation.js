import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Logo from "../img/Logo.png"

function Navigation() {

    const [chosenMenu, setChosenMenu] = useState(false);
    const [chosenContact, setChosenContact] = useState(false);
    const [chosenOpening, setChosenOpening] = useState(false);
    const [chosenGalery, setChosenGalery] = useState(false);

    const menuClickHandler = () => {
        setChosenMenu(true);
        setChosenContact(false);
        setChosenOpening(false);
        setChosenGalery(false);
    }
    const contactClickHandler = () => {
        setChosenMenu(false);
        setChosenContact(true);
        setChosenOpening(false);
        setChosenGalery(false);
    }
    const openingClickHandler = () => {
        setChosenMenu(false);
        setChosenContact(false);
        setChosenOpening(true);
        setChosenGalery(false);
    }
    const galeryClickHandler = () => {
        setChosenMenu(false);
        setChosenContact(false);
        setChosenOpening(false);
        setChosenGalery(true);
    }

    return (
        <div className="navbarWrapper">
            <div className="logoSection">
                <img src={Logo} alt="logo"></img>
                <h1>Kim's Café Köln</h1>
            </div>
            <ul className="navbarList">
                <li className={chosenMenu ? "darkblueBgc" : "lightblueBgc"}><Link to="/menu" className="navbarLink" onClick={menuClickHandler}>Speisekarte</Link></li>
                <li className={chosenContact ? "darkblueBgc" : "lightblueBgc"}><Link to="/contact" className="navbarLink" onClick={contactClickHandler}>Kontakt</Link></li>
                <li className={chosenOpening ? "darkblueBgc" : "lightblueBgc"}><Link to="/opening" className="navbarLink" onClick={openingClickHandler}>Öffnungszeiten</Link></li>
                <li className={chosenGalery ? "darkblueBgc" : "lightblueBgc"}><Link to="/galery" className="navbarLink" onClick={galeryClickHandler}>Galerie</Link></li>
            </ul>
        </div>
    )
};

export default Navigation;