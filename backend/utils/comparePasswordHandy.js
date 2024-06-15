const bcrypt = require("bcrypt");

module.exports = async (checkPassword, storedPassword) => {
  try {
    return await bcrypt.compare(checkPassword, storedPassword);
  } catch (error) {
    console.error("Error comparing passwords:", error);
    throw error; // Ensure errors are propagated or handled appropriately
  }
};
