const electron = require('electron');
const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;
let newCustomerWindow;

app.on('ready', () => {

	mainWindow = new BrowserWindow({
		title: 'Solar Industries Quote'
	});
	
	mainWindow.loadURL(`file://${__dirname}/index.html`);

	const mainMenu = Menu.buildFromTemplate(menuTemplate);

	Menu.setApplicationMenu(mainMenu);

});

const menuTemplate = [
	{
		label: 'File',
		submenu: [
			{
				label: 'Exit',
				accelerator: (() => {
					if(process.platform === 'darwin') {
						return 'Command+Q';
					} else {
						return 'Ctrl+Q';
					}
				}) (),
				click() {
					app.quit();
				}
			}
		]
	}

];

let newCustomer = () => {

	newCustomerWindow = new BrowserWindow({
		width: 400,
		height: 300,
		title: 'Add New Customer'
	});

	newCustomerWindow.loadURL(`file://${__dirname}/index.html`);

};