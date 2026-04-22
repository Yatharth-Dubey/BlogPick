const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/BlogPick")
  .then(() => console.log("✅ MongoDB Connected For BlogPick"))
  .catch(err => console.error("MongoDB Error:", err));