/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//let importeSueldo;
	//let porcentajeAumento;
	//let incremento;
	//let resultado;

	//importeSueldo=document.getElementById('txtIdSueldo').value;

	//importeSueldo=parseInt(importeSueldo);

	//porcentajeAumento=10;

	//incremento=importeSueldo*porcentajeAumento/100;

	//resultado= incremento+importeSueldo;

	//document.getElementById('txtIdResultado').value= " El resultado es " + resultado;
    let importeSueldo;
    let porcentajeAumento;
    let incremento;
    let resultado;

    importeSueldo=document.getElementById('txtIdSueldo').value;

    importeSueldo=parseInt(importeSueldo);

    porcentajeAumento = prompt("Ingrese porcentaje de incremento");

    incremento=importeSueldo*porcentajeAumento/100;

    resultado= incremento+importeSueldo;

    document.getElementById('txtIdResultado').value= " El resultado es " + resultado;

}
