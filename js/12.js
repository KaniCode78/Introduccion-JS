
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}


Object.freeze(producto); //no permite agregar ni eliminar nuevas propiedades o valor

producto.imagen ='imagen.jpg';

console.log(Object.isFrozen(producto));

delete producto.precio;

console.log(producto);


Object.seal(producto); // seal si permite editar las propiedades exsitentes