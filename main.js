 // npm install --save-dev electron-prebuilt --registry=https://registry.npm.taobao.org

'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
});
