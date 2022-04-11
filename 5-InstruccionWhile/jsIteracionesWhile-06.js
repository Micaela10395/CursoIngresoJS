/*Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
    let numero;
	let acumulador;
    let promedio;
    let contador;
   
    contador=0;
	acumulador=0;

    //numero = prompt(pedir 5 números)
	//txtIdSuma.value=acumulador;
	//txtIdPromedio.value=acumulador/5;
    //INICIALIZO while
	//pido 5 numeros
	//fuera while promedio
	//muestro datos afuera
    
    while(contador<	5)
    {
    	numero=prompt("Ingrese numeros");
    	numero=parseInt(numero);
    	contador=contador+1;
    	acumulador=acumulador+numero;
    }
    promedio=acumulador/contador;

    document.getElementById("txtIdSuma").value=acumulador;
    document.getElementById('txtIdPromedio').value=promedio;
    

}//FIN DE LA FUNCIÓN