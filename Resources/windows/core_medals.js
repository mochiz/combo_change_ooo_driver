// create table view data object
var data = [
	{title:'Tatoba', hasChild:true, combo:'tatoba'},
	{title:'Gatakiriba', hasChild:true, combo:'gatakiriba'},
	{title:'Latorartar', hasChild:true, combo:'latorartar'},
	{title:'Sagohzo', hasChild:true, combo:'sagohzo'},
	{title:'Shauta', hasChild:true, combo:'shauta'},
	{title:'Tajadol', hasChild:true, combo:'tajadol'},
	{title:'Putotyra', hasChild:true, combo:'putotyra'},
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
