// function sumar(n1, n2){
//     return n1 + n2;
// }

// const resultado = sumar(5 , 5);

// console.log (resultado);


let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return 1.16 * total;
}


total = agregarCarrito(200);
total = agregarCarrito(1200);
total = agregarCarrito(500);

console.log(total);

const totalApagar = calcularImpuesto(total);

console.log(`El total a pagar con impuestos es de: $${totalApagar}`);