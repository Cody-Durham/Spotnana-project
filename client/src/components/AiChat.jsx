import React from "react";

import robot_icon from "../../../Artwork/Assets/robot_icon.png";

import "../styles/AiChat.scss";

const AiChat = ({chatResponse, handleSubmit, handleChange}) => {
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
                        type="text"
                        name="submit-button"
                        className="prompt"
                        placeholder="Type your question here!"
                        onChange={handleChange}
                    />
                </div>
                <button className="submit-button" onClick={handleSubmit}>
                    Sumbmit
                </button>
            </div>
            <div className="ai-response-container">
                {chatResponse?.length > 0 ? chatResponse : ""}
            </div>
        </div>
    )
}

export default AiChat;
