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
    return (
        <div className="chat-main-container">
            <div className="prompt-container">
                <img 
                    className="prompt-bot-icon"
                    src={robot_icon}
                    alt="small robot helper"
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
                {buttonType === "Submit" ? (
                    <button 
                        className={disableStyle}
                        onClick={handleSubmit}
                        disabled={disableButton}
                    >
                        Submit
                    </button>
                ) : (
                    <button 
                        className={disableStyle}
                        onClick={handleClear}
                    >
                        Clear
                    </button>
                )
                }
            </div>
            <div className="ai-response-container">
                {chatResponse?.length > 0 ? chatResponse : ""}
            </div>
        </div>
    )
}

export default AiChat;
