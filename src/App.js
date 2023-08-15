import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
    const [posts, setPosts] = useState([["hello", "I love GX!", "#0fa000","cum"],["hlo", "I hate GX!", "#b7ac59","cum"]]);
    const [message, setNewMessage] = useState("");
	const [name, setNewName] = useState("");
	const [color, setNewColor] = useState("#0fa000");
	
	

    
	const handleNewMsgChange = (e) => {
        setNewMessage(e.target.value);
    };
	
	const handleNameChange = (e) => {
		setNewName(e.target.value);	
	}; 
	
	const handleColorChange = (e) => {
		setNewColor(e.target.value);
	};
	
    const handleNewMsgSubmit = (e) => {
        e.preventDefault();
        setPosts([...posts, [message,name,color]]);
        setNewMessage("");
    };

	
	
    return (
        <div className="App">
            <img src="/gx-logo.jpg" style={{ position: "sticky", top: "5px", left: "5px", height: "50px" }} />
            <div id="chatbox-parent">
                <div id="chatbox">
                    {posts.map((msg) => (
                        <div className="post">
							<p className="name" style={{color:msg[2]}}>{msg[1]}</p>
							<p className="message">{msg[0]}</p>
						</div>
                    ))}
                </div>
                <div id="new-message-box">
                    <form onSubmit={handleNewMsgSubmit}>
                        <input type="text" value={message} onChange={handleNewMsgChange}></input>
						<input type="text" value={name} onChange={handleNameChange}></input>
						<input type="text" value={color} onChange={handleColorChange}></input>
                        <button type="submit">Post!</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
