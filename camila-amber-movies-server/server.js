import express from "express";
import cors from "cors";
import createError from "http-errors";
import movies from "./routes/movies.route.js";
import users from "./routes/users.route.js";
import comments from "./routes/comments.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const uri = process.env.MONGODB_URL;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/api/v1/movies", movies);
app.use("/api/v1/users", users);
app.use("/api/v1/comments", comments);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404, "Not Found"));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error..." });
});

app.listen(port, () =>
  console.log(`Server is now listening to port ${port}...`)
);

export default app;
