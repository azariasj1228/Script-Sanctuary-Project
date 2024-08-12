import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Profile from "./ProfilePage";
import Trending from "./Trending";
import BookClub from "./BookClub";
import SomeGirlsDoChat from "./SomeGirlsDoChat";
import ThePerfectMarriageChat from "./ThePerfectMarriageChat";
import TheSevenHusbandsChat from "./TheSevenHusbandsChat";
import Quiz from "./Quiz";
import Recommendations from "./Recommendations";
import SomeGirlsDoDetails from "./SomeGirlsDoDetails";
import ThePerfectMarriageDetails from "./ThePerfectMarriageDetails";
import SevenHusbandsDetails from "./SevenHusbandsDetails"; // Import the new Details component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<LandingPage />} /> {/* Default route */}
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/bookclub" element={<BookClub />} />
        <Route path="/somegirlsdochat" element={<SomeGirlsDoChat />} />
        <Route
          path="/theperfectmarriagechat"
          element={<ThePerfectMarriageChat />}
        />
        <Route
          path="/thesevenhusbandschat"
          element={<TheSevenHusbandsChat />}
        />
        <Route path="/book-rec-quiz" element={<Quiz />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/somegirlsdodetails" element={<SomeGirlsDoDetails />} />
        <Route
          path="/theperfectmarriagedetails"
          element={<ThePerfectMarriageDetails />}
        />
        <Route
          path="/thesevenhusbandsdetails"
          element={<SevenHusbandsDetails />}
        />{" "}
        {/* Add new route */}
      </Routes>
    </Router>
  );
};

export default App;
