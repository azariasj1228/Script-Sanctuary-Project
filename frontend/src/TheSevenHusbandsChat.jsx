import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./TheSevenHusbandsChat.css"; // Import your CSS file for styling

// Simulated function to get the current user's username
const getUsername = () => {
  return "CurrentUser"; // Replace with actual authentication logic
};

const TheSevenHusbandsChat = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState(getUsername());

  useEffect(() => {
    const newSocket = io("http://localhost:5173");

    newSocket.on("connect", () => {
      console.log("Connected to server");
    });

    newSocket.on("chat message", (msg) => {
      setChatMessages((prevMessages) => [...prevMessages, msg]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() && socket) {
      const formattedMessage = `${username}: ${message}`;
      socket.emit("chat message", formattedMessage);
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <h1 className="chat-title">
        The Seven Husbands of Evelyn Hugo - Chat Room
      </h1>
      <div className="chat-box">
        {chatMessages.map((msg, index) => (
          <div key={index} className="chat-message">
            {msg}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          id="messageInput"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-label="Message input"
          placeholder="Type your message here..."
        />
        <button id="sendMessageButton" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default TheSevenHusbandsChat;
