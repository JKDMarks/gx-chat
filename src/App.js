import React, { useState } from "react";

import "./App.css";

function App() {
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [color, setColor] = useState("#0fa000");

    const handleNewMsgChange = (e) => {
        setMessage(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleNewMsgSubmit = (e) => {
        e.preventDefault();
        setPosts([...posts, { message, name, color }]);
        setMessage("");
    };

    return (
        <div className="App">
            <img src="/gx-logo.jpg" style={{ position: "sticky", top: "5px", left: "5px", height: "50px" }} />
            <div id="chatbox-parent">
                <div id="chatbox">
                    {posts.map((msg) => (
                        <div className="post">
                            <p className="name" style={{ color: msg.color }}>
                                {msg.name}
                            </p>
                            <p className="message">{msg.message}</p>
                        </div>
                    ))}
                </div>
                <div id="new-message-box">
                    <form onSubmit={handleNewMsgSubmit}>
                        <input type="text" maxlength="1000" value={message} onChange={handleNewMsgChange}></input>
                        <input type="text" maxlength="10" value={name} onChange={handleNameChange}></input>
                        <input type="text" maxlength="7" value={color} onChange={handleColorChange}></input>
                        <button type="submit">Post!</button>
                    </form>
                    <p id="charCounter">{message.length}/1000</p>
                </div>
            </div>
        </div>
    );
}

export default App;
