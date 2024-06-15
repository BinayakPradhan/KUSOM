require("dotenv").config();
const comparePassword = require("../utils/comparePassword");
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const maxAge = 3 * 24 * 60 * 60;
