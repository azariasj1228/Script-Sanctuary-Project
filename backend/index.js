const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create HTTP server and Socket.IO server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://script-sanctuary-project.onrender.com", // Ensure this matches your React app's port
    methods: ["GET", "POST"],
  },
});

// In-memory store for users (for demonstration purposes)
const users = [];

// Signup endpoint (without password hashing)
app.post("/signup", (req, res) => {
  const { username, password, email, favoriteBook, favoriteGenre } = req.body;

  // Check if email or username already exists
  const existingUser = users.find(
    (user) => user.email === email || user.username === username
  );

  if (existingUser) {
    if (existingUser.email === email) {
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

  // Save new user without password hashing
  const userData = {
    username,
    email,
    password, // Save the plain text password (for demonstration purposes, not recommended for production)
    favoriteBook,
    favoriteGenre,
  };
  users.push(userData);

  // Send a successful response with the new user data
  res.status(200).json({
    message: "User created successfully",
    user: userData,
  });
});

// Login endpoint (without password comparison)
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(400).json({ message: "Invalid email or password." });
  }

  // Simple password check (no hashing)
  if (user.password !== password) {
    return res.status(400).json({ message: "Invalid email or password." });
  }

  // Send the user data back as the login was successful
  res.status(200).json({
    message: "Login successful",
    user,
  });
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
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
