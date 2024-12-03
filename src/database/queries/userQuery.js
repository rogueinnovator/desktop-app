const db = require("../db_connection");
const getAllUsers = async () => {
  return db("users").select("*");
};
const createUser = async (name, phoneNo, plate_no, address, payment) => {
  return db("users").insert({ name, phoneNo, plate_no, address, payment });
};
const getUser = async ({ id, cnic, name }) => {
  if (id) {
    return db("users").where({ id });
  } else if (cnic) {
    return db("users").where({ cnic });
  } else if (name) {
    return db("users").where({ name });
  } else {
    return [];
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
};
