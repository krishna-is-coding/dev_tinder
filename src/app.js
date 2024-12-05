const express = require("express");
const connectDB = require("./config/database");
const app = express();

const User = require("./models/user");

app.use(express.json());

// for the dynamic databases
app.post("/signup", async(req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.send("User Added Successfully...");
    } catch (err) {
        res.status(400).send("Error saving the user: " + err.message);
    }
});

// Get user by email
app.post("/user", async(req, res) => {
    const userEmail = req.body.emailId;
    try {
        const user = await User.findOne({ emailId: userEmail });
        if (!userclear) {
            res.status(404).send("User not found");
        } else {
            res.send(user);
        }
    } catch (err) {
        res.status(400).send("Something went wrong");
    }
});
app.delete("/user", async(req, res) => {
    const userId = req.body.userId;

    const userId1 = req.body.userId;

    const userId2 = req.body.userId;

    const userId3 = req.body.userId;

    try {
        const user = await User.findOneAndDelete({ _id: userId }, // Condition to match the document
            {
                projection: { firstName: 1 }, // Returns only `name` and `email` fields of the deleted doc
                sort: { createdAt: -1 }, // If there were multiple matches, sort to delete the most recent
            }
        );
        if (user) {
            res.send("User deleted successfully");
        } else {
            res.status(404).send("User not found");
        }
    } catch (err) {
        res.status(400).send("Something went wrong");
    }
});

app.patch("/user", async(req, res) => {
    const userId = req.body.userId;
    const data = req.body;

    try {
        const user = await User.findOneAndUpdate({ _id: userId }, // Query condition
            data, // Data to update
            {
                runValidators: true, // Apply schema validators to the update
            }
        );
        console.log(user);

        res.send("Updated Successfully");
    } catch (err) {
        res.status(400).send("Something went wrong");
    }
});

app.delete("/user", async(req, res) => {
    const userId = req.body.userId;
    try {
        const user = await User.findByIdAndDelete(userId);
        res.send("User deleted Successfully");
    } catch (err) {
        res.status(400).send("Something went wrong");
    }
});

// Get all users (feed)
app.get("/feed", async(req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        res.status(400).send("Something went wrong");
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