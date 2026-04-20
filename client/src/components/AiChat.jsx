import React from "react";

import robot_icon from "../../../Artwork/Assets/robot_icon.png";

import "../styles/AiChat.scss";

const AiChat = ({
    buttonType,
    chatResponse, 
    disableButton, 
    disableStyle,
    handleChange,
    handleClear,
    handleSubmit,
    promptValue
}) => {

    console.log("buttonType", buttonType);
    
    return (
        <form 
            className="chat-main-container"
            onSubmit={handleSubmit}
        >
            <div className="prompt-container">
                <img 
                    alt="small robot helper"
                    className="prompt-bot-icon"
                    src={robot_icon}
                />
                <div className="prompt-text-area">
                    <label htmlFor="">What would you like to learn about our solar system?</label>
                    <input 
                        className="prompt"
                        name="submit-button"
                        onChange={handleChange}
                        placeholder="Type your question here!"
                        type="text"
                        value={promptValue}
                    />
                </div>
                {!chatResponse && (
                    <button
                        className={disableStyle}
                        type="submit"
                        disabled={disableButton}
                    >
                        Submit
                    </button>
                )}
                {chatResponse && (
                    <button
                        type="button"
                        className={disableStyle}
                        onClick={handleClear}
                    >
                        Clear
                    </button>
                )}
            </div>
            <div className="ai-response-container">
                {chatResponse?.length > 0 ? chatResponse : ""}
            </div>
        </form>
    )
}

export default AiChat;
