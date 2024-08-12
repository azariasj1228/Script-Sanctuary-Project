import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header"; // Adjust path if needed
import "./SevenHusbandsDetails.css";

const TheSevenHusbandsDetails = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const storedComments =
      JSON.parse(localStorage.getItem("seven-husbands-comments")) || [];
    setComments(storedComments);
  }, []);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setNewComment("");
      localStorage.setItem(
        "seven-husbands-comments",
        JSON.stringify(updatedComments)
      );
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem(
      "seven-husbands-comments",
      JSON.stringify(updatedComments)
    );
  };

  return (
    <div className="seven-husbands-details">
      <Header /> {/* Include the Header component */}
      <header className="details-header">
        <h1>The Seven Husbands of Evelyn Hugo</h1>
      </header>
      <div className="book-image">
        <a
          href="https://bookshop.org/p/books/the-seven-husbands-of-evelyn-hugo-taylor-jenkins-reid/6762842?ean=9781501161933"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images-us.bookshop.org/ingram/9781501161933.jpg?height=500&v=v2" // Replace with actual image URL
            alt="The Seven Husbands of Evelyn Hugo"
          />
        </a>
      </div>
      <div className="book-summary">
        <h2>About the Book</h2>
        <p>
          The Seven Husbands of Evelyn Hugo by Taylor Jenkins Reid is a
          captivating tale of glamour, love, and loss. This enthralling story
          dives into the life of a Hollywood icon, unraveling secrets of her
          seven marriages and the sacrifices she made along the way.
        </p>

        <h3>Meeting Dates</h3>
        <ul>
          <li>August 20, 2024 - Chapters 1-5 Discussion</li>
          <li>September 15, 2024 - Chapters 6-10 Discussion</li>
          <li>October 10, 2024 - Final Discussion and Wrap-Up</li>
        </ul>

        <h3>Challenges</h3>
        <ul>
          <li>
            Challenge 1: Analyze the significance of each marriage in Evelyn's
            life
          </li>
          <li>
            Challenge 2: Discuss the impact of Hollywood on personal identity
          </li>
          <li>
            Challenge 3: Predict how the story reflects societal changes over
            time
          </li>
        </ul>

        <Link to="/thesevenhusbandschat" className="button">
          Join The Meeting
        </Link>

        <div className="comments-section">
          <h2>Comments</h2>
          <div className="comments-list">
            {comments.map((comment, index) => (
              <div key={index} className="comment-item">
                <p>{comment}</p>
                <button
                  onClick={() => handleDeleteComment(index)}
                  className="delete-button"
                >
                  Delete
                </button>
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
    </div>
  );
};

export default TheSevenHusbandsDetails;
