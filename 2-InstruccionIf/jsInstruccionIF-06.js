/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/

function mostrar()
{
	let edadIngresada;

	edadIngresada=document.getElementById('txtIdEdad').value;
	
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("Es mayor");
	}
	else
	{
		if(edadIngresada<13)
		{
			alert("Es un niño");
		}
		else
		{
			alert("Es adolecente");
		}
	}

}//FIN DE LA FUNCIÓN