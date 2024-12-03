const { ipcMain } = require("electron");
const {
  createUser,
  getAllUsers,
  getUser,
} = require("../database/queries/userQuery");

ipcMain.handle("get-all-users", async () => {
  //this is the channel name that identifies this handler in the front end when we call this in the front end it will execute this handler in the back... a handler is a call backfucntion that is used in event driven system which wait for a specific trigger to execute like in this case when the  get-all-users ia executed the  handler will ba called
  //they are often async
  return getAllUsers();
});
ipcMain.handle(
  "create-user",
  async (name, phoneNo, plate_no, address, payment) => {
    return createUser(name.email, plate_no, address, payment);
  }
);
ipcMain.handle("get-user", async (id) => {
  return getUser(id);
});
