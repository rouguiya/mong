const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect("mongodb://localhost/mongodb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => {
  console.error("Connection error:", error);
});
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = mongoose;
