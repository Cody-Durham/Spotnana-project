import React from "react";

import robot_icon from "../../../Artwork/Assets/robot_icon.png";
import Loader from "./Loader";

import "../styles/AiChat.scss";

const AiChat = ({
    chatResponse,
    disableButton, 
    disableStyle,
    errorText,
    handleChange,
    handleClear,
    // handleClearPrompt,
    handleSubmit,
    promptValue,
    showLoader
}) => {
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
                    {errorText && (
                        <div className="length-error">{errorText}</div>
                    )}
                    {/* {promptValue && (
                        <div className="x-container">
                        <button 
                                className="x"
                                // onClick={handleClear}
                                // onClick={handleClearPrompt}
                                type="button"
                            >
                                x
                            </button>
                        </div>
                    )} */}
                    <label htmlFor="submit-button">Ask anything in the whole universe!</label>
                    <input 
                        className="prompt"
                        maxLength="150"
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
                        Clear All
                    </button>
                )}
            </div>
            <div className="ai-response-container">
                {showLoader && (
                    <div style={{
                            minHeight: "100px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Loader />
                    </div>
                )}
                {chatResponse?.length > 0 ? chatResponse : ""}
            </div>
        </form>
    )
}

export default AiChat;
