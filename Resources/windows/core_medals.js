// create table view data object
var data = [
	{title:'Tatoba', hasChild:true, combo:'tatoba', color:{1:'red', 2:'yellow', 3:'green'}},
	{title:'Gatakiriba', hasChild:true, combo:'gatakiriba', color:{1:'green', 2:'green', 3:'green'}},
	{title:'Latorartar', hasChild:true, combo:'latorartar', color:{1:'yellow', 2:'yellow', 3:'yellow'}},
	{title:'Sagohzo', hasChild:true, combo:'sagohzo', color:{1:'silver', 2:'silver', 3:'silver'}},
	{title:'Shauta', hasChild:true, combo:'shauta', color:{1:'blue', 2:'blue', 3:'blue'}},
	{title:'Tajadol', hasChild:true, combo:'tajadol', color:{1:'red', 2:'red', 3:'red'}},
	{title:'Putotyra', hasChild:true, combo:'putotyra', color:{1:'purple', 2:'purple', 3:'purple'}},
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
        color:e.rowData.color,
        barColor:'black',
	});
	Titanium.UI.currentTab.open(win,{animated:true});
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);
