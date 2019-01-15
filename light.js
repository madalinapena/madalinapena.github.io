
document.getElementById("id_logic_version").innerHTML = "Logic version: 2019.01.15.0";


window.addEventListener("devicelight", on_light_change);
function on_light_change(e)
{
	document.getElementById("id_light").
= e.value + " [" + e.min + ", " + e.max + "]";

}


