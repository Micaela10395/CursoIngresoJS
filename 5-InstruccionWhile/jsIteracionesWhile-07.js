/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;

	contador=0;
	acumulador=0;
	respuesta='si';


	while(respuesta=='si')
    {
    	numero=prompt("Ingrese numero");
    	numero=parseInt(numero);
    	contador=contador+1;
    	acumulador=acumulador+numero;
    	respuesta=prompt("si para continuar");
    }
    promedio=acumulador/contador;

    document.getElementById('txtIdSuma').value=acumulador;
    document.getElementById('txtIdPromedio').value=promedio;

}//FIN DE LA FUNCIÓN