// create table view data object
var data = [
	{title:'タトバ！', hasChild:true, combo:'tatoba'},
	{title:'ガタキリバ！', hasChild:true, combo:'gatakiriba'},
	{title:'ラトラーター！', hasChild:true, combo:'latorartar'},
	{title:'サゴーゾ！', hasChild:true, combo:'sagohzo'},
	{title:'シャウタ！', hasChild:true, combo:'shauta'},
	{title:'タジャドル！', hasChild:true, combo:'tajadol'},
	{title:'プトティラ！', hasChild:true, combo:'putotyra'},
];

// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	var win = Titanium.UI.createWindow({
		url:'../windows/combo_change.js',
		title:e.rowData.title,
        combo:e.rowData.combo,
        barColor:'black',
	});
	Titanium.UI.currentTab.open(win,{animated:true});
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);
