const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://nodeSmart:46YEbmOSOsJlskey@node-smart.kv1dw.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
