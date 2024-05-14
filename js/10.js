// objet0s

// const nombreProducto = "Monitor 20 Pulgadas";
// const precio = 300;
// const disponible = true;




const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}


console.log (producto);

/*
console.log (producto.precio);
console.log (producto.nombreProducto);
console.log (producto.disponible);

console.log(producto["precio"]);  // otra forma  igual a la de arriba
*/

//agregar propiedades
producto.imagen = 'imagen.jpg';

//eliminar propidades
delete producto.disponible;


console.log (producto)

