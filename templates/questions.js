/*************************************************** */

const questions2ndPlayer = [
    {name:"", cyclePlayer: 1, correctAnswers: 0, wrongAnswers: 0, pasapalabraused: 0, totaldone: 0, done: false, winner: false},
    { letter: "a", answer: "abastecer", status: 0, cycle: 1, round: 0, question: ("CON LA A.<br> Proveer a alguien o a algo de bastimentos, víveres u otras cosas necesarias") },
    { letter: "b", answer: "bacanal", status: 0, cycle: 1, round: 0, question: ("CON LA B.<br> Dicho de ciertas fiestas de la Antigüedad: Celebradas en honor del dios Baco") },
    { letter: "c", answer: "caballo", status: 0, cycle: 1, round: 0, question: ("CON LA C.<br> Mamífero solípedo del orden de los perisodáctilos, de tamaño grande y extremidades largas.") },
    { letter: "d", answer: "dársena", status: 0, cycle: 1, round: 0, question: ("CON LA D.<br> Parte de un puerto resguardada artificialmente y adecuada para el fondeo y la carga y descarga de embarcaciones.") },
    { letter: "e", answer: "echar", status: 0, cycle: 1, round: 0, question: ("CON LA E.<br> Hacer que algo vaya a parar a alguna parte, dándole impulso") },
    { letter: "f", answer: "fabada", status: 0, cycle: 1, round: 0, question: ("CON LA F.<br> Potaje de judías con tocino, chorizo y morcilla, típico de Asturias.") },
    { letter: "g", answer: "gala", status: 0, cycle: 1, round: 0, question: ("CON LA G.<br> Vestido sobresaliente y lucido.") },
    { letter: "h", answer: "hambre", status: 0, cycle: 1, round: 0, question: ("CON LA H.<br> Gana y necesidad de comer.") },
    { letter: "i", answer: "idioma", status: 0, cycle: 1, round: 0, question: ("CON LA I.<br> Lengua de un pueblo o nación, o común a varios.") },
    { letter: "j", answer: "jabonar", status: 0, cycle: 1, round: 0, question: ("CON LA J.<br> Fregar o estregar la ropa u otras cosas con jabón y agua para lavarlas, emblanquecerlas o ablandarlas.") },
    { letter: "k", answer: "bikini", status: 0, cycle: 1, round: 0, question: ("CONTIENE LA K.<br> Prenda femenina de baño compuesta de un sujetador y una braga.") },
    { letter: "l", answer: "lagar", status: 0, cycle: 1, round: 0, question: ("CON LA L.<br> Recipiente donde se pisa la uva para obtener el mosto.") },
    { letter: "m", answer: "macuto", status: 0, cycle: 1, round: 0, question: ("CON LA M.<br> Mochila, especialmente la del soldado.") },
    { letter: "n", answer: "nacer", status: 0, cycle: 1, round: 0, question: ("CON LA N.<br> Dicho de un ser vivo: Salir del vientre materno, del huevo o de la semilla.") },
    { letter: "ñ", answer: "acompañar", status: 0, cycle: 1, round: 0, question: ("CONTIENE LA Ñ.<br> Estar o ir en compañía de otra u otras personas.") },
    { letter: "o", answer: "obra", status: 0, cycle: 1, round: 0, question: ("CON LA O.<br> Cosa hecha o producida por un agente.") },
    { letter: "p", answer: "padre", status: 0, cycle: 1, round: 0, question: ("CON LA P.<br> Varón o animal macho que ha engendrado a otro ser de su misma especie.") },
    { letter: "q", answer: "queja", status: 0, cycle: 1, round: 0, question: ("CON LA Q.<br> Expresión de dolor, pena o sentimiento.") },
    { letter: "r", answer: "rabo", status: 0, cycle: 1, round: 0, question: ("CON LA R.<br> Cosa que cuelga a semejanza de la cola de un animal.") },
    { letter: "s", answer: "sablazo", status: 0, cycle: 1, round: 0, question: ("CON LA S.<br> Acto de sacar dinero a alguien pidiéndoselo, por lo general, con habilidad o insistencia y sin intención de devolverlo.") },
    { letter: "t", answer: "tabú", status: 0, cycle: 1, round: 0, question: ("CON LA T.<br> Condición de las personas, instituciones y cosas a las que no es lícito censurar o mencionar.") },
    { letter: "u", answer: "ubicar", status: 0, cycle: 1, round: 0, question: ("CON LA U.<br> Situar o instalar en determinado espacio o lugar.") },
    { letter: "v", answer: "vaciar", status: 0, cycle: 1, round: 0, question: ("CON LA V.<br> Dejar vacío algo.") },
    { letter: "w", answer: "clown", status: 0, cycle: 1, round: 0, question: ("CONTIENE LA W.<br> Payaso de circo, y especialmente el que, con aires de afectación y seriedad, forma pareja con el augusto.") },
    { letter: "x", answer: "conexión", status: 0, cycle: 1, round: 0, question: ("CONTIENE LA X.<br> Enlace, atadura, trabazón, concatenación de una cosa con otra.") },
    { letter: "y", answer: "yen", status: 0, cycle: 1, round: 0, question: ("CON LA Y.<br> Unidad monetaria del Japón.") },
    { letter: "z", answer: "zamarra", status: 0, cycle: 1, round: 0, question: ("CON LA Z.<br> Prenda de vestir, rústica, hecha de piel con su lana o pelo.") },
]


// ==UserScript==
// @name         Palabras de la RAE
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://dle.rae.es/*
// @icon         https://www.google.com/s2/favicons?domain=rae.es
// @grant        none
// ==/UserScript==

function pillarPalabras() {
    'use strict';


let lista = ['ábaco','abanico','aguardiente','alameda','alférez',
'baraja','bellota','bereber','bocadillo','blindaje',
'cuarzo','comba','cinismo','cerilla','cábala',
'dádiva','doblón','doctrina','duda','duende',
'eficiente','efímero','entuerto','embrión','ego',
'fieltro','fideo','festín','fantasma','fabada',
'geoda','gentío','galera','gafe','gabardina',
'herejía','hernia','hegemonía','hada','hacienda',
'inhumación','instituto','ira','idiocia','icono',
'jornada','juicio','jenízaro','jamacuco','jacobino',
'kilotón','bikini','karma','karaoke','kamikaze',
'lluvia','lío','lid','ley','latencia',
'martirio','memoria','meca','mancuerna','maná',
'nómada','niebla','nata','narcolepsia','nácar',
'puñal','paño','roña','ñora','guiño',
'ópalo','onomatopeya','odisea','obús','oasis',
'plató','pisto','pistón','penalti','pedigrí',
'quorum','quinqué','quid','querubín','querella',
'remolino','rehala','rebuzno','recabar','ración',
'sutura','sístole','sinapsis','saeta','sacrificio',
'tifus','tifón','tarántula','tapir','tabarra',
'úlcera','utopía','utillero','ulular','ubio',
'violín','viceversa','verdugo','vegano','vahído',
'walkman','web','wifi','wok','wéstern',
'exhausto','exiguo','exhalar','examen','exótico',
'yogur','yoga','yesca','yerno','yen',
'zombi','zapateo','zanja','zócalo','zigzag'];


    function siguientePalabra(lista){
        let i = localStorage.getItem('indice')?Number(localStorage.getItem('indice'))+1:0;
        localStorage.setItem('indice',(i));
        if(i<lista.length){
            document.location.href = 'https://dle.rae.es/${encodeURIComponent(lista[i])}?m=form';
        }else{
            return true;
        }
    }
}


function guardarPalabra(){
    let indice = Number(localStorage.getItem('indice'));
    let palabra = lista[Number(localStorage.getItem('indice'))].toLowerCase();

    let primeraLetra = ['á','é','í','ó','ú'].indexOf(palabra[0]);
        primeraLetra = primeraLetra>-1?['a','e','i','o','u'][primeraLetra]:palabra[0];

    let guardado = localStorage.getItem('palabras');
    guardado = guardado?JSON.parse(localStorage.getItem('palabras')):{};


    if(!guardado[primeraLetra]) guardado[primeraLetra]={};

    let aux = acepciones();
    if(aux.length>0){
        guardado[primeraLetra][palabra] = aux;
    }
    localStorage.setItem('palabras',JSON.stringify(guardado));
    return guardado;
}

function acepciones(){
    let acepciones = Array.from(document.querySelectorAll('#resultados>article>p.j')).map(s=>s.innerText);

    let resultados = [];
    acepciones.forEach((a)=>{
        let aux = a.match(/(?<=.\s)[^.]{10,}./);
        if(aux && aux[0].length>0){
            resultados.push(aux[0]);
        }
    });

    return resultados;
}

function mostrarResultado(guardado){
    let texto = document.createElement("textarea");
    texto.style.width = '100%';
    texto.style.height = '500px';
    texto.innerText = JSON.stringify(guardado);
    document.getElementById('patrocinio').appendChild(texto);
    localStorage.clear();
}


window.setTimeout(()=>{
    let guardado = guardarPalabra();
    if(siguientePalabra(lista)){
        mostrarResultado(guardado);
    }

}, 2*1000);



