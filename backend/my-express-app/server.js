const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const port = process.env.PORT || 5001;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // Serve static files

// Socket.io connection
// io.on("connection", (socket) => {
//   console.log("A user connected:", socket.id);

//   socket.on("join-room", (room) => {
//     socket.join(room);
//     console.log(`User ${socket.id} joined room: ${room}`);
//   });

//   socket.on("send-message", (messageData) => {
//     console.log("Message received:", messageData);
//     io.to(messageData.room).emit("receive-message", messageData);
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   });
// });

// Start server
server.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});
