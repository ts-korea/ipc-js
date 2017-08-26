const {app, BrowserWindow, ipcMain} = require('electron');

app.on('ready', () => {
    console.log('app ready');

    const win = new BrowserWindow();
    win.loadURL(`file://${__dirname}/index.html`);

    ipcMain.on('hello', (event, data) => {
        console.log(data);
    });
});