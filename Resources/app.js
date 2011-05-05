// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'ComboChange!',
	barColor:'black',
    url:'windows/core_medals.js',
});

var tab1 = Titanium.UI.createTab({  
    title:'Core Medals',
    window:win1
});

win1.orientationModes = [Titanium.UI.LANDSCAPE_RIGHT];

//
//  add tabs
//
win1.hideTabBar();
tabGroup.addTab(tab1);  
tabGroup.open();
