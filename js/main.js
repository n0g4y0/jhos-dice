class Pieza{
    constructor(nombre){
        this.nombre = nombre;
    }
    get name(){
        return this.name;
    }
    get value(){
        return  this.nombre[0].toUpperCase();
    }
}

let valores = [new Pieza('blue'),new Pieza('yellow'),new Pieza('red'),new Pieza('green')];

const DURACION_SECUENCIA = 1000;
let listaSecuenciaJuego = []
let listaSecuenciaUsuario = []
let puntaje = 0;
let nivel = 1;
let continua = true;

function obtenerValorAleatorio(valores){

    let valorAleatorio =  Math.floor(Math.random() * (((valores.length) - 0) + 0));
    return valores[valorAleatorio];
}

function agregarValorALista(lista,listaOpciones){

    lista.push(obtenerValorAleatorio(listaOpciones));
}

function secuenciasSonIguales(listaSecuenciaJuego, listaSEcuenciaUsuario){

    if(listaSecuenciaJuego.length !== listaSEcuenciaUsuario.length){
        return false;
    }else{
        return !listaSecuenciaJuego.some((item,i) => item.value !== listaSEcuenciaUsuario[i].value)
    }
}

function resaltarPieza(name){
    
    let $elemento = document.querySelector(`#${name}`);
    $elemento.classList.add(`resaltar-${name}`);
    console.log(`agregando super ${name}`);

    setTimeout( function(){
        mostrarPorTiempo(name);

}


function mostrarPorTiempo(name){

    let $elemento = document.querySelector(`#${name}`);
    $elemento.classList.remove(`resaltar-${name}`);
    console.log(`eliminando super ${name}`);

}


function mostrarSecuencia(delay, arr){
    let times = arr.length;
    let count = 0;

    const intervalId = setInterval(() => {

    if(count < arr.length){
        let $elemento = document.querySelector(`#${arr[count].nombre}`);
        $elemento.classList.add(`resaltar-${arr[count].nombre}`);
        console.log(`agregando super ${arr[count].nombre}`);
    }
    
      if (count >= times) {
        clearInterval(intervalId);
        return;
      }
      setTimeout(() => {
        
        let $elemento = document.querySelector(`#${arr[count-1].nombre}`);
        $elemento.classList.remove(`resaltar-${arr[count-1].nombre}`);
        console.log(`eliminando super ${arr[count-1].nombre}`);
        
      }, delay);
      count++;
    }, delay * 2, arr);

}

function capturarSecuenciasUsuario(cantidad){

    if(cantidad === listaSecuenciaUsuario.length){

        return listaSecuenciaUsuario;
    }
}

function inicioJuego(){
    const DURACION_MOSTRAR_SECUENCIA = 1000;
    
    resetear();

    agregarValorALista(listaSecuenciaJuego,valores);

    mostrarSecuencia(DURACION_MOSTRAR_SECUENCIA,listaSecuenciaJuego)

    habilitarBotonIniciarJuego(false);
    
}
function resetear(){

    listaSecuenciaJuego = []
    listaSecuenciaUsuario = []
    puntaje = 0;
    nivel = 1;
    continua = true;
    deshabilitarBotones(true);
}


// EVENTOS

document.querySelector("#blue").onclick = function(event){
    resaltarPieza(event.target.value);
}

document.querySelector("#red").onclick = function(event){
    resaltarPieza(event.target.value);
}

document.querySelector("#yellow").onclick = function(event){
    resaltarPieza(event.target.value);
}

document.querySelector("#green").onclick = function(event){
    resaltarPieza(event.target.value);
}


