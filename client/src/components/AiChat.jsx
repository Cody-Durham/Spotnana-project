import React from "react";
import robot_icon from "../../../Artwork/Assets/robot_icon.png";

import "../styles/AiChat.scss";

const AiChat = ({handleSubmit, handleChange}) => {
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
            </div>
            <button 
                onClick={handleSubmit}
            >
                testing
            </button>
            <div className="ai-response-container">
            </div>
        </div>
    )
}

export default AiChat;


// const handleOnChange = (e) => {
//         const { checked, name, value } = e.target;
//         let newVal = value;
//         if (name === "ageAffirmation") {
//             newVal = checked ? "1" : "0";
//         }
//         formDispatch({
//             type: "text",
//             field: name,
//             payload: newVal
//         });
//     };