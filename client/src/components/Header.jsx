import React from "react";
import "../styles/Header.scss";
import planet_icon from "../../../Artwork/Assets/planet_icon.png";

const Header = () => {
    return (
        <div className="main-header-container">
            <div className="upper-container">
                <div className="left"><img className="planet-logo" src={planet_icon} alt="" /></div>
                <div className="right">Curious</div>
                <div className="tagline">Lets explore our solar system</div>
            </div>
            <div className="lower-container">
                <div 
                    className="link-style"
                    name="home"
                    onClick={() => {
                        console.log("name", name) // neeed to fix
                    }}
                    role="button" 
                    tabIndex="0"
                    >
                    Home
                </div>
                <div style={{marginRight: "15px", color: "rgb(128, 124, 151)"}}>&nbsp;|</div>
                <div 
                    className="link-style" 
                    name="our-planets"
                    onClick={() => {
                        console.log("name", name) // neeed to fix
                    }}
                    role="button" 
                    tabIndex="0"
                >
                    Our Planets
                </div>
                <div style={{marginRight: "15px", color: "rgb(128, 124, 151)"}}>&nbsp;|</div>
                <div 
                    className="link-style" 
                    name="nasa"
                    onClick={() => {
                        console.log("name", name) // neeed to fix
                    }}
                    role="button" 
                    tabIndex="0"
                    >
                    NASA
                </div>
                <div style={{marginRight: "15px", color: "rgb(128, 124, 151)"}}>&nbsp;|</div>
            </div>
        </div>
    );
}

export default Header;
