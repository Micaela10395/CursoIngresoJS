/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado;
	let edadIngresada;
	//Podria poner variable mensaje + lo que tengo ahora en alert

	nombreIngresado=document.getElementById('txtIdNombre').value;
	edadIngresada=document.getElementById('txtIdEdad').value;

	alert (" Su nombre es "  +  nombreIngresado + " y tiene " + edadIngresada + " años ");
	//alert(mensaje)
}

