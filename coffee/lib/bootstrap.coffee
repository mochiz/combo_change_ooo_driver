log = (e) ->
    Ti.API.info(e)

# Ti.include(
#     '/lib/core_medals.js',
#     '/lib/driver.js',
#     '/ui/core_medals.js',
#     '/ui/driver.js',
#     )

# this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#000')

ooo = {}
ooo.tab_group = Ti.UI.createTabGroup()

ooo.win = Ti.UI.createWindow
    navBarHidden: true
    tabBarHidden: true
    url:'windows/core_medals.js'

ooo.tab =  Ti.UI.createTab
    title:'Core Medals'
    window: ooo.win

ooo.tab_group.addTab ooo.tab
setTimeout ->
    ooo.tab_group.open()
, 2000

# create tab group
# tabGroup = Ti.UI.createTabGroup()

# # create base UI tab and root window
# win = Ti.UI.createWindow
#     navBarHidden: true
#     tabBarHidden: true
#     url:'windows/core_medals.js'

# tab = Ti.UI.createTab
#     title:'Core Medals'
#     window:win

#  add tabs
# tabGroup.addTab(tab)

# # delay splash screen
# setTimeout ->
#     tabGroup.open()
# , 2000


