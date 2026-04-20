import { useEffect, useState } from "react";

import AiChat from "./components/AiChat";
import Header from "./components/Header";

import saturn_pic from "../../Artwork/Assets/PIA21345.jpg";

import "./styles/Global.scss";

function App() {
  const [chatResponse, setChatData] = useState(null);
  const [promptValue, setPrompt] = useState("");
  
  const handleChange = (e) => {
    const {value, name} = e.target;
    setPrompt(value);
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({input: promptValue}),
        signal: AbortSignal.timeout(5000) // 5 sec timeout
      });
      const data = await res.json();
      setChatData(data.output);

    } catch (err) {
      console.log("error", err)
    }
  };
  /**
   * NASA API, might still use
   */
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("http://localhost:8080/api/pic");
//         const data = await res.json();

//         setPicOfDay(data.url);
//       } catch (err) {
//         console.log("error", err);
//       }
//     };

//     fetchData();
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
        <AiChat 
          chatResponse={chatResponse}
          handleSubmit={handleSubmit} 
          handleChange={handleChange} 
        />
    </div>
  );
}

export default App;
