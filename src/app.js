const express = require("express");
const connectDB = require("./config/database");
const app = express();

const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "gopi",
    lastName: "Sharma",
    emailId: "gopi.com",
    password: "gopi@123",
  });
  try {
    await user.save();
    res.send("User Added Succesfully......");
  } catch (err) {
    res.status(400).send("Error saving the user + err.message");
  }
});

// Connect to the database and start the server
connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected", err);
  });
