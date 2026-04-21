import React from "react";

import Buttons from "./Buttons";
import planet_icon from "../../../Artwork/Assets/planet_icon.png";

import "../styles/Button.scss";
import "../styles/Header.scss";

const Header = () => {
    return (
        <div className="main-header-container">
            
            <div className="upper-container">
                <div className="left"><img className="planet-logo" src={planet_icon} alt="" /></div>
                <div className="right">Curious</div>
                <div className="tagline">Question Everything.</div>
            </div>
            <div className="lower-container">
                <Buttons 
                      buttonText="Google Earth"
                      mainLink="https://www.google.com/intl/en_us/earth/education/"
                        items={[
                        { name: "Explore Earth", link: "https://www.google.com/intl/en_us/earth/education/explore-earth/" },
                        { name: "Inspiration", link: "https://www.google.com/intl/en_us/earth/education/inspiration/" },
                        { name: "Resources", link: "https://www.google.com/intl/en_us/earth/education/resources/" },
                    ]}
                />
                <div style={{color: "rgb(128, 124, 151)"}}>&nbsp;|</div>
                <Buttons 
                    buttonText="NASA"
                    mainLink="https://www.nasa.gov"
                    items={[
                        {name: "Hubble", link: "https://science.nasa.gov/mission/hubble/"},
                        {name: "Space Station", link: "https://www.nasa.gov/international-space-station/"},
                        {name: "Destinations", link: "https://www.nasa.gov/humans-in-space/destinations/"},
                        {name: "Obervatories", link: "https://science.nasa.gov/universe/observatories/"},
                        {name: "Search for Life", link: "https://science.nasa.gov/exoplanets/search-for-life/"}
                    ]}
                />
                <div style={{color: "rgb(128, 124, 151)"}}>&nbsp;|</div>
                <Buttons
                    buttonText="Dinosaurs"
                    mainLink="https://kids.nationalgeographic.com/animals/prehistoric"
                    items={[
                        {name:"Allosaurus", link:"https://kids.nationalgeographic.com/animals/prehistoric/facts/allosaurus"},
                        {name:"Anchiornis Huxleyi", link:"https://kids.nationalgeographic.com/animals/prehistoric/facts/anchiornis-huxleyi"},
                        {name:"Ankylosaurus", link:"https://kids.nationalgeographic.com/animals/prehistoric/facts/ankylosaurus"},
                        {name:"Apatosaurus", link:"https://kids.nationalgeographic.com/animals/prehistoric/facts/apatosaurus"},
                        {name:"Archaeopteryx", link:"https://kids.nationalgeographic.com/animals/prehistoric/facts/archaeopteryx"},
                        {name:"Brachiosaurus", link:"https://kids.nationalgeographic.com/animals/prehistoric/facts/brachiosaurus"},
                        {name:"Dilophosaurus", link:"https://kids.nationalgeographic.com/animals/prehistoric/facts/dilophosaurus"},
                        {name:"Dracorex", link:"https://kids.nationalgeographic.com/animals/prehistoric/facts/dracorex"},
                    ]}
                />
            </div>
        </div>
    );
}

export default Header;
