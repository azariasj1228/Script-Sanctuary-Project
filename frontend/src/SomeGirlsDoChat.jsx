import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./SomeGirlsDoChat.css";

// Simulated function to get the current user's username
const getUsername = () => {
  // Replace with actual authentication logic
  return "CurrentUser"; // Example username
};

const SomeGirlsDoChat = () => {
  const [message, setMessage] = useState(""); // State to track input field
  const [chatMessages, setChatMessages] = useState([]); // State to store chat messages
  const [socket, setSocket] = useState(null); // State to store socket instance
  const [username, setUsername] = useState(getUsername()); // Get the username from authentication

  useEffect(() => {
    const newSocket = io("http://localhost:5173");

    newSocket.on("connect", () => {
      console.log("Connected to server");
    });

    newSocket.on("chat message", (msg) => {
      console.log("Message received:", msg); // Debugging line
      setChatMessages((prevMessages) => [...prevMessages, msg]);
    });

    setSocket(newSocket);

    // Cleanup function
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() && socket) {
      const formattedMessage = `${username}: ${message}`;
      console.log("Sending message:", formattedMessage); // Debugging line
      socket.emit("chat message", formattedMessage);
      setMessage(""); // Clear the input field after sending
    }
  };

  return (
    <div className="chat-container">
      <h1 className="chat-title">Some Girls Do - Chat Room</h1>
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

export default SomeGirlsDoChat;
