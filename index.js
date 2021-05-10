require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
const errorHandler = require("./errorHandler");
const route = require("./route");

//Mongoose configuration
mongoose.set("debug", process.env.MONGOOSE);
mongoose.connect(process.env.DB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.Promise = Promise;

const PORT = process.env.PORT || 3000;

//all routes will be here
app.get("/", (req, res) => {
  res.redirect("/api/all");
});
app.use("/api", route);

app.use((req, res, next) => {
  let err = new Error("Not found");
  err.status = 404;
  err.message = "Route Not Found";
  next(err);
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
