/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;


	sexo = prompt("ingrese f ó m .");

	while(!(sexo=="f" || sexo=="m"))
	{
     sexo = prompt("Error, reingrese f ó m .");
    }

    document.getElementById('txtIdSexo').value=sexo;
        
}//FIN DE LA FUNCIÓN