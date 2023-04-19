//Module inports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();
app.use(cookieParser());

//connnecting to mongoose
const mongooseConnect = () => {
  mongoose
    .connect(process.env.MONGOURI)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

//middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "GET ,POST ,PUT,DELETE");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization,Cookie"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });
//using express router
app.options("*", cors());
app.use("/", require("./routes"));

//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8000, (err) => {
  err
    ? console.error(" Error connecting to Server")
    : console.log("Connected to Server");
  mongooseConnect();
});
