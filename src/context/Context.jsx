import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState({}); 
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord);
        }, 75 * index);
    };

    const newChat = () => {
        setLoading(false);
        setShowResult(false);

    };

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);

        if (prevPrompts[prompt]) {
            displayResponse(prevPrompts[prompt]);
        } else {
            const response = await run(prompt);
            let cleanedResponse = response;
            if (response.startsWith("undefined##")) {
                cleanedResponse = response.substring(response.indexOf("##") + 2);
            }
            let responseArray = cleanedResponse.split("**");
            let newResponse = "";
            for (let i = 0; i < responseArray.length; i++) {
                if (i === 0 || i % 2 !== 1) {
                    newResponse += responseArray[i];
                } else {
                    newResponse += "<b>" + responseArray[i] + "</b>";
                }
            }
            let newResponseWithBreaks = newResponse.split("*").join("<br/>");
            setPrevPrompts(prev => ({ ...prev, [prompt]: newResponseWithBreaks }));
            displayResponse(newResponseWithBreaks);
        }

        setLoading(false);  
        setInput("");       
    };

   
    const displayResponse = (response) => {
        let newResponseArray = response.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ");
        }
    };

    const contextValue = {
        prevPrompts,  
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setResultData,
        input,
        setInput,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
