// create table view data object
var data = [
	{title:'Tatoba', hasChild:true, combo:'tatoba', color:{0:'red', 1:'yellow', 2:'green'}},
	{title:'Gatakiriba', hasChild:true, combo:'gatakiriba', color:{0:'green', 1:'green', 2:'green'}},
	{title:'Latorartar', hasChild:true, combo:'latorartar', color:{0:'yellow', 1:'yellow', 2:'yellow'}},
	{title:'Sagohzo', hasChild:true, combo:'sagohzo', color:{0:'silver', 1:'silver', 2:'silver'}},
	{title:'Shauta', hasChild:true, combo:'shauta', color:{0:'blue', 1:'blue', 2:'blue'}},
	{title:'Tajadol', hasChild:true, combo:'tajadol', color:{0:'red', 1:'red', 2:'red'}},
	{title:'Putotyra', hasChild:true, combo:'putotyra', color:{0:'purple', 1:'purple', 2:'purple'}},
];

// create table view
var tableview = Titanium.UI.createTableView();

var idx = 1;
for (var i in data) {
    var row = Ti.UI.createTableViewRow({
        height: 65,
        className: 'image',
        hasChild:true,
        combo: data[i].combo,
        color: data[i].color,
    });
    var imgView = Ti.UI.createImageView({
        image: '../images/combo_medals_' + data[i].combo + '.png',
		row: idx++
    });
    row.add(imgView);
    tableview.appendRow(row);
}

// create table view event listener
tableview.addEventListener('click', function(e)
{
	var win = Titanium.UI.createWindow({
		url:'../windows/combo_change.js',
        combo:e.rowData.combo,
        color:e.rowData.color,
        barColor:'black',
	});
	Titanium.UI.currentTab.open(win,{animated:true});
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);
