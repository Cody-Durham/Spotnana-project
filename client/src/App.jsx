import { useEffect, useState } from "react";
import "./styles/Global.scss";

import saturn_pic from "../../Artwork/Assets/PIA21345.jpg";
import Header from "./components/Header";
import AiChat from "./components/AiChat";

function App() {
  // const [picOfDay, setPicOfDay] = useState(null);
  
  
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const res = await fetch("http://localhost:8080/api/pic");
//       const data = await res.json();

//       setPicOfDay(data.url);
//     } catch (err) {
//       console.log("error", err);
//     }
//   };

//   fetchData();
// }, []);

  return (
    <div>
      <Header />
      <div className="pic-container">
        <img 
        className="testing"
        src={saturn_pic} 
        alt="Picture of saturn in space"
        />
      </div>
        <AiChat />
    </div>
  );
}

export default App;