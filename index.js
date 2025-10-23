// Set up express
const express = require("express");
const app = express();
const port = 8000; 

// Handle the routes

//Main Page - "Hello World!"
app.get("/", (req, res) => res.send("Hello World!")); 

//About Page - "This is about page"
app.get('/about', (req, res) => res.send ('<h1>This is about page</h1>'));

//Contact Page - Show email address
app.get('/contact', (req, res) => res.send('<h1>Email: choiizoe127@gmail.com</h1>'));

//Date Page - Show today's date
app.get('/date', (req, res) => {
    const today = new Date();
    res.send('<h1>Today is: ' + today + '</h1>');
})
// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); 
