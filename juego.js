var uno = 'piedra';
var dos = 'papel';
var tres = 'tijera';

function resultado (user, cpu){
    if(user != cpu || user === cpu){

        if(user === uno && cpu === dos){
            console.log('Gana la cpu');
        }else if(user === uno && cpu === tres){
            console.log('Gana el Jugador');
        }else if(user === dos && cpu === uno){
            console.log('Gana el Jugador');
        }else if(user === dos && cpu === tres){
            console.log('Gana la cpu');
        }else if(user === tres && cpu === uno){
            console.log('Gana la cpu');
        }else if(user === tres && cpu === dos){
            console.log('Gana el Jugador');
        }else{
            console.log('EMPATE!!!');
        }
    }
}
resultado(uno, tres);