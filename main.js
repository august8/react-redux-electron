const electron = require('electron');
const windowStateKeeper = require('electron-window-state');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

let mainWindow;

function createWindow() {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600,
  });
  mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
  });
  mainWindowState.manage(mainWindow);

  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
  // if (process.env.NODE_ENV !== 'production') {
  mainWindow.webContents.openDevTools();
  // }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
