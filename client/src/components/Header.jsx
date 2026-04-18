import React from "react";
import "../styles/Header.scss";
import planet_icon from "../../../Artwork/Assets/planet_icon.png";


const Header = () => {
    return (
        <div className="main-header-container">
            <div className="upper-container">
                <div className="left"><img className="planet-logo" src={planet_icon} alt="" /></div>
                <div className="right">Curious</div>
                <div className="tagline">Lets explore out solar system</div>
            </div>
            {/* <div className="lower-container">

            </div> */}
        </div>
    );
}

export default Header;
