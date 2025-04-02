const contenedorScroll = contenedorRoot;

function ObtenerScrollSuave(progreso, posicionInicial, distancia, duracion) {
    progreso /= duracion/2;
    if (progreso < 1) return distancia/2*progreso*progreso + posicionInicial;
    progreso--;
    return -distancia/2 * (progreso*(progreso-2) - 1) + posicionInicial;
};

function AnimacionScroll(tiempo, tiempoInicial, posicionInicial, distancia, duracion) {
    if (!tiempoInicial) tiempoInicial = tiempo;
    const progreso = tiempo - tiempoInicial;
    const currentPosition = ObtenerScrollSuave(progreso, posicionInicial, distancia, duracion);
    contenedorScroll.scrollTo(0, currentPosition);
    if (progreso < duracion) {
        window.requestAnimationFrame(function(tiempo) {
            AnimacionScroll(tiempo, tiempoInicial, posicionInicial, distancia, duracion);
        });
    }else{
        contenedorScroll.scrollTo(0, posicionInicial+distancia);
    }
}

function ScrollSuave(e, idSection) {
    e.preventDefault();
    let posicionObjetivo = document.querySelector(idSection).offsetTop;
    // if(window.getComputedStyle(document.getElementById('menu')).display=='none'){
    //     posicionObjetivo-=document.getElementById('header').clientHeight;
    // };
    if(posicionObjetivo<0) posicionObjetivo=0;
    const posicionInicial = contenedorScroll.scrollTop;
    const distancia = posicionObjetivo - posicionInicial;
    const duracion = 500;
    let tiempoInicial = null;
    window.requestAnimationFrame(function(tiempo) {
        AnimacionScroll(tiempo, tiempoInicial, posicionInicial, distancia, duracion);
    });
}