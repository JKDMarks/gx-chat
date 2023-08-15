import React, { useState, useEffect } from "react";

import "./App.css";

class post{
	constructor(m,n,c){
		this.message = m;
		this.name = n;
		this.color = c;
	};
}

function App() {
    const [posts, setPosts] = useState([]);
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
        setPosts([...posts, new post(message,name,color)]);
        setNewMessage("");
    };

	
	
    return (
        <div className="App">
            <img src="/gx-logo.jpg" style={{ position: "sticky", top: "5px", left: "5px", height: "50px" }} />
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
