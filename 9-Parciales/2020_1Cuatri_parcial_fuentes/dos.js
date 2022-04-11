/*Realizar el algoritmo que permita ingresar los datos de una compra tipos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")x
Cantidad de bolsas,x
Precio por bolsa (más de cero ),x

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
  let tipo;
  let cantidadBolsa;
  let precioBolsa;
  let descuento;
  let importeTotalBrutoSinDes;
  let importeTotalBrutoConDes;
  let PorcentajeDescuento;

  respuesta="si";
  acumuladorBolsaArena=0;
  acumuladorBolsaCal=0;
  acumuladorBolsaCemento=0;

  while(respuesta=="si")
  {
  	tipo=prompt("Ingrese tipo de producto");
  	while(!(tipo=="arena" || tipo=="cal" || tipo=="cemento"))
  	{
  		tipo=prompt("ReIngrese tipo de producto");
  	}
  	cantidadBolsa=prompt("Ingrese cantidad de bolsa");
  	cantidadBolsa=parseInt(cantidadBolsa);
  	while(cantidadBolsa<0)
  	{
  		cantidadBolsa=prompt("ReIngrese cantidad de bolsa");
  	}
  	precioBolsa=prompt("Ingrese precio bolsa");
  	precioBolsa=parseInt(precioBolsa);
  	while(precioBolsa<0)
  	{
  		precioBolsa=prompt("ReIngrese precio de bolsa");
  	}

  	switch(tipo)
  	{
  		case "arena":
  		acumuladorBolasArena=acumuladorBolsaArena+cantidadBolsa;
  		break;
  		case "cal":
  		acumuladorBolasCal=acumuladorBolsaCal+cantidadBolsa;
  		break;
  		case "cemento":
  		acumuladorBolasArena=acumuladorBolsaCemento+cantidadCemento;
  		break;
    }
    //tipo mas caro
    if(banderaTipoMasCaro=="si")
    {
      PrecioTipoMasCaro=precio;
      TipoMasCaro=tipo;
      banderaTipoMasCaro="no";
    }
    else
    {
      if(precio>PrecioTipoMasCaro)
      {
        PrecioTipoMasCaro=precio;
        TipoMasCaro=tipo;
      }
    }

    respuesta=prompt("Desea continuar?");
  }//fin while
  //descuento
  if(cantidadBolsa>10)
  {
  	PorcentajeDescuento=15;
  }
  else
  {
  	if(cantidadBolsa>30)
  	{
  		PorcentajeDescuento=25;
  	}
  	else
  	{
  		PorcentajeDescuento=0;
  	}
  }
  //importe a pagar
  importeTotalBrutoSinDes=(acumuladorBolsaCemento*precio)+(acumuladorBolsaCal*precio)+(acumuladorBolsaArena*precio);
  descuento=PorcentajeDescuento*importeTotalBrutoSinDes/100;
  importeTotalBrutoConDes=importeTotalBrutoSinDes-descuento;
  
  document.write(" El importe total a pagar sin descuento : "+ importeTotalBrutoSinDes +"<br>");
  document.write(" El importe total a pagar con descuento : "+ importeTotalBrutoConDes+"<br>");
  if(acumuladorBolasArena>acumuladorBolsaCemento && acumuladorBolasArena>acumuladorBolsaCal)
  {
  	document.write (" El tipo mas cantidad de bolsa es Arena <br>");
  }
  else
  {
  	if(acumuladorBolasCal>acumuladorBolsaCemento)
  	{
  	  document.write(" El tipo mas cantidad de bolsa es Cal <br>");	
  	}
  	else
  	{
  		document.write(" El tipo mas cantidad de bolsa es Cemento <br>");
  	}
  }

  document.write(" El tipo mas caro es: " + TipoMasCaro +"<br>");

}
