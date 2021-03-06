// const IP = "192.168.0.109";
const IP = "192.168.88.21";
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const adminHandler = require("./routeHandler/adminHandler");
const userHandler = require("./routeHandler/userHandler");
const mealHandler = require("./routeHandler/mealHandler");
const utilityHandler = require("./routeHandler/utilityHandler");
const activityLogHandler = require("./routeHandler/activityLogHandler");

// middlewares
app.use(express.json());
app.use(cors());

// db connection
mongoose
  .connect("mongodb://localhost:27017/home-management")
  .then(() => console.log("DB connection established..."))
  .catch((err) => console.error(err));

app.use("/user", userHandler);
app.use("/admin", adminHandler);
app.use("/meal", mealHandler);
app.use("/utility", utilityHandler);
app.use("/activityLog", activityLogHandler);

app.listen(8080, IP, () => console.log("listening on port: 8080"));
