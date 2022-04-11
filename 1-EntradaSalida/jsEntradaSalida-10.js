/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//let importeSueldo;
	//let porcentajeDescuento;
	//let descuento;
	//let resultado;

	//importeSueldo=document.getElementById('txtIdImporte').value;

	//importeSueldo=parseInt(importeSueldo);

	//porcentajeDescuento=25;

	//descuento=importeSueldo*porcentajeDescuento/100;

	//resultado=importeSueldo-descuento;

	//document.getElementById('txtIdResultado') .value= " El resultado es " + resultado;
    let importeSueldo;
	let porcentajeDescuento;
	let descuento;
	let resultado;

	importeSueldo=document.getElementById('txtIdImporte').value;

	importeSueldo=parseInt(importeSueldo);

	porcentajeDescuento = prompt("Ingrese porcentaje de descuento");

	descuento=importeSueldo*porcentajeDescuento/100;

	resultado=importeSueldo-descuento;

	document.getElementById('txtIdResultado') .value= " El resultado es " + resultado;	
}
