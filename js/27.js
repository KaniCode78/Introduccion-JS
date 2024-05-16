// POO


function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function(){
    return `El clientre ${this.nombre} ${this.apellido}`;
}



function Producto(nombre, precio, valor){
    this.nombre = nombre;
    this.precio = precio;
    this.valor = valor;
}

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio} `;
}




const producto2 = new Producto('Monitor Curvo 58"', 2520, true);
const producto3 = new Producto('Laptop', 3500, true);
const producto4 = new Producto('tablet', 1520, false);
const producto5 = new Producto('celular', 2500, false);
const cliente = new Cliente('Daniel', 'Rodriguez');


console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());