document.getElementById("id_logic_version").innerHTML = 
		"Logic version = 2018.11.20.15";
		
var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch);
canvas.addEventListener("touchmove", on_touch_move);
canvas.addEventListener("touchend", on_touch_end);

var rect = canvas.getBoundingClientRect();
//---------------------------------

//var lastX = 0;
//var lastY = 0;



var last_position_array = [];

//-----------------------------------------------------
function genereaza_culoare()
{
	var sir ="#";
	varlitere ="0123456789ABCDEF";
	for (var i=0; i<6;i++)
		sir += litere[Math.ceil(Math.random() * 16)];
	retur sir;
}
//-----------------------------------------------------------
function on_touch(e)
{
	e.preventDefault();
	
	for (var i = 0; i < e.changedTouches.length; i++){
		var context = canvas.getContext("2d");
		last_position.X = e.changedTouches.item(i).pageX;		
		last_position.Y = e.changedTouches.item(i).pageY;
		last_position.id = e.changedTouches.item(i).identifier;
		last_position.color = genereaza_culoare();
		last_position_array.push(last_position);
		context.beginPath();
		context.lineWidth = 1;
		context.strokeStyle = last_position.color;
		contex.fillStyle = last_position.color;
		context.arc(e.changedTouches.item(i).pageX - rect.left,
					e.changedTouches.item(i).pageY - rect.top,
					10,
					0, 2 * Math.PI
					);
		context.fill();
		context.stroke();
		var last_position = {x: 0, y:0, id: 0};
		
	}
}
//---------------------------------
function on_touch_move(e)
{
	e.preventDefault();
	
	for (var i = 0; i < e.changedTouches.length; i++){
		
        var j=0;
		for (; j < last_position_array.length; j++)
			if(last_position_array[j].id == e.changedTouches.item(i).identifier)
				break;
		context.beginPath();
		context.lineWidth = 1;
		context.stroceStyle = last_position_array[j].color;
		context.fillStyle = last_position_array[j].color;
		context.arc(e.changedTouches.item(i).pageX - rect.left,
					e.changedTouches.item(i).pageY - rect.top,
					10,
					0, 2 * Math.PI
					);
		
		context.stroke();
		context.beginPath();
		
		context.lineWidth = 20;		
	
     
		context.moveTo(last_position_array[j].X - rect.left, last_position_array[j].Y - rect.top);
		context.lineTo(e.changedTouches.item(i).pageX - rect.left, 
						e.changedTouches.item(i).pageY - rect.top);

		last_position_array[j].X = e.changedTouches.item(i).pageX;		
		last_position_array[j].Y = e.changedTouches.item(i).pageY;		
		context.stroke();			
	}	
}
//---------------------------------
function on_touch_end(e)
{
	for (var i = 0; i < e.changedTouches.length; i++){
		var j = 0;
		
	for (; j< last_position_array.length; j++)
	     if(last_position_array[j].id == e.changedTouches.item(i).identifier)
				break;
		
		last_position_array.splice(j, 1);
	}
}
//-----------------------------------

