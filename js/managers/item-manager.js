var items;

function ItemManager()
{
	$.getJSON('../items.json', function(data) 
	{         
	    alert(data);
	});
}