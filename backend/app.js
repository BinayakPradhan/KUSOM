const express = require("express");
const mysql = require("mysql");
const userRoutes = require("./routes/userRoutes");
const handyRoutes = require("./routes/handyRoutes");
const { v4: uuidv4 } = require("uuid");
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

//Get all posts
app.get("/getPostData", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Error connecting to database." });
    }

    connection.query("SELECT * FROM post", (err, rows) => {
      connection.release();

      if (err) {
        console.error("Error executing query:", err);
        return res
          .status(500)
          .json({ message: "Error querying database.", error: err });
      }

      res.status(200).json({
        status: "success",
        results: rows.length,
        data: { rows },
      });
    });
  });
});

//To create interested table
app.post("/processMLData", (req, res) => {
  const { expertise, post_id } = req.body;

  // Validate input
  if (!expertise || !post_id) {
    return res
      .status(400)
      .json({ error: "expertise and post_id are required" });
  }

  // Example SQL query to insert into interested table based on ML input
  const sql = `
    INSERT INTO interested (interested_id, handy_id, post_id, post, interested_status)
    SELECT UUID(), h.handy_id, p.post_id, p.post, 0 AS interested_status
    FROM handyman h
    INNER JOIN post p ON h.h_expertise = ? AND p.post_id = ? ;
  `;
  const values = [expertise, post_id];

  // Use pool directly to get a connection and execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ error: "Error connecting to database." });
    }

    connection.query(sql, values, (err, result) => {
      connection.release(); // Release the connection back to the pool

      if (err) {
        console.error("Error processing ML data:", err);
        return res.status(500).json({ error: "Error processing ML data" });
      }

      console.log("Inserted rows into interestedTable:", result.affectedRows);
      res.status(200).json({ message: "Data processed successfully" });
    });
  });
});

//Listen on environment on port
app.listen(port, () => console.log(`Listen on port ${port}`));
module.exports = pool;
