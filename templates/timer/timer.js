"use strict"

const countDown = document.querySelector('#countdown');
const end = document.querySelector('#end');
const empiezabtn = document.querySelector('input[value="empieza"]');
const pausabtn = document.querySelector('input[value="pausa"]');
const reaunudabtn = document.querySelector('input[value="reanuda"]');


let tiempoRestante = parseInt(countDown.textContent);
let cuentaAtras;


empiezabtn.addEventListener('click', () => {
    console.log('Aqqui empieza');
    cronoMetro();
});

pausabtn.addEventListener('click', () =>{
    console.log('Aqqui pausamos');
    pausa();
});

reaunudabtn.addEventListener('click', () =>{
    console.log('Aqqui reanudamos');
});

const cronoMetro = () =>{
    cuentaAtras = setInterval(() => {
        tiempoRestante--;
        countDown.textContent= tiempoRestante;
        if (tiempoRestante === 0){
            clearInterval(cuentaAtras);
            end.textContent = "Se acabo el tiempo"
        }
    }, 1000);
}



const pausa = () =>{
    clearInterval(cuentaAtras);
}
