import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header"; // Import the Header component
import "./Quiz.css";

// Sample questions pool
const questionsPool = [
  {
    question: "What type of books do you enjoy the most?",
    options: [
      "Fiction",
      "Non-Fiction",
      "Science Fiction",
      "Romance",
      "Mystery",
    ],
  },
  {
    question: "How do you prefer your books to be?",
    options: [
      "Fast-Paced",
      "Slow and Reflective",
      "Action-Packed",
      "Emotional",
      "Thought-Provoking",
    ],
  },
  // Additional questions here...
];

// Hardcoded book recommendations
const bookRecommendations = {
  Fiction: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A novel about racial injustice in the Deep South.",
    },
    {
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel about totalitarianism.",
    },
  ],
  // Additional recommendations here...
};

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [recommendation, setRecommendation] = useState(null);
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questionsPool.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      generateRecommendation(newAnswers);
    }
  };

  const generateRecommendation = (answers) => {
    // Determine recommendation based on answers
    const genreAnswer = answers.find((ans) =>
      questionsPool[0].options.includes(ans)
    );
    if (genreAnswer) {
      const recommendedBooks = bookRecommendations[genreAnswer] || [];
      // Store recommendations in localStorage or state
      localStorage.setItem("recommendations", JSON.stringify(recommendedBooks));
      // Navigate to recommendations page
      navigate("/recommendations");
    } else {
      setRecommendation([]);
    }
  };

  return (
    <div className="quiz-container">
      <Header /> {/* Include the Header component */}
      {currentQuestionIndex < questionsPool.length ? (
        <div>
          <h2>{questionsPool[currentQuestionIndex].question}</h2>
          <div>
            {questionsPool[currentQuestionIndex].options.map(
              (option, index) => (
                <button key={index} onClick={() => handleAnswer(option)}>
                  {option}
                </button>
              )
            )}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Quiz;
