/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
  //declarar variables
  let contador;
  let producto;
  let tipo;
  let precio;
  let cantidadUnidades;
  let marca;
  let fabricante;
  let promedio;
  let banderaAlcoholMasBarato;
  let PrecioalcoholMasBarato;
  let cantidadMasBarato;
  let fabricanteMasBarato;
  let promedioMasUnidades;


  contador=0;
  banderaAlcoholMasBarato="si";
  acumuladorAlcohol=0;
  acumuladorJabón=0;
  acumuladorBarbijo=0;
  contadorJabón=0;
  contadorAlcohol=0;
  contadorBarbijo=0;

   //inicializo while
  while(contador<5)//dentro while
  { 
  //validar tipo
    tipo=prompt("Ingrese tipo de producto");
    contador=contador+1;
    while(!(tipo=="alcohol"|| tipo=="jabón" || tipo=="barbijo"))
    {
      tipo=prompt("ReIngrese tipo de producto");
    }
    //validar precio
    precio=prompt("Ingrese precio de producto");
    precio=parseInt(precio);
    while(precio<100 && precio>300)
    {
      precio=prompt("ReIngrese precio de producto");
    }
    //validar cant de unidades
    cantidadUnidades=prompt("Ingrese cantidad de unidades del producto");
    cantidadUnidades=parseInt(cantidadUnidades);
    while(cantidadUnidades>0 && cantidadUnidades<1000)
    {
      cantidadUnidades=prompt("Ingrese cantidad de unidades del producto");
    }
    //pido marca y fabricante
    marca=prompt("Ingrese marca del producto");
    fabricante=prompt("Ingrese fabricante del producto");
  //alcohol mas barato, cant y fabricante// bandera
    if(banderaAlcoholMasBarato=="si")
    {
      PrecioalcoholMasBarato=precio;
      fabricanteMasBarato=fabricante;
      cantidadMasBarato=cantidadUnidades;
      banderaAlcoholMasBarato="no";
    }
    else
    {
      if(PrecioalcoholMasBarato<precio)
      {
        PrecioalcoholMasBarato=precio;
        fabricanteMasBarato=fabricante;
        cantidadMasBarato=cantidadUnidades;
      }
    }
    switch(tipo)
    {
      case"alcohol":
           contadorAlcohol=contadorAlcohol+1;
           acumuladorAlcohol=acumuladorAlcohol+cantidadUnidades;
      break;
      case"barbijo":
           contadorBarbijo=contadorBarbijo+1;
           acumuladorBarbijo=acumuladorBarbijo+cantidadUnidades;
      break;
      case"jabón":
           contadorJabón=contadorJabón+1;
           acumuladorJabón=acumuladorJabón+cantidadUnidades;
      break;

    }
    
}//FIN WHILE

    //tipo con mas unidades promedio por compra
  if(acumuladorAlcohol>acumuladorJabón && acumuladorAlcohol>acumuladorBarbijo)
  {
    //es alcohol
    promedioMasUnidades=acumuladorAlcohol/contadorAlcohol;
  }
  else
  {
    if(acumuladorBarbijo>acumuladorJabón)//es barbijo
    {
      promedioMasUnidades=acumuladorBarbijo/contadorBarbijo;
    }
    else
    {
      //es jabon
      promedioMasUnidades=acumuladorJabón/contadorJabón;
    }
  }
  
  document.write("Del alcohol mas barato la cantidad es : "+cantidadMasBarato + "y la marca es:"+ fabricanteMasBarato +"<br>");
  document.write("El promedio del de mayor unidades es : "+ promedioMasUnidades +"<br>");
  document.write("La cantidad de jabon es : "+ acumuladorAlcohol +"<br>");
}
