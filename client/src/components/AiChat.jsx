import React from "react";
import robot_icon from "../../../Artwork/Assets/robot_icon.png";

import "../styles/AiChat.scss";

const AiChat = () => {
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
                        type="text"
                        placeholder="Type your question here!"
                    />
                </div>
            </div>
            <div className="ai-response-container">
            </div>
        </div>
    )
}

export default AiChat;
