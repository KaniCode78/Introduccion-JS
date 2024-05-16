//this


const reservacion = {
    nombre: 'Daniel',
    apellido: 'Garcia',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`el cliente ${this.nombre} reservo y su cantidadd a pagar es de ${this.total}`);
    }
}




const reservacion2 = {
    nombre: 'Susana',
    apellido: 'Heredia',
    total: 5500,
    pagado: false,
    informacion: function() {
        console.log(`el cliente ${this.nombre} reservo y su cantidadd a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();