// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// create base UI tab and root window
var win = Titanium.UI.createWindow({
    navBarHidden: true,
    tabBarHidden: true,
    url:'windows/core_medals.js',
});

var tab = Titanium.UI.createTab({
    title:'Core Medals',
    window:win
});

//  add tabs
tabGroup.addTab(tab);

// delay splash screen
setTimeout(function() {
    tabGroup.open();
}, 2000);