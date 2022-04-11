/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.x
2-Suma de los positivos.x
3-Cantidad de positivos.x
4-Cantidad de negativos.x
5-Cantidad de ceros.x
6-Cantidad de números pares.x
7-Promedio de positivos.x
8-Promedios de negativos.x
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numero;
	let sumaNegativos;
	let sumaPositivos;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	respuesta="si";
	sumaNegativos=0
	sumaPositivos=0
	contadorPositivos=0
	contadorNegativos=0
	contadorCeros=0
	contadorPares=0 




	while(respuesta=="si")
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);

		if(numero<0)
		{
			//negativoos
			sumaNegativos=sumaNegativos+numero;
			contadorNegativos=contadorNegativos+1;

		}
		else
		{
			if(numero>0)
			{
				//positivo
				sumaPositivos=sumaPositivos+numero;
				contadorPositivos=contadorPositivos+1;
			}
			else
			{
				//cero
				contadorCeros=contadorCeros+1;
			}
		}

		if(numero % 2 ==0)
		{
			contadorPares=contadorPares+1;
		}

		respuesta=prompt("Desea continuar?");
	}//fin del while

	promedioNegativos=sumaNegativos/contadorNegativos;
	diferencia=contadorPositivos- contadorNegativos;

	document.write("La suma de negativos es : "+sumaNegativos +"<br>");
	document.write("La suma de positivos es : "+sumaPositivos +"<br>");
	document.write("La cantidad de negativos es : "+ contadorNegativos +"<br>");
	document.write("La cantidad de positivos es : "+ contadorPositivos +"<br>");
	document.write("La cantidad de ceros es : "+ contadorCeros +"<br>");
	document.write("La cantidad de numeros pares es : "+ contadorPares +"<br>");
	if(contadorPositivos>0)
	{
	  promedioPositivos=sumaPositivos/contadorPositivos;
	  document.write("El promedio de Positivos : "+ promedioPositivos +"<br>");
    }
    else
    {
      document.write("No se ingreso ningun numero positivo, no se puede calcular promedio <br>");
	
    }

    if(contadorNegativos>0)
	{
	  promedioNegativos=sumaNegativos/contadorNegativos;
	  document.write("El promedio de negativos : "+ promedioNegativos +"<br>");
    }
    else
    {
      document.write("No se ingreso ningun numero negativo, no se puede calcular promedio <br>");
	
    }

    document.write("La diferencia es: "+ diferencia +"<br>");
}//FIN DE LA FUNCIÓN