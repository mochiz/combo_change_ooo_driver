log = (e) ->
    Ti.API.info(e)

# this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#000')

ooo = {}
ooo.tab_group = Ti.UI.createTabGroup()

# create base UI tab and root window
ooo.win = Ti.UI.createWindow
    navBarHidden: true
    tabBarHidden: true
    url:'windows/core_medals.js'

ooo.tab =  Ti.UI.createTab
    title:'Core Medals'
    window: ooo.win

ooo.tab_group.addTab ooo.tab

# delay splash screen
setTimeout ->
    ooo.tab_group.open()
, 2000
