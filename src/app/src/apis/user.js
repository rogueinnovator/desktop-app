const electron = window.electron;

export const fetchAllUsers =  () => {
  try {
    const users =  electron.invoke("get-all-users"); // Make an async call to the main process
    return users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
};

export const createUser = async (formData) => {
  try {
    const createUser = await electron.invoke("create-user", formData);
    return createUser;
  } catch (error) {}
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
