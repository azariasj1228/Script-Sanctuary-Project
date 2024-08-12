import React, { useState, useEffect } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const [readingBooks, setReadingBooks] = useState([]);
  const [toReadBooks, setToReadBooks] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  // Fetch book data from Google Books API based on user input
  const fetchBookCover = async (title) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyAh8QpER_j5jkOMO0zH_YXKlBPItJVx0nE`
      );
      const data = await response.json();
      return (
        data.items[0]?.volumeInfo.imageLinks?.thumbnail ||
        "https://via.placeholder.com/128x192?text=No+Cover"
      );
    } catch (error) {
      console.error("Error fetching book cover:", error);
      return "https://via.placeholder.com/128x192?text=No+Cover";
    }
  };

  // Example function to fetch recommendations based on favorite genre
  const fetchRecommendations = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${userData.favoriteGenre}&key=AIzaSyAh8QpER_j5jkOMO0zH_YXKlBPItJVx0nE`
      );
      const data = await response.json();
      const books = data.items.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors
          ? item.volumeInfo.authors.join(", ")
          : "Unknown",
        coverImage:
          item.volumeInfo.imageLinks?.thumbnail ||
          "https://via.placeholder.com/128x192?text=No+Cover",
      }));
      setRecommendations(books);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  useEffect(() => {
    // Fetch recommendations when the component mounts
    fetchRecommendations();
  }, []);

  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile Page</h2>
      <div className="profile-section">
        <h3>About You</h3>
        <p>Username: {userData.username}</p>
        <p>Email: {userData.email}</p>
        <p>Favorite Book: {userData.favoriteBook}</p>
        <p>Favorite Genre: {userData.favoriteGenre}</p>
      </div>

      <div className="profile-section">
        <h3>Books You're Reading</h3>
        <div className="bookshelf">
          {readingBooks.map((book, index) => (
            <div key={index} className="book-card">
              <img
                src={book.coverImage}
                alt={book.title}
                className="book-cover"
              />
              <p className="book-title">{book.title}</p>
            </div>
          ))}
          <div className="add-book">
            <input
              type="text"
              placeholder="Enter book title..."
              onKeyDown={async (e) => {
                if (e.key === "Enter" && e.target.value) {
                  const cover = await fetchBookCover(e.target.value);
                  setReadingBooks([
                    ...readingBooks,
                    { title: e.target.value, coverImage: cover },
                  ]);
                  e.target.value = "";
                }
              }}
            />
          </div>
        </div>
      </div>

      <div className="profile-section">
        <h3>Books You Want to Read</h3>
        <div className="bookshelf">
          {toReadBooks.map((book, index) => (
            <div key={index} className="book-card">
              <img
                src={book.coverImage}
                alt={book.title}
                className="book-cover"
              />
              <p className="book-title">{book.title}</p>
            </div>
          ))}
          <div className="add-book">
            <input
              type="text"
              placeholder="Enter book title..."
              onKeyDown={async (e) => {
                if (e.key === "Enter" && e.target.value) {
                  const cover = await fetchBookCover(e.target.value);
                  setToReadBooks([
                    ...toReadBooks,
                    { title: e.target.value, coverImage: cover },
                  ]);
                  e.target.value = "";
                }
              }}
            />
          </div>
        </div>
      </div>

      <div className="profile-section">
        <h3>Recommended for You</h3>
        <div className="recommendations">
          {recommendations.map((book) => (
            <div key={book.id} className="book-card">
              <img
                src={book.coverImage}
                alt={book.title}
                className="book-cover"
              />
              <p className="book-title">{book.title}</p>
              <p className="book-author">by {book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
