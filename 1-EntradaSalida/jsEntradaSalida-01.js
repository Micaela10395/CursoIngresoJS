/*
Romero Micaela
e/s 01
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	//alet("Esto funciona de maravilla")

	let nombreProductoUno;
	let nombreProductoDos;
	let nombreProductoTres;
	let precioProductoUno;
	let precioProductoDos;
	let precioProductoTres;
	let precioBruto;
	let promedio;
	let precioFinal;
	let iva;
	let porcentajeDescuento;
	let descuento;
	let precioFinalconDescuento;
	let mensaje;

	nombreProductoUno = prompt("Ingrese nombre del producto uno ");
	nombreProductoDos = prompt("Ingrese nombre del producto dos ");
	nombreProductoTres = prompt("Ingrese nombre del producto tres ");

	precioProductoUno = prompt("Ingrese precio del producto uno ");
	precioProductoDos = prompt("Ingrese precio del producto dos ");
	precioProductoTres = prompt("Ingrese precio del producto tres ");

	porcentajeDescuento = prompt("Ingrese porcentaje de descuento");


    precioProductoUno=parseInt(precioProductoUno);
    precioProductoDos=parseInt(precioProductoDos);
    precioProductoTres=parseInt(precioProductoTres);

    precioBruto= precioProductoUno+precioProductoDos+precioProductoTres;

    promedio= (precioProductoUno+precioProductoDos+precioProductoTres)/3;

    iva= precioBruto*21/100;

    precioFinal= precioBruto+iva;

    descuento=precioFinal*porcentajeDescuento/100;

	precioFinalconDescuento=precioFinal-descuento;

	mensaje="Los productos son "+ nombreProductoUno  +  nombreProductoDos  +  nombreProductoTres +"." +
		"El precio de los productos son " + precioProductoUno  +  precioProductoDos  +  precioProductoTres + "." +
		"El precio bruto es " + precioBruto +"." + "El promedio de los productos es " + promedio +"." +
		"El precio final + iva es " + precioFinal  +"." + "El precio final con decuento es " + precioFinalconDescuento

	alert(mensaje);
//alert(`El precio de ${productoUno}, ${productoDos}, ${productoTres} es ${precioBruto}`)

}

