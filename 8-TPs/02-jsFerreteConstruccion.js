/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
 let largo;
 let ancho;
 let vueltas;
 let perimetro;
 let alambre;

 largo= document.getElementById('txtIdLargo').value;
 ancho= document.getElementById('txtIdAncho').value;

 largo=parseFloat(largo);
 ancho=parseFloat(ancho);

 vueltas=3;

 perimetro=2*largo+2*ancho;

 alambre=perimetro*3;

 alert("La cantidad de alambre a comprar es "+alambre);
}
function Circulo () 
{
 let radio;
 let perimetro;
 let vueltas;
 let alambre;

 radio=document.getElementById('txtIdRadio').value;

 radio=parseFloat(radio);

 vueltas=3;

 perimetro=2*radio*Math.PI;

 alambre=perimetro*3;

 alert("La cantidad de alambre a comprar es "+alambre);

}
function Materiales () 
{
	let largo;
    let ancho;
    let superficie;
    let cemento;
    let cal;

    largo= document.getElementById('txtIdLargo').value;
    ancho= document.getElementById('txtIdAncho').value;

    largo=parseFloat(largo);
    ancho=parseFloat(ancho);

    superficie=largo*ancho;
    cemento=superficie*2;
    cal=superficie*3;

    alert("Las bolsa de cemento que se necesitan son "+cemento + " y " + cal +" de cal");

}