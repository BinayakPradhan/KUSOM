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
// app.post("/processMLData", (req, res) => {
//   console.log(req.body);
//   const categories = req.body;

//   categories.map(async (category) => {
//     const { expertise, post_id } = category;
//     console.log("hello");

//     // Validate input
//     if (!expertise || !post_id) {
//       return res
//         .status(400)
//         .json({ error: "expertise and post_id are required" });
//     }
//     console.log(expertise, post_id);

//     // Example SQL query to insert into interested table based on ML input
//     const sql = `
//       INSERT INTO interested (interested_id, handy_id, post_id, post, interested_status)
//       SELECT UUID(), h.handy_id, p.post_id, p.post, 0 AS interested_status
//       FROM handyman h
//       INNER JOIN post p ON h.h_expertise = ? AND p.post_id = ? ;
//     `;
//     const values = [expertise, post_id];

//     // Use pool directly to get a connection and execute the query
//     pool.getConnection((err, connection) => {
//       if (err) {
//         console.error("Error getting database connection:", err);
//         return res.status(500).json({ error: "Error connecting to database." });
//       }

//       connection.query(sql, values, (err, result) => {
//         connection.release(); // Release the connection back to the pool

//         if (err) {
//           console.error("Error processing ML data:", err);
//           return res.status(500).json({ error: "Error processing ML data" });
//         }

//         console.log("Inserted rows into interestedTable:", result.affectedRows);
//         res.status(200).json({ message: "Data processed successfully" });
//       });
//     });
//   });
// });
app.post("/processMLData", async (req, res) => {
  console.log(req.body);
  const categories = req.body;

  // Validate the input array
  if (!Array.isArray(categories) || categories.length === 0) {
    return res
      .status(400)
      .json({ error: "Invalid input, expected an array of categories" });
  }

  const insertPromises = categories.map((category) => {
    const { expertise, post_id } = category;
    console.log("hello");

    // Validate input
    if (!expertise || !post_id) {
      return Promise.reject({
        status: 400,
        error: "expertise and post_id are required",
      });
    }
    console.log(expertise, post_id);

    // Example SQL query to insert into interested table based on ML input
    const sql = `
      INSERT INTO interested (interested_id, handy_id, post_id, post, interested_status)
      SELECT UUID(), h.handy_id, p.post_id, p.post, 0 AS interested_status
      FROM handyman h
      INNER JOIN post p ON h.h_expertise = ? AND p.post_id = ?;
    `;
    const values = [expertise, post_id];

    // Return a promise that resolves when the query completes
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          console.error("Error getting database connection:", err);
          return reject({
            status: 500,
            error: "Error connecting to database.",
          });
        }

        connection.query(sql, values, (err, result) => {
          connection.release(); // Release the connection back to the pool

          if (err) {
            console.error("Error processing ML data:", err);
            return reject({ status: 500, error: "Error processing ML data" });
          }

          console.log(
            "Inserted rows into interestedTable:",
            result.affectedRows
          );
          resolve(result.affectedRows);
        });
      });
    });
  });

  try {
    const results = await Promise.all(insertPromises);
    res.status(200).json({ message: "Data processed successfully", results });
  } catch (error) {
    if (error.status) {
      res.status(error.status).json({ error: error.error });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});

// Assuming you have imported necessary modules and set up your app and database connection
app.use("/shop", (req, res, next) => {
  req.pool = pool;
  next();
});
// Example of setting up a GET endpoint to fetch products with seller information
app.get("/shop", (req, res) => {
  const pool = req.pool; // Assuming you have a database connection pool

  // Query to fetch products with seller information
  const getProductsQuery = `
    SELECT p.product_id, p.p_name, p.p_info, p.p_img, p.p_price, p.p_quantity,p.p_quality, CASE  WHEN u.user_id IS NOT NULL THEN 'user' WHEN h.handy_id IS NOT NULL THEN 'handyman' ELSE 'unknown' END AS seller_type,COALESCE(u.name, h.handy_name) AS seller_name,COALESCE(u.email, h.h_email) AS seller_email,COALESCE(u.phone_number, h.phone_number) AS seller_phone FROM product p LEFT JOIN users u ON p.seller_id = u.user_id LEFT JOIN handyman h ON p.seller_id = h.handy_id;`;

  // Execute the query
  pool.query(getProductsQuery, (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).json({ error: "Error fetching products" });
    }

    // If successful, return the products with seller information
    res.status(200).json({ products: results });
  });
});

//Listen on environment on port
app.listen(port, () => console.log(`Listen on port ${port}`));
module.exports = pool;
