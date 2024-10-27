import { app, BrowserWindow } from 'electron'
import serve from 'electron-serve'
// 注册自定义协议为特权协议
serve({ directory: 'renderer' })


function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
  })
  // and load the index.html of the app.
  // mainWindow.loadURL('app://./index.html')
  mainWindow.loadFile('./renderer/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
