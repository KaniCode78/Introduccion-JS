const metodoPago = 'tarjeta';

switch (metodoPago){
    case 'efectivo':
        console.log('pago con efectivo');
        break;
    case 'tarjeta':
        console.log('pago con tarjeta');
        break;
    case 'paypal':
        console.log('pago con paypal');
        break;
    default:
        console.log('metodo de pago no valido');
        break;

}