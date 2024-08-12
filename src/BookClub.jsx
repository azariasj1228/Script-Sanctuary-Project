import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./BookClub.css";
import Header from "./Header";

const BookClub = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  const handleAddEvent = () => {
    if (eventTitle && eventDate) {
      const newEvent = { title: eventTitle, date: eventDate };
      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      localStorage.setItem("events", JSON.stringify(updatedEvents));
      setEventTitle("");
      setEventDate("");
    }
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const renderEvents = () => {
    return events
      .filter(
        (event) => new Date(event.date).toDateString() === date.toDateString()
      )
      .map((event, index) => (
        <div key={index} className="event-item">
          {event.title}
        </div>
      ));
  };

  return (
    <div className="book-club-page">
      <Header />
      <main>
        <h1>Book Club</h1>
        <div className="book-section">
          <div className="book-card">
            <img
              src="https://images-us.bookshop.org/ingram/9780593112557.jpg?height=500&v=v2"
              alt="Some Girls Do"
              className="book-cover"
            />
            <div className="book-info">
              <h2>Some Girls Do</h2>
              <p>Genre: LGBTQ+ Romance</p>
              <p>Author: Jennifer Dugan</p>
              <p>
                Description: A heartwarming romance about self-discovery and
                love.
              </p>
              <button
                className="live-chat-button"
                onClick={() => (window.location.href = "/somegirlsdochat")}
              >
                Live Chat
              </button>
              <Link to="/somegirlsdodetails" className="details-link">
                View Details
              </Link>
            </div>
          </div>

          <div className="book-card">
            <img
              src="https://m.media-amazon.com/images/I/41WbdNH3oSL._SY445_SX342_QL70_FMwebp_.jpg"
              alt="The Perfect Marriage"
              className="book-cover"
            />
            <div className="book-info">
              <h2>The Perfect Marriage</h2>
              <p>Genre: Mystery</p>
              <p>Author: John Smith</p>
              <p>
                Description: A gripping mystery with twists and turns at every
                corner.
              </p>
              <button
                className="live-chat-button"
                onClick={() =>
                  (window.location.href = "/theperfectmarriagechat")
                }
              >
                Live Chat
              </button>
              <Link to="/theperfectmarriagedetails" className="details-link">
                View Details
              </Link>
            </div>
          </div>

          <div className="book-card">
            <img
              src="https://images-us.bookshop.org/ingram/9781501161933.jpg?height=500&v=v2"
              alt="The Seven Husbands of Evelyn Hugo"
              className="book-cover"
            />
            <div className="book-info">
              <h2>The Seven Husbands of Evelyn Hugo</h2>
              <p>Genre: YA Fiction</p>
              <p>Author: Taylor Jenkins Reid</p>
              <p>
                Description: An enthralling story of glamour, love, and loss.
              </p>
              <button
                className="live-chat-button"
                onClick={() => (window.location.href = "/thesevenhusbandschat")}
              >
                Live Chat
              </button>
              <Link to="/thesevenhusbandsdetails" className="details-link">
                View Details
              </Link>
            </div>
          </div>
        </div>
        <div className="calendar-section">
          <h2>My Events</h2>
          <div className="custom-calendar">
            <Calendar onChange={handleDateChange} value={date} />
            <div className="calendar-details">
              <h3>Events for {date.toDateString()}</h3>
              {renderEvents()}
            </div>
          </div>
          <div className="event-form">
            <h3>Add New Event</h3>
            <input
              type="text"
              placeholder="Event Title"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
            />
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
            <button onClick={handleAddEvent}>Add Event</button>
          </div>
        </div>
        <div className="book-club-features">
          <div className="feature-item">
            <Link to="/book-rec-quiz" className="feature-button">
              Book Rec Quiz
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookClub;
