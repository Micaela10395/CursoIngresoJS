/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let flag;

	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';
	flag=0;

    //txtIdSuma.value=sumaPositivos;
	//txtIdProducto.value=multiplicacionNegativos;

	while(respuesta=='si')
	{
     numero=prompt("Ingrese numero");
     numero=parseInt(numero);
     if(numero>0)
     {
      sumaPositivos=sumaPositivos+numero;
     }
     else
     	{
          flag=1;
          multiplicacionNegativos=multiplicacionNegativos*numero;  
     	}

     respuesta=prompt("Ingrese si para continuar");
     
	}
    
    if(flag==0)
    {
    	multiplicacionNegativos=0;
    }

    document.getElementById('txtIdSuma').value=sumaPositivos;
    document.getElementById('txtIdProducto').value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN