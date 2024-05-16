
// const puntaje = 100;

// if (puntaje !== 1000) {
//     console.log('sno es igual 1000');
// }
// else {
//     console.log(`no es igual: ${puntaje}`);
// }


// const efectivo = 1000;
// const carrito = 800;

// if(efectivo > carrito){
//     console.log('el usuaruio puede pagar');
// } else {
//     console.log('fondos insufiecientes');
// }

const rol = 'Administrador';

if(rol === 'Administrador'){
    console.log('Acceso a todo el sistema');
} else if(rol === 'Editor'){
    console.log('Eres editor, puedes entrar pero no puedes hacer mucho');
} else{
    console.log('no tienes acceso');
}

