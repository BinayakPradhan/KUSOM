const bcrypt = require("bcrypt");
module.exports = async (checkPassword, storedPassword) => {
  return await bcrypt.compare(checkPassword, storedPassword);
};