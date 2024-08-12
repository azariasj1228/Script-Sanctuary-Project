import React, { useState, useEffect } from "react";
import "./SomeGirlsDoDetails.css";

const SomeGirlsDoDetails = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Load comments from localStorage if available
    const storedComments =
      JSON.parse(localStorage.getItem("someGirlsDoComments")) || [];
    setComments(storedComments);
  }, []);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setNewComment("");
      localStorage.setItem(
        "someGirlsDoComments",
        JSON.stringify(updatedComments)
      );
    }
  };

  return (
    <div className="some-girls-do-details">
      <div className="book-details">
        <div className="book-image">
          <a
            href="https://bookshop.org/p/books/some-girls-do-jennifer-dugan/15125229?ean=9780593112557"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://images-us.bookshop.org/ingram/9780593112557.jpg?height=500&v=v2"
              alt="Some Girls Do"
            />
          </a>
        </div>
        <div className="book-summary">
          <h1>Some Girls Do</h1>
          <p>
            <strong>Author:</strong> Jennifer Dugan
          </p>
          <p>
            <strong>Summary:</strong> Some Girls Do is a heartwarming romance
            about self-discovery and love. This captivating novel explores the
            lives of two young women from different worlds who find themselves
            drawn to each other. As they navigate their feelings, they must
            confront the expectations of their families and society.
          </p>
          <p>
            <strong>Meetings:</strong>
            <ul>
              <li>August 10, 2024 - 7:00 PM</li>
              <li>August 17, 2024 - 7:00 PM</li>
              <li>August 24, 2024 - 7:00 PM</li>
            </ul>
          </p>
          <p>
            <strong>Challenge:</strong> For readers who want to experience the
            book alone, try journaling your thoughts and feelings after each
            chapter. Reflect on how the characters' experiences resonate with
            your own.
          </p>
          <button
            className="join-meeting-button"
            onClick={() => (window.location.href = "/somegirlsdochat")}
          >
            Join Live Chat
          </button>
        </div>
      </div>
      <div className="comments-section">
        <h2>Comments</h2>
        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment-item">
              {comment}
            </div>
          ))}
        </div>
        <div className="add-comment">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Leave a comment..."
          />
          <button onClick={handleAddComment}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SomeGirlsDoDetails;
