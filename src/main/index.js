const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
require("./ipc_handler");
function createWindow() {
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.resolve(__dirname, "preload.js"),
    },
    icon: path.resolve(__dirname, "assets", "img", "icon.png"),
    title: "Electron app",
  });

  win.setTitle("electron");
  win.loadURL("http://localhost:3000");
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
