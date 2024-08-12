import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header"; // Import the Header component
import "./ThePerfectMarriageDetails.css"; // Import the CSS file

const ThePerfectMarriageDetails = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment) {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setNewComment("");
      localStorage.setItem(
        "perfect-marriage-comments",
        JSON.stringify(updatedComments)
      );
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem(
      "perfect-marriage-comments",
      JSON.stringify(updatedComments)
    );
  };

  useEffect(() => {
    const storedComments =
      JSON.parse(localStorage.getItem("perfect-marriage-comments")) || [];
    setComments(storedComments);
  }, []);

  return (
    <div className="details-page">
      <Header /> {/* Use the Header component */}
      <div className="details-content">
        <div className="details-image">
          <a
            href="https://bookshop.org/p/books/the-perfect-marriage-jeneva-rose/21643995?ean=9798874866358"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="data:image/jpeg;base64,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" // Replace with actual image URL
              alt="The Perfect Marriage"
            />
          </a>
        </div>
        <div className="details-text">
          <h2>About the Book</h2>
          <p>
            The Perfect Marriage by Jeneva Rose is a gripping mystery that keeps
            you guessing until the end. With its intricate plot and compelling
            characters, this book is a must-read for any mystery enthusiast.
          </p>

          <h3>Meeting Dates</h3>
          <ul>
            <li>March 15, 2024 - Chapter 1-5 Discussion</li>
            <li>April 10, 2024 - Chapter 6-10 Discussion</li>
            <li>May 5, 2024 - Final Discussion and Wrap-Up</li>
          </ul>

          <h3>Challenges</h3>
          <ul>
            <li>Challenge 1: Identify key plot twists</li>
            <li>Challenge 2: Discuss character motivations</li>
            <li>Challenge 3: Predict the ending before the final chapter</li>
          </ul>

          <Link to="/theperfectmarriagechat" className="button">
            Join The Meeting
          </Link>

          <div className="comment-section">
            <h3>Comments</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddComment();
              }}
            >
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Leave a comment..."
              />
              <button type="submit">Submit Comment</button>
            </form>
            <div className="comment-list">
              {comments.map((comment, index) => (
                <div key={index} className="comment-item">
                  <p>{comment}</p>
                  <button onClick={() => handleDeleteComment(index)}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThePerfectMarriageDetails;
