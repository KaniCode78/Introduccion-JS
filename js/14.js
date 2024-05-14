//arrays

const numeros = [10, 20, 30, 40, 50];

console.log(numeros);
console.table(numeros);



// const dias = new Array ('Lunes', 'Martes','Miercoles', 'Jueves', 'Viernes');

// console.log(dias);
// console.table(dias);

// const arreglo = ["hola", 10, true, "si", null, {nombre: "Daniel", trabajo: "Dev"}, [1,2,3]];

// console.log(arreglo);

// Acceder a los valores de un arreglo

// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[4]);

//Conocer la extencion de un arreglo

// console.log(meses.length);

// meses.forEach( function(numeros){
//     console.log(numeros);
// })

// numeros[5] = 60;
// numeros[6] = 70;

numeros.push(61, 70, 80); // al final del arreglo
numeros.unshift(-10, -20,-30); //al inicio del arreglo

console.table(numeros);


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// meses.pop();// elimina el ultimo elemento
// meses.shift(); // elimina el primer elemento

meses.splice(2, 1);
console.table(meses);

//rest operator o spread operator

const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);

