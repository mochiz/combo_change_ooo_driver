var log, ooo;
log = function(e) {
  return Ti.API.info(e);
};
Ti.UI.setBackgroundColor('#000');
ooo = {};
ooo.tab_group = Ti.UI.createTabGroup();
ooo.win = Ti.UI.createWindow({
  navBarHidden: true,
  tabBarHidden: true,
  url: 'windows/core_medals.js'
});
ooo.tab = Ti.UI.createTab({
  title: 'Core Medals',
  window: ooo.win
});
ooo.tab_group.addTab(ooo.tab);
setTimeout(function() {
  return ooo.tab_group.open();
}, 2000);