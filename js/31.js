
const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    Notification.requestPermission()
    .then (resultado => console.log (`el resultado es ${resultado}`) );
});


if (Notification.permission == 'granted'){
    new Notification('Esta es una notificacion', {
        icon: 'img/ccj.png',
        body: 'Condigo con juanito'
    })
}

