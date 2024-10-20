import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, I'm Gemini.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>What is the Big Bang Theory, and what evidence supports it?</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm  creative team-building activities for a company offsite</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>How do I iterate over a linked list?</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Enter your prompt here"/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccuracte info, including about people, so double-check its responses. Your privacy and Gemini App
                    </p>
                </div>
            </div>
        </div>
    )    

};

/*AIzaSyCOaSvZgqYyjfqurtmCUYpZA64-YQr_J2g*/

export default Main;