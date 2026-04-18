import { useEffect, useState } from "react";
import "./styles/Global.scss";

import Header from "./components/Header";

function App() {
  const [picOfDay, setPicOfDay] = useState(null);
  
  
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/pic");
      const data = await res.json();

      setPicOfDay(data.url);
    } catch (err) {
      console.log("error", err);
    }
  };

  fetchData();
}, []);

  return (
    <div className="background-container">
      {/* <h1>Testing</h1> */}
      {/* <div>
        <img src={picOfDay} alt="" />
      </div> */}
      <Header />
    </div>
  );
}

export default App;