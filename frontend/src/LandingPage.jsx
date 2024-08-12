import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header"; // Import the Header component
import "./LandingPage.css"; // Ensure you have this CSS file

// Dummy data for the carousel
const books = [
  {
    title: "The Coldest Winter Ever",
    author: "Sister Soulja",
    imgSrc:
      "https://images-us.bookshop.org/ingram/9780743270106.jpg?height=500&v=v2-241e65266a79a5a303a03240f485927d",
    link: "https://bookshop.org/p/books/the-coldest-winter-ever-sister-souljah/10889431?ean=9780743270106",
  },
  {
    title: "Bark! I'm Moving",
    author: "Chenille Johnson",
    imgSrc:
      "https://m.media-amazon.com/images/I/71S8kwB7EsL._AC_UL640_FMwebp_QL65_.jpg",
    link: "https://www.amazon.com/Bark-Im-Moving-Chenille-Johnson/dp/B0CCCQR3M6/ref=sr_1_1?crid=269NRIGJ7U0KS&dib=eyJ2IjoiMSJ9.LMgW7beI7ZOUUQmP3jeGUqdA-iFV_2FOUdaPF5IeSlzIDR0oA-xn54uGtc_QDLV2BIsrvhS6iJusgRSHqwEBwI3LrlgIqEsirR_uXbnJTZw.yedm6bHZgPJ_pMo33HTUx41WZPP1r2sAnHv85RIcG4c&dib_tag=se&keywords=Bark%21+I%27m+Moving&qid=1722968624&sprefix=bark+i%27m+moving%2Caps%2C141&sr=8-1",
  },
  {
    title: "The Chronicles of Narnia",
    author: "C.S Lewis",
    imgSrc:
      "https://images-us.bookshop.org/ingram/9780066238500.jpg?height=500&v=v2",
    link: "https://bookshop.org/p/books/the-chronicles-of-narnia-7-books-in-1-paperback-c-s-lewis/8067465?ean=9780066238500",
  },
  {
    title: "Love Hypothesis",
    author: "Ali Hazelwood",
    imgSrc:
      "https://images-us.bookshop.org/ingram/9780593336823.jpg?height=500&v=v2-9d315cbea2b78d55167c8cd1934fe322",
    link: "https://bookshop.org/p/books/the-love-hypothesis-ali-hazelwood/16103947?ean=9780593336823",
  },
  {
    title: "She's Too Pretty To Burn",
    author: "Wendy Heard",
    imgSrc:
      "https://images-us.bookshop.org/ingram/9781250821263.jpg?height=500&v=v2",
    link: "https://bookshop.org/p/books/she-s-too-pretty-to-burn-wendy-heard/14450461?ean=9781250821263",
  },
  {
    title: "A Mango Shaped Space",
    author: "Wendy Mass",
    imgSrc:
      "https://images-us.bookshop.org/ingram/9780316058254.jpg?height=500&v=v2",
    link: "https://bookshop.org/p/books/a-mango-shaped-space-wendy-mass/109116?ean=9780316058254",
  },
  {
    title: "All Your Perfects",
    author: "Colleen Hoover",
    imgSrc:
      "https://images-us.bookshop.org/ingram/9781501193323.jpg?height=500&v=v2-5941cfddc70ec92986c37146a7958233",
    link: "https://bookshop.org/p/books/all-your-perfects-colleen-hoover/6703030?ean=9781501193323",
  },
  {
    title: "Archer's Voice",
    author: "Mia Sheridan",
    imgSrc:
      "https://images-us.bookshop.org/ingram/9781538727355.jpg?height=500&v=v2",
    link: "https://bookshop.org/p/books/archer-s-voice-mia-sheridan/7394972?ean=9781538727355",
  },
];

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="landing-page">
      <Header onSearch={handleSearch} />
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to ScriptSanctuary</h1>
          <p>
            Your ultimate destination for book lovers. Discover, track, and
            share your reading journey.
          </p>
          <Link to="/signup" className="hero-btn">
            Get Started
          </Link>
        </div>
      </section>
      <section className="carousel-section">
        <h2>Featured Books</h2>
        <div className="carousel-container">
          <div className="carousel">
            {filteredBooks.map((book, index) => (
              <div key={index} className="carousel-item">
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <img src={book.imgSrc} alt={book.title} />
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features">
          <div className="feature">
            <h3>Reading Challenges</h3>
            <p>Set personal reading goals and track your progress.</p>
          </div>
          <div className="feature">
            <h3>Community Connection</h3>
            <p>Connect with readers in your area and join local events.</p>
          </div>
          <div className="feature">
            <h3>Enhanced Book Search</h3>
            <p>Find books, read reviews, and check availability.</p>
          </div>
          <div className="feature">
            <h3>Personalized Recommendations</h3>
            <p>Get AI-driven book suggestions based on your preferences.</p>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <h2>Join ScriptSanctuary Today</h2>
        <p>
          Start your literary adventure and connect with a community of book
          enthusiasts.
        </p>
        <Link to="/signup" className="cta-btn">
          Sign Up Now
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
