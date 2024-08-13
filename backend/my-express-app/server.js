const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const port = process.env.PORT || 5001; // Use environment variable or default to 5173

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // Serve static files

// Endpoint for signup
app.post("/signup", (req, res) => {
  // Handle signup logic here
  console.log("Received signup request:", req.body);

  const userData = {
    username: req.body.username,
    email: req.body.email,
    favoriteBook: req.body.favoriteBook,
    favoriteGenre: req.body.favoriteGenre,
  };

  res.status(200).json(userData);
});

// Socket.io connection
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("join-room", (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room: ${room}`);
  });

  socket.on("send-message", (messageData) => {
    console.log("Message received:", messageData);
    io.to(messageData.room).emit("receive-message", messageData);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start server
server.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});
