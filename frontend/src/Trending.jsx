import React, { useState, useEffect } from "react";
import "./Trending.css";
import { getUserPreferences, recommendBooks } from "./recommendationEngine";
import Header from "./Header"; // Import Header component

const Trending = () => {
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [userPreferences, setUserPreferences] = useState({});
  const [genreFilter, setGenreFilter] = useState("All");
  const [sortOption, setSortOption] = useState("Popularity");

  useEffect(() => {
    // trending books from Google Books API
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=trending&maxResults=20&key=AIzaSyAh8QpER_j5jkOMO0zH_YXKlBPItJVx0nE`
        );
        const data = await response.json();
        const books = data.items.map((item) => ({
          id: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors
            ? item.volumeInfo.authors.join(", ")
            : "Unknown",
          description:
            item.volumeInfo.description || "No description available.",
          genre: item.volumeInfo.categories
            ? item.volumeInfo.categories[0]
            : "Unknown",
          coverImage: item.volumeInfo.imageLinks
            ? item.volumeInfo.imageLinks.thumbnail
            : "https://via.placeholder.com/128x192?text=No+Cover",
          popularity: item.volumeInfo.ratingsCount || 0,
          releaseDate: item.volumeInfo.publishedDate || "Unknown",
        }));
        setTrendingBooks(books);
        setFilteredBooks(books);
        const preferences = await getUserPreferences();
        setUserPreferences(preferences);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter and sort books based on user input
    let books = [...trendingBooks];

    if (genreFilter !== "All") {
      books = books.filter((book) => book.genre === genreFilter);
    }

    if (sortOption === "Popularity") {
      books.sort((a, b) => b.popularity - a.popularity);
    } else if (sortOption === "Newest") {
      books.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    }

    setFilteredBooks(books);
  }, [genreFilter, sortOption, trendingBooks]);

  // Generate personalized recommendations using AI
  const personalizedRecommendations = recommendBooks(
    trendingBooks,
    userPreferences
  );

  return (
    <div className="trending-page">
      <Header /> {/* Include the Header component */}
      <h1>Trending Books</h1>
      <div className="filters">
        <select onChange={(e) => setGenreFilter(e.target.value)}>
          <option value="All">All Genres</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Romance">Romance</option>
        </select>

        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="Popularity">Sort by Popularity</option>
          <option value="Newest">Sort by Newest</option>
        </select>
      </div>
      <div className="books-container">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img
              src={book.coverImage}
              alt={book.title}
              className="book-cover"
            />
            <div className="book-info">
              <h2>{book.title}</h2>
              <p>by {book.author}</p>
              <p>{book.description}</p>
              <p>Genre: {book.genre}</p>
              <a href={`/book/${book.id}`} className="details-link">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="recommendations-section">
        <h2>Personalized Recommendations</h2>
        <div className="recommendations-container">
          {personalizedRecommendations.map((book) => (
            <div key={book.id} className="book-card">
              <img
                src={book.coverImage}
                alt={book.title}
                className="book-cover"
              />
              <div className="book-info">
                <h2>{book.title}</h2>
                <p>by {book.author}</p>
                <p>{book.description}</p>
                <p>Genre: {book.genre}</p>
                <a href={`/book/${book.id}`} className="details-link">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
