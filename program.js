var pisica = false
function modifica()
{
document.getElementById("id_salut").innerHTML="Hello";
if (pisica==false){
document.getElementById("id_img").src="cat.jpg";
pisica = true;
}
else{
document.getelementById("id_img").src="cat.jpj";
pisica=false;
}
}
