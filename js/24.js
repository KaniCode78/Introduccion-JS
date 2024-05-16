// for loop

// for ( let i = 0; i <=10; i++ ) {
//     console.log( i );
// }

// while loop

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`el numero ${i} es par`);
//     } else {
//         console.log(`el numero ${i} es impar`);
//     }
// }




const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Television 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

// while loop este tiene que revisar que la condicion se cumpla

// let i = 20; // inidice

// while ( i < 10) { // condicion
// console.log('desde el while loop');
// i++; // incremento
//}


// do while loop

let i = 100;

do {
    console.log(i);

    i++;
} while (i < 10);


