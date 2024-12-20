const electron = window.electron;

export const fetchAllUsers = async () => {
  try {
    const users = await electron.invoke("get-all-users"); // Make an async call to the main process
    return users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
};
//create user
export const createUser = async (formData) => {
  try {
    return await electron.invoke("create-user", formData);
  } catch (error) {
    console.error("Error saving user", error);
  }
};
//Get a single user with
export const getUser = async (id) => {
  try {
    const getUser = await electron.invoke("get-user", id);
    return getUser;
  } catch (error) {
    console.error("Failed to fetch user", error);
  }
};
export const deleteUser = async (id) => {
  await electron
    .invoke("delete-user", id)
    .then((user) => {
      return user;
    })
    .catch((error) => {
      console.error("Error while deleting user", error);
    });
};
