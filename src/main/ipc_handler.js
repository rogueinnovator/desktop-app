const { ipcMain } = require("electron");
const {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
} = require("../database/queries/userQuery");

ipcMain.handle("get-all-users", async () => {
  //this is the channel name that identifies this handler in the front end when we call this in the front end it will execute this handler in the back... a handler is a call backfucntion that is used in event driven system which wait for a specific trigger to execute like in this case when the  get-all-users ia executed the  handler will ba called
  //they are often async
  return await getAllUsers();
});
ipcMain.handle("create-user", async (event, formData) => {
  return await createUser(formData);
});
ipcMain.handle("get-user", async (event, userInput) => {
  return (user = await getUser(userInput));
});
// when u get the error msg something like promise<pending> this is because u are calling an asyn mehod inside  a sync or ur not waiting for the promise to return
ipcMain.handle("delete-user", async (event, userId) => {
  try {
    const user = await deleteUser(userId);
    return user;
  } catch (error) {
    console.error("IPC:", error);
    throw error;
  }
});

///callback hell : multiple nested call_back
