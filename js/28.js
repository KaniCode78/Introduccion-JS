// clases


class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

formatearProducto(){
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio} `;
}

}

const producto2 = new Producto('Monitor Curvo 58"', 2520);
const producto3 = new Producto('Laptop', 3500);

//Herencia

class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio} y su isbn es:${isbn} `;
    }
}

const libro = new Libro ('JavaScript la Revolucion', 120, '355354545454');
console.log(libro);




console.log(producto2);
