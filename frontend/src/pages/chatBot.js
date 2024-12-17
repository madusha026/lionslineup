import React, {useState} from "react";
import './chatBot.css'

const ChatBot = () => {

    const [response, setResponse] = useState('');

    const handleSubmit = (async) => {
        try{

        }
        catch(error){

        }
    }

    return(
        <div>
            <h2>Hi lionslineup chatbot is here to help you</h2>
            <h2>Question</h2>
            <div className="response-area">
            <textarea>

            </textarea>
            </div>
            
            <div className="button">
            <button onClick={handleSubmit}>
                Submit
            </button>
            </div>

            {response && (
                <div>
                <h2>ChatBot's answer</h2>
                <p>{response}</p>
                </div>
            )}
        </div>
    )
}

export default ChatBot;