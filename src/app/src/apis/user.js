const electron = window.electron;

export const fetchAllUsers = async () => {
  try {
    const users = await electron.invoke("get-all-users"); // Make an async call to the main process
    return users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
};

export const createUser = async () => {
  try {
  } catch (error) {}
};
