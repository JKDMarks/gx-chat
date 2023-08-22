import React, { useState } from "react";

import "./App.css";

const MAX_MSG_LEN = 1000;

type Post = {
    message: string;
    name: string;
    color: string;
};

function App() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [newMessage, setNewMessage] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [color, setColor] = useState<string>("#0fa000");

    const handleNewMsgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.target.value.slice(0, MAX_MSG_LEN));
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value.slice(0, 10));
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    };

    const handleNewMsgSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name.length === 0) {
            window.alert("Name can't be blank");
            return;
        }
        setPosts([...posts, { message: newMessage, name, color }]);
        setNewMessage("");
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
                        <label>Message</label>
                        <input type="text" value={newMessage} onChange={handleNewMsgChange}></input>
                        <label>Username</label>
                        <input type="text" value={name} onChange={handleNameChange}></input>
                        <label>Color</label>
                        <input type="color" value={color} onChange={handleColorChange}></input>
                        <button type="submit">Post!</button>
                    </form>
                    <p id="charCounter">
                        {newMessage.length}/{MAX_MSG_LEN}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
