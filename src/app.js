const express = require("express");

const app = express();

app.get("/admin/getUserDate", (req, res) => {
    try {
        throw new Error("sgehhg");
        res.send("User Data ");
    } catch (err) {
        res.status(500).send("Some error contact support team");
    }
});
app.use("/", (err, req, res, next) => {
    if (err) {
        res.status(500).send("Something went wrong");
    }
});
// app.get("/admin/getAllData", (req, res) => {
//     //logic of  checking if the request authorized
//     const token = "gsdgfjsejsghghdg";
//     const isAdminAuthorized = token === "xyz";
//     if (isAdminAuthorized) {
//         res.send("All the Data Sent");
//     } else {
//         res.status(401).send("authorized request");
//     }

//     res.send("Api Data Sent");
// });

// app.get("/admin/delete", (req, res) => {
//     //logic of  checking if the request authorized
//     const token = "gsdgfjsejsghghdg";
//     const isAdminAuthorized = token === "xyz";
//     if (isAdminAuthorized) {
//         res.send("Delete the auth");
//     } else {
//         res.status(401).send("authorized request");
//     }

//     res.send("Api Data Sent");
// });

// app.get("/user/:userId/:name/:password", (req, res) => {
//     console.log(req.params);
//     res.send({ name: "Krishna", lastname: "sharma" });
// });
// app.use("/", (req, res) => {
//     res.send("hlo....................don ...................");
// });

// app.get("/test", [
//     (req, res, next) => {
//         console.log("first route here...........");
//         next(); // Pass the request to the next route handler
//     },

//     (req, res, next) => {
//         console.log("second response");
//         next(); // Pass the request to the next route handler
//     },
//     (req, res, next) => {
//         console.log("Handling the route the user");
//         next();
//     },
// ]);

// app.use("/test", (req, res) => {
//     res.send("hi.............server.......");
// });

app.listen(3000, () => {
    console.log("server is running on the port 3000");
});