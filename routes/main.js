// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

// Route for the home page
router.get("/", (req, res) => res.send("Hello World!")); 

// Route to display about information
router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

// Route to display contact information
router.get("/contact", (req, res) => res.send("<h1>Email: choiizoe127@gmail.com</h1>"));

// Route to display the current date
router.get("/date", (req, res) => {
    const today = new Date();
    res.send("<h1>Today is: " + today + "</h1>");
});

// Dynamic route with parameter (for welcome message)
router.get("/welcome/:name", (req, res) => {
    const userName = req.params.name;
    res.send("<h1>Welcome " + userName + "!</h1>");
});


// Export the router object so index.js can access it
module.exports = router;
