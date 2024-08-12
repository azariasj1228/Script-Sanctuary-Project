// Recommendations.jsx
import React, { useEffect, useState } from "react";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const storedRecommendations = JSON.parse(
      localStorage.getItem("recommendations")
    );
    if (storedRecommendations) {
      setRecommendations(storedRecommendations);
    }
  }, []);

  return (
    <div className="recommendations-container">
      <h2>Book Recommendations</h2>
      {recommendations.length > 0 ? (
        recommendations.map((book, index) => (
          <div key={index}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>{book.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default Recommendations;
