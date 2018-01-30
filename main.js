const { app, BrowserWindow } = require('electron')
const displayScreen = app.screen;

let win;

function createWindow() {
    // Create the browser window.
    const displayProps = displayScreen.getPrimaryDisplay();

    win = new BrowserWindow({
        width: displayProps.size.width, 
        height: displayScreen.size.height,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/dist/assets/logo.png`
    });

    win.loadURL(`file://${__dirname}/dist/index.html`)

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
    win.on('closed', () => {
        win = null;
    });
}

// Create window on electron intialization
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {

  // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
  // macOS specific close process
    if (win === null) {
        createWindow();
    }
});