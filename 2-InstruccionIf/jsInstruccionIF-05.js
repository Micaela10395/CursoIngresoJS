/*Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/
function mostrar()
{
	let edadIngresada;

	edadIngresada=document.getElementById('txtIdEdad').value;
	
	edadIngresada=parseInt(edadIngresada);

	if(!(edadIngresada>12 && edadIngresada<18))
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");
	}	

}//FIN DE LA FUNCIÓN