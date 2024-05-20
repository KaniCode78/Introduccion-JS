const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario autenticado'); //  EL PROMISE SE CUMPLE
    } else {
        reject('No se pudo autenticar el usuario'); // el promise no se cumple
    }
});



//funciones con funtion
// usuarioAutenticado
// .then(function(resultado){
//     console.log(resultado);
// })
// .catch(function(error){
//     console.log(error);
// })

//Arrow funtion

usuarioAutenticado
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error))




// en los promises existen 3 valores
// pending: no se ha cumplido pero tampoco se ha rechazado
// fullfilled: ya se cumplio
// rejected: se ha rechazado o no se pudo cumplor