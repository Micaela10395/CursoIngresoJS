/*Al ingresar una edad debemos informar si la persona es mayor de edad,
sino informar que es un menor de edad.*/
function mostrar()
{
	let edadIngresada;

	edadIngresada=document.getElementById('txtIdEdad').value;
	
	edadIngresada=parseInt(edadIngresada);


	if(edadIngresada>17)
	{
		alert("Es mayor de edad");
	}


	if(edadIngresada <18)
	{
		alert("Es menor de edad");
	}


}//FIN DE LA FUNCIÓN