/*Al ingresar una edad debemos informar si la persona es adolescente, 
edad entre 13 y 17 años (inclusive) .*/
function mostrar()
{
	let edadIngresada;

	edadIngresada=document.getElementById('txtIdEdad').value;
	
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada<18)
	{
		if(edadIngresada>12)
		{
			alert("Es adolecente ");
		}

	}


}//FIN DE LA FUNCIÓN