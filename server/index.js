// MERN STACK = MONGO + EXPRESS + REACT + NODE

// Development = Node.js server + React server
// Production = Node.js server + static react files

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(5000, () => {
  console.log("Serve at http://localhost:5000");
});
