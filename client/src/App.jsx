import { useCallback, useEffect, useState } from "react";

import AiChat from "./components/AiChat";
import Header from "./components/Header";
import Loader from "./components/Loader";

import saturn_pic from "../../Artwork/Assets/PIA21345.jpg";

import "./styles/Global.scss";

function App() {
  const [chatResponse, setChatResponse] = useState(null);
  const [disableButton, setDisableButton] = useState(true);
  const [promptValue, setPromptValue] = useState("");
  const [errorText, setErrorText] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  
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
      setShowLoader(true)
      const res = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({input: promptValue}),
        signal: AbortSignal.timeout(7000) // 7 sec timeout
      });
      const data = await res.json();
      setChatResponse(data.output);
      setShowLoader(false);

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

  /**
   * @name handleClearPrompt
   * set prompt and text error text back to empty string ("")
   */
  const handleClearPrompt = () => {
    setPromptValue("");
    setErrorText("");
  }

  // Limit the length of input question to 15o characters
  useEffect(() => {
    if (promptValue && promptValue.length === 150) {
      setErrorText("Opps, too long. Try a shorter question");
    }
  }, [promptValue]);

/**
 * Disable button
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
          handleSubmit={handleSubmit}
          promptValue={promptValue}
          showLoader={showLoader}
        />
    </div>
  );
}

export default App;
