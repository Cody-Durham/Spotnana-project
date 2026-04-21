import { useCallback, useEffect, useState } from "react";

import AiChat from "./components/AiChat";
import Header from "./components/Header";

import saturn_pic from "../../Artwork/Assets/PIA21345.jpg";

import "./styles/Global.scss";

function App() {
  const [chatResponse, setChatResponse] = useState(null);
  const [disableButton, setDisableButton] = useState(true);
  const [promptValue, setPromptValue] = useState("");
  const [errorText, setErrorText] = useState("");
  
  const disableStyle = promptValue !== "" ? "submit-button-style" : "submit-button-disable-style";

  /**
   * @name handleChange
   * @param {*} e 
   */
  const handleChange = (e) => {
    const {value} = e.target;
    setPromptValue(value);
  };

  /**
   * @name handleSubmit
   * Fetch input data from OpenAi
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

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
      setChatResponse(data.output);

    } catch (err) {
      console.log("error", err)
    }
  };

  /**
   * @name handleClear
   * Reset fields (clear fields)
   */
  const handleClear = () => {
    setChatResponse(null);
    setPromptValue("");  
    setErrorText("");
  };
  // const handleClearPrompt = () => {
  //   setPromptValue("");
  //   // setErrorText("");
  //   console.log("hitting PropmptClear?");
  // }

  useEffect(() => {
    if (promptValue && promptValue.length === 150) {
      setErrorText("Opps, too long. Try a shorter question");
    }
  }, [promptValue]);

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

/**
 * Disable button cd 
 */
useEffect(() => {
  if (promptValue !== "") {
    setDisableButton(false);
  } else {
    setDisableButton(true);
    setErrorText("")
    setChatResponse(null);
  }
}, [chatResponse, promptValue]);

  return (
    <div>
      <Header />
      <div className="pic-container">
        <img 
        className="img"
        src={saturn_pic} 
        alt="Picture of saturn in space"
        />
      </div>
        <AiChat 
          chatResponse={chatResponse}
          disableButton={disableButton}
          disableStyle={disableStyle}
          errorText={errorText}
          handleChange={handleChange}
          handleClear={handleClear}
          // handleClearPrompt={handleClearPrompt}
          handleSubmit={handleSubmit}
          promptValue={promptValue}
        />
    </div>
  );
}

export default App;
