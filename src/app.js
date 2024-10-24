const express = require("express");

const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params);

    res.send({ name: "Krishna", lastname: "sharma" });
});
app.use("/test", (req, res) => {
    res.send("hi.............server.......");
});
app.listen(3000, () => {
    console.log("sever is running on the port 3000");
});