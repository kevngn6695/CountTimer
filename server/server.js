/* Call all needed library */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const helmet = require("helmet");
const compression = require("compression");

/* Set port number to connect server with client */
const port = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: "*", // Change this to your actual client URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 200, // Use 200 OK for successful CORS preflight responses
};

/* Initialize express js */
const app = express();

// Enhancements for security and performance
app.use(helmet()); // Helmet helps secure Express apps with HTTP headers
app.use(compression()); // Compress all routes

/* Usage the library */
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Set a path between client and server */
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

/* Listen to initial port */
app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
