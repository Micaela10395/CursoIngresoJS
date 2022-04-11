/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/
function mostrar()
{
	
	let edadIngresada;
	let estadoCivil;


    edadIngresada=document.getElementById('txtIdEdad').value;
	
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada<18 && estadoCivil!="soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}


}//FIN DE LA FUNCIÓN