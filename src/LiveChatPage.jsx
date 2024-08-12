import React from "react";
import "./LiveChatPage.css";

const LiveChatPage = () => {
  const bookChats = [
    {
      id: 1,
      title: "Some Girls Do",
      chatLink: "/live-chat/some-girls-do",
    },
    {
      id: 2,
      title: "The Perfect Marriage",
      chatLink: "/live-chat/the-perfect-marriage",
    },
    {
      id: 3,
      title: "The Seven Husbands of Evelyn Hugo",
      chatLink: "/live-chat/seven-husbands",
    },
  ];

  return (
    <div className="live-chat-page">
      <h1>Live Chats for Book Club</h1>
      {bookChats.map((book) => (
        <div key={book.id} className="live-chat-option">
          <h2>{book.title}</h2>
          <p>Join the live chat for this book to discuss with other readers.</p>
          <a href={book.chatLink} className="chat-button">
            Join Live Chat
          </a>
        </div>
      ))}
    </div>
  );
};

export default LiveChatPage;
