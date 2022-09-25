const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
require('dotenv').config();

let mainWindow;

function createWindow() {
    console.log(`${process.env.NODE_ENV}  ${process.env.BROWSER}`)
    console.log("따다부따.................")
    console.log(`isDev is ${isDev}`)
    mainWindow = new BrowserWindow({
        width: 500,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
            devTools: isDev,
        },
    });

    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );

    if (isDev) {
        mainWindow.webContents.openDevTools({mode:'detach'});
    };

    mainWindow.setResizable(true);
    mainWindow.on('closed', () => (mainWindow = null));
    mainWindow.focus();
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
    };
});