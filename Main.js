window.addEventListener('load', ()=> { /* Escucha cuando se carga el documento HTML */
   
    const display = document.querySelector('.calculator-display');            /* Creamos dos constantes y nos guardamos los elementos que necesitamos*/
    const keypadButtons = document.getElementsByClassName('keypad-button');

    /* Creamos otra constante para convertir el HTMLCollection a Array*/
    const keypadButtonsArray = Array.from(keypadButtons);
        
    keypadButtonsArray.forEach( (button) => {                   /* Iteramos por nuestro nuevo array de botones */
        button.addEventListener('click', ()=> {                 /* A cada boton le agregamos un listener */
            calculadora(button,display)
        })
    })
});

function calculadora(button,display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;

        default:
            actualizar(display,button);
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML) /* Tomar el string y resolverlo */
}

function actualizar(display,button){
    if (display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display){
    display.innerHTML = 0;
}