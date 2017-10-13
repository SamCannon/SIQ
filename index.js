const electron = require('electron');
const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;
let newCustomerWindow;

app.on('ready', () => {

	mainWindow = new BrowserWindow({
		title: 'Solar Industries Quote'
	});
	
	mainWindow.loadURL(`file://${__dirname}/public/index.html`);

	mainWindow.on('closed', () => app.quit());

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
		],
	}, 
	{
		label: 'New Customer',
		submenu: [
			{
				label: 'New Customer',
				accelerator: 'Ctrl+N',
				click() {newCustomer();}
			}
		]
	}

];

let newCustomer = () => {

	newCustomerWindow = new BrowserWindow({
		width: 600,
		height: 300,
		title: 'Add New Customer'
	});

	newCustomerWindow.loadURL(`file://${__dirname}/public/newCustomer.html`);

	newCustomerWindow.on('closed', () => newCustomerWindow = null);

};

if(process.env.NODE_ENV !== 'production') {

	menuTemplate.push({
		label: 'Developer',
		submenu: [
			{
				label: 'Developer Tools',
				click(item, focusedWindow) {

					focusedWindow.toggleDevTools();

				}
			}

		]

	})

}