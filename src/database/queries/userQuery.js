const db = require("../db_connection");
//GET_ALL USERS
const getAllUsers = async () => {
  try {
    const user = await db("users").select("*");
    return user;
  } catch (error) {
    console.error("Error getting all users", error);
    throw error;
  }
};
//CREATE ALL USERS
const createUser = async (formData) => {
  try {
    const { name, cnic, phone_no, plate_no, address, payment } = formData;
    const user = await db("users").insert({
      name,
      cnic,
      phone_no,
      plate_no,
      address,
      payment,
    });
    return user;
  } catch (error) {
    console.error("Error while saving user", error);
    throw error; //this propagate the error to the caller function
  }
};
//GET A SINGLE USER
const getUser = async (userInput) => {
  //when a throw error is used in a callback function the control is transfered to the catch block
  try {
    if (!isNaN(Number(userInput))) {
      let user = await db("users").where("cnic", userInput);
      return user;
    } else {
      user = await db("users").whereLike("name", `%${userInput}%`);
      return user;
    }
  } catch (error) {
    console.error("Error fetching user", error);
    throw error;
  }
};
//DELETE A USER
const deleteUser = async (userId) => {
  try {
    const user = await db("users").where("id", userId).del();
    return user;
  } catch (err) {
    console.error("Error deleting user:", err);
    throw err;
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
};
