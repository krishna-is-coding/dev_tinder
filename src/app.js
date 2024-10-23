const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("hi.............dndfhuhfh.......");
});
app.listen(3000, () => {
  console.log("sever is running on the port 3000");
});
