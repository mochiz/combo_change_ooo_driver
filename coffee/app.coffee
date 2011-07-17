# this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000')

# create tab group
tabGroup = Titanium.UI.createTabGroup()

# create base UI tab and root window
win = Titanium.UI.createWindow
    navBarHidden: true
    tabBarHidden: true
    url:'windows/core_medals.js'

tab = Titanium.UI.createTab
    title:'Core Medals'
    window:win

#  add tabs
tabGroup.addTab(tab)

# delay splash screen
setTimeout ->
    tabGroup.open()
, 2000
