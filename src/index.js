const { app, BrowserWindow } = require("electron/main");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 500,
    icon: path.join(__dirname, "icon.png"),
    resizable: false,
  });
  win.setMenuBarVisibility(false);
  win.setTitle("eggBoil!");
  win.loadFile("src/index.html");
};

console.log(path.join(__dirname, "icon.png"));
app.whenReady().then(() => createWindow());
app.on("window-all-closed", () => app.quit());
