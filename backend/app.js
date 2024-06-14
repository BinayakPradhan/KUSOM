const express = require("express");
const mysql = require("mysql");
const userRoutes = require("./routes/userRoutes");
const handyRoutes = require("./routes/handyRoutes");

// const fileUpload = require("express-fileupload");
const cors = require("cors");



const app = express();

const port = process.env.PORT || 9000;
require("dotenv").config();
app.use(express.json());

const corsOptions = {
  // origin: ["http://localhost:5173", "http://127.0.0.1:8005/"],
  origin: "*",
  methods: "GET,POST,PUT,PATCH,DELETE", // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
app.use(cors(corsOptions));

// app.use(
//   fileUpload({
//     createParentPath: true,
//     limits: {
//       fileSize: 2 * 1024 * 1024, //2MB upload limit
//     },
//   })
// );

//MYSQL
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "homefix",
});

app.use(
  "/users",
  (req, res, next) => {
    req.pool = pool;
    next();
  },
  userRoutes
);

app.use(
  "/handys",
  (req, res, next) => {
    req.pool = pool;
    next();
  },
  handyRoutes
);

// app.get("/", (req, res) => {
//   res.send("Henlo, World!");
// });

//Listen on environment on port
app.listen(port, () => console.log(`Listen on port ${port}`));
module.exports = pool;
