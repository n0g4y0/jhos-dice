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


let listaSecuenciaJuego = []
let listaSecuenciaUsuario = []

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
    },1000,name);

}


function mostrarPorTiempo(name){

    let $elemento = document.querySelector(`#${name}`);
    $elemento.classList.remove(`resaltar-${name}`);
    console.log(`eliminando super ${name}`);

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


