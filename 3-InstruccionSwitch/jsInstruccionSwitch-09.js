/*Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10%
 Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10%
 Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10%
 Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento

*/
function mostrar()
{
	let estacionIngresada;
	let precioBase;
	let localidadIngresada;
	let precioFinal;
	let aumento;
	let descuento;

	precioBase=15000;
	aumento=0;
	descuento=0;

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	localidadIngresada=document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case  "Invierno":
		    if(localidadIngresada=="Bariloche")
		    {
		    	aumento=20;
		    }
		    else
		    {
		    	if(localidadIngresada=="Mar del plata")
		    	{
		    		descuento=20;
		    	}
		    	else
		    		descuento=10;
		    }
		break;
		case  "Verano":
		    if(localidadIngresada=="Bariloche")
		    {
		    	descuento=20;
		    }
		    else
		    {
		    	if(localidadIngresada=="Mar del plata")
		    	{
		    		aumento=20;
		    	}
		    	else
		    		aumento=10;
		    }
		break;
		case  "Otoño":
		case  "Verano":
		    if(localidadIngresada=="Cordoba")
		    {
		    	precioFinal=precioBase;
		    }
		    else
		    	aumento=10;
        break;
	}
    if(aumento!=0)
    {
    	precioFinal= precioBase + precioBase*aumento/100;
    }
    else
    	if (descuento!=0)
    	 {
    	 	precioFinal= precioBase + precioBase*descuento/100;
    	 }
    	 else
    	 	precioFinal=precioBase;

    alert("El precio final es "+ precioFinal);



}//FIN DE LA FUNCIÓN