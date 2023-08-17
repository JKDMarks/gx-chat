import React, { useState, useEffect } from "react";

import "./App.css";


function App() {
    const [posts, setPosts] = useState([{ message: "cum", name: "name", color: "pink" }]);
    const [message, setNewMessage] = useState("");
	const [name, setNewName] = useState("");
	const [color, setNewColor] = useState("#0fa000");
	const [messageLength, setMessageLength] = useState(0);
	
	

    //testing
	const handleNewMsgChange = (e) => {
        setNewMessage(e.target.value);
		setMessageLength(e.target.value.length);
    };
	
	const handleNameChange = (e) => {
		setNewName(e.target.value);	
	}; 
	
	const handleColorChange = (e) => {
		setNewColor(e.target.value);
	};
	
	
    const handleNewMsgSubmit = (e) => {
        e.preventDefault();
		setPosts([...posts, { message: message, name: name, color: color }]);
        setNewMessage("");
		setMessageLength(0);
    };

	
	
    return (
        <div className="App">
            <img src="/gx-logo.jpg" style={{ position: "sticky", top: "5px", left: "5px", height: "200px", mixBlendMode: "difference" }} />
            <div id="chatbox-parent">
                <div id="chatbox">
                    {posts.map((msg) => (
                        <div className="post">
							<p className="name" style={{color:msg.color}}>{msg.name}</p>
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
					<p id="charCounter">{messageLength}/1000</p>
                </div>
            </div>
        </div>
    );
}

export default App;
