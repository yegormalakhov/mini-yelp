import "./Header.css"
import background from "../img/header.jpg"
import image from "../img/logo.png"
import React, { useState } from "react";

const Header = (searchWord) => {
    const [input, setInput] = useState("");
    return (
        <div className="header-container" style={{ backgroundImage: `url(${background})` ,backgroundRepeat:"no-repeat", backgroundPosition: "center", backgroundSize:"cover",  }}>


<div className="Nav">
    <div className="Nav-links">
        <a href="#">Beitrag Schreiben</a>|
        <a href="#">Events</a>|
        <a href="#">Forum</a>|
        <a href="#">Belp for Business</a>
    </div>

    <div>
        <button className="nav-button">Anmelden</button>    
        <button className="nav-button">Registrieren</button>    
    </div>
</div>

<img className="logo" src={image} alt="logo"/>

        <div className="header-style">
        <form className="header-style" 
            onSubmit={(e) => {
            e.preventDefault();
            searchWord(input)
            }}>
            <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Search by Cuisine"/>
            <input type="text" placeholder="Search by City"/>
            <button className="button">Belp</button>
            </form>
        </div>
        </div>


    ) 
    }
    export default Header