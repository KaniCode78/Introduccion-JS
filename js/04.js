// String o cadenas de texto
const tweet = 'Monitor de 20 JavaScript"';
// const producto2 = String('Monitor 30 Pulgadas');
// const producto3 = new String('Monitor 50 Pulgadas');

const producto2 = 'Monitor de HD" ';
const email = 'correo@correo';



console.log(tweet.length); //muestra la cadena de texto en numero
console.log(producto2);

//IndexOf (retorna posicion)

console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('Tablet'));
console.log(email.indexOf('@'));

// Include

console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));