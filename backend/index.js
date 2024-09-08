const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const mysql = require("mysql2/promise"); // Import mysql2 for Promises

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create MySQL connection pool
const pool = mysql.createPool({
  host: "localhost", // Replace with your MySQL server host
  user: "root", // Replace with your MySQL user
  password: "your_password", // Replace with your MySQL password
  database: "script_sanctuary", // Replace with your MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Create HTTP server and Socket.IO server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://script-sanctuary-project.onrender.com", // Ensure this matches your React app's port
    methods: ["GET", "POST"],
  },
});

// Signup endpoint
app.post("/signup", async (req, res) => {
  const { username, password, email, favoriteBook, favoriteGenre } = req.body;

  try {
    // Check if email or username already exists
    const [existingUsers] = await pool.execute(
      "SELECT * FROM users WHERE email = ? OR username = ?",
      [email, username]
    );

    if (existingUsers.length > 0) {
      if (existingUsers[0].email === email) {
        return res
          .status(400)
          .json({ message: "Email already used, proceed to log in" });
      } else {
        return res.status(400).json({ message: "Username already used" });
      }
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and include a number, special character, and uppercase letter.",
      });
    }
    if (username.length < 4) {
      return res
        .status(400)
        .json({ message: "Username must be at least 4 characters long" });
    }

    // Insert new user into MySQL database
    const [result] = await pool.execute(
      "INSERT INTO users (username, email, password, favorite_book, favorite_genre) VALUES (?, ?, ?, ?, ?)",
      [username, email, password, favoriteBook, favoriteGenre]
    );

    // Send a successful response with the new user data
    res.status(200).json({
      message: "User created successfully",
      user: { username, email, favoriteBook, favoriteGenre },
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "An error occurred during signup" });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [users] = await pool.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (users.length === 0) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const user = users[0];

    // Simple password check (no hashing)
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Send the user data back as the login was successful
    res.status(200).json({
      message: "Login successful",
      user: {
        username: user.username,
        email: user.email,
        favoriteBook: user.favorite_book,
        favoriteGenre: user.favorite_genre,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "An error occurred during login" });
  }
});

// 404 handler for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Socket.IO setup
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Handle incoming chat messages
  socket.on("send-message", (messageData) => {
    console.log("Message received:", messageData);
    io.emit("receive-message", messageData); // Broadcast message to all connected clients
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
