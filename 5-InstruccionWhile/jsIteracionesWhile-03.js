/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("ingrese clave.");

	while(clave!="utn750")
	{
     clave = prompt("Error ingrese clave nuevamente");
	}
	alert("Clave correcta");
	
}//FIN DE LA FUNCIÓN
