document.getElementById("id_logic_version").innerHTML= "logic vertion:2018.11.13.0";

function on_ok(stream)
{
	document.getElementById("id_video").srcObject=stream;
}
//--------------------------------------------------------
function on_error(e)
{
	//console.log("eroare camera");
	alert("eroare camera");
}
//--------------------------------------------
function start()
{
	var p = {audio:true, video:true};
	navigator.mediaDevices.getUserMedia(p). then().catch(on_error);
}	
//---------------------------------	