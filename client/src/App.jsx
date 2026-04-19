import { useEffect, useState } from "react";
import "./styles/Global.scss";

import saturn_pic from "../../Artwork/Assets/PIA21345.jpg";
import Header from "./components/Header";
import AiChat from "./components/AiChat";

function App() {
  // const [picOfDay, setPicOfDay] = useState(null);
  const [chatData, setChatData] = useState(null);
  const [prompt, setPrompt] = useState("");

  console.log("prompt", prompt);
  
  
  const handleChange = (e) => {
    const {value, name} = e.target;
    
    setPrompt(value);
  };

  const handleSubmit = async () => {
    console.log("1 - clicked");
    try {
      console.log("2 - clicked");
      const res = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        input: "Write a one-sentence bedtime story about a unicorn.",
        // body: JSON.stringify({ input }),
        // body: JSON.stringify({ prompt }),
        signal: AbortSignal.timeout(15000) // 15 sec timeout
      });
      console.log("res", res);
      
      console.log("3 - response received");
      // const data = await res.json();
      // console.log("data", data);
      
      // setChatData(data.output);

    } catch (err) {
      console.log("error", err)
    }
  };

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

  // Temp, remove when AI chat is complete;
  // useEffect(() => {
  //   const fetchModels = async () => {
  //     const res = await fetch("http://localhost:8080/api/models");
  //     const data = await res.json();
  //     console.log("models><><><", data);
  //   }
  //   fetchModels();
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
        <AiChat handleSubmit={handleSubmit} handleChange={handleChange}/>
    </div>
  );
}

export default App;