<<<<<<< HEAD
# Capstone Project One

We have broken down the Capstone Project into easy-to-follow steps. Each step of the capstone contains a link with instructions for that step. Here’s a quick overview of what you’ll do for each step of your capstone project:

1. Step One: Initial Project Ideas: You’ll pick up to 3 project ideas to propose to your mentor and the Springboard community. You’ll also explore some potential APIs.
2. Step Two: Project Proposal: For this step, you’ll write a proposal for the site you want to build. This will help your mentor better understand your chosen capstone project idea.
3. Step Three: Schema Design and API Selection: After your mentor approves of your capstone project proposal, you’ll figure out the database design of your application and which API you’ll be using.
4. Step Four: Coding User Flows: Once you’ve figured out what you’re building, you’ll write the code to implement it. It’s important to think about what you want a user’s experience to be like as they navigate your site.
5. Step Five: Polishing Your Application: Once you have the core functionality implemented, you’ll focus on additional UI enhancements and styling for your application.
6. Step Six: Documenting and Submission: You’ve done a lot of work so now it’s time to show your mentor your progress! Create a README in markdown, make sure your GitHub is organized, and submit your finalized project.

## Overview

For your first Capstone Project, you’ll build a database-driven website off an external
API of your choice. Your finished capstone will be an integral part of your portfolio; it will demonstrate to potential employers everything you’ve learned from this course.

We want you to work on a challenging project that will incorporate all of the back-end
skills you’ve been developing and some of your front-end skills from the last section.
The goal of this project isn’t to create something that’s never been done before. You
could potentially create a website similar to one that already exists, or use a popular
API. That being said, we do encourage you to be creative when building your site. You’re free to choose any API you’d like to use and we encourage you to tap into your
imagination throughout the project.

There is a term in software development called CRUD - Create, Read, Update, Delete. This refers to all of the basic operations that a relational database performs. Your website should have more functionality than simple CRUD.

## Examples

There are thousands of free, publically available APIs. If you love cars, you can pick
from dozens of automotive APIs to build something that will reflect your passion. If you’re more into history, look into an API that lists the nobility of Europe. If you love sports, build a site about India’s top cricketers or your local football league.

Let’s give you an example of what a site could look like. Say you choose an API like The
Movie Database, your site could have a landing page saying “Welcome To MyMovieDB” and a separate page that displays a sortable list of all the movies in the API. This would be CRUD.

You could implement various filtering methods - to filter based on an actor, a director,
the year the movie was released, etc. When you click on the record associated with the movie, you could redirect a user to a separate page that displays all of the data
associated with that movie.

Now let’s talk about bells and whistles. If you were to implement ONE feature like
creating sharable lists of your favorite movies, finding and playing a trailer for the movie on-page, or a simple “recommendation system” that would recommend new movies based on similarities to movies you liked, this would go beyond CRUD. A simple
“recommendation system” would be along the lines of, if you like Big Daddy with Adam
Sandler, recommending other Adam Sandler comedies from the 90s or recommending
movies his co-stars like Steve Buscemi starred in. This does not mean creating a
complicated system from scratch like Netflix.

It is better to pick a project that errs on the side of simple and boring than a complex
project with a million moving parts you can get stuck in.

[Here is an example of a previous project.](https://github.com/juliahazer/chart-my-team)

## Guidelines

1. You will use the following technologies in this project: Python/Flask, PostgreSQL, SQLAlchemy, Heroku, Jinja, RESTful APIs, JavaScript, HTML, CSS. Depending on your idea, you might end up using WTForms and other technologies discussed in the course.
2. Every step of the project has submissions. This will alert your mentor to evaluate your work. Pay attention to the instructions so you submit the right thing. You will submit the link to your GitHub repo several times, this is for your mentor’s convenience. Your URL on GitHub is static and will not change.
3. The first two steps require mentor approval to proceed, but after that, you are free to continue working on the project after you submit your work. For instance, you don’t need your mentor to approve your database schema before you start working on your site. Likewise, you don’t need your mentor to approve the first iteration of your site before you start polishing it.
4. If you get stuck, there is a wealth of resources at your disposal. The course contains all of the material you will need to complete this project, but a well-phrased Google search might yield you an immediate solution to your problem. Don’t forget that your Slack community, TAs, and your mentor there to help you out.
5. Make sure you use a free API and deploy your project on Heroku , so everyone can see your work!
=======
ScriptSanctuary
ScriptSanctuary is a comprehensive book database and community website designed to offer users a seamless experience for managing their reading lists, discovering new books, participating in book clubs, and engaging with the community in real time. https://script-sanctuary-project.onrender.com/home

Problem Statement
In the age of digital transformation, book lovers often find themselves scattered across multiple platforms for different needs—managing reading lists, finding new books, participating in discussions, and more. This fragmented experience makes it difficult to stay organized and engaged with the reading community.

Goal
The goal of ScriptSanctuary is to provide a centralized platform where users can manage their book-related activities in one place. It aims to integrate various functionalities such as book tracking, community interaction, personalized recommendations, and more, to enhance the overall reading experience.

Features
Personalized Reading Lists: Users can create and manage lists like "To Be Read," "Books Read," and "Favorites."
Book Recommendations: AI-driven recommendations tailored to user preferences.
Book Club Participation: Join or create book clubs with live chat functionality, event calendars, and polls.
Real-time Messaging: Engage with other users in real-time via live chat.
Enhanced Search: Search for books across all pages, not just on the landing page.
Responsive Design: The website is designed to be visually appealing and fully responsive across devices.
Customizable Profile Pages: Each user has a profile page where they can showcase their reading lists and preferences.
Book Events and Challenges: Participate in book-to-movie events, reading challenges, and more.
APIs Used
Google Books API: For fetching book details including titles, authors, and cover images.
Custom AI Models: Integrated AI for personalized book recommendations and chat functionalities.
Technologies & Tools
React.js: For building the user interface and managing the frontend.
Node.js: For the backend server and handling API requests.
Express.js: For building the server and managing routes (if used).
Vite: As the build tool for faster development and optimized production builds.
PostgreSQL: For storing and managing the database.
HTML/CSS: For structuring and styling the web pages.
JavaScript: For adding interactivity and dynamic behavior to the website.
Google Books API: For fetching book details like titles, authors, and cover images.
Custom AI Models: For personalized book recommendations and chat functionalities.
Libraries & Packages
react-router-dom: For managing client-side routing within the React application.
axios or fetch: For making HTTP requests to external APIs and backend services.
dotenv: For managing environment variables (if used).
ESLint: For maintaining code quality and consistency.
React Context API: For managing global state within the application.
Jest/React Testing Library: For unit testing (if used).
DevOps & Deployment
Git/GitHub: For version control and collaboration.
GitHub Actions: For continuous integration/continuous deployment (CI/CD) pipeline setup.
Render or Netlify: For deploying the frontend and backend applications.
Postman: For testing API endpoints during development.
Project Structure & Configuration
React Components: Modular and reusable UI components for various parts of the application.
Vite Configuration: To optimize the development and build process.
package.json: For managing project dependencies and scripts.
UI/UX Design
CSS Flexbox/Grid: For responsive layouts and design.
Custom Fonts and Color Scheme: To create a consistent and visually appealing user experience.
Hover Effects and Transitions: For enhancing user interaction.
>>>>>>> a0f07458055a2d1d952478f0120095895d19e13c
