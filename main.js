const {app, BrowserWindow, Menu} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        maxHeight: 625,
        maxWidth: 400,
        minHeight: 625,
        minWidth: 400,
        width: 400,
        height: 625
    })
    /*Menu.setApplicationMenu(null);*/
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})