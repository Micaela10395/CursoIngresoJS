/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numero;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		numero=prompt("Ingrese un numero");

		if(banderaDelPrimero=="es el primero")
		{
			numeroMaximo=numero;
			numeroMinimo=numero;
			banderaDelPrimero="no es el primero";
		}
		else
		{
			if(numero>numeroMaximo)
			{
				numeroMaximo=numero;
			}
			else
			{
				if(numero<numeroMinimo)
				{
                 numero=numeroMinimo;
				}
			}
		}
	  respuesta=prompt("desea continuar?");
	}
	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;


	//txtIdMaximo.value=numeroMaximo;
	//txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN