const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}


//forma anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;


// console.log(precioProducto);
// console.log(nombreProducto);


//destructuring

const {precio, nombreProducto} = producto;
// const {nombreProducto} = producto;

console.log(precio)
console.log(nombreProducto)