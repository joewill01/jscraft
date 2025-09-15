const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 854,
    height: 508,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('http://localhost:3000')
}

app.whenReady().then(createWindow)