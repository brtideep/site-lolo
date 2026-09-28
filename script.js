function mostrarCarta() {

    document.querySelector(".carta").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   CONTADOR
========================= */

/*
    MUDE A DATA ABAIXO

    Exemplo:

    new Date("2026-01-15T20:00:00")

*/

const dataInicial = new Date("2019-01-01T08:00:00");


function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - dataInicial;

    const segundosTotais =
        Math.floor(diferenca / 1000);

    const dias =
        Math.floor(segundosTotais / 86400);

    const horas =
        Math.floor((segundosTotais % 86400) / 3600);

    const minutos =
        Math.floor((segundosTotais % 3600) / 60);

    const segundos =
        segundosTotais % 60;


    document.getElementById("dias").textContent = dias;

    document.getElementById("horas").textContent =
        horas;

    document.getElementById("minutos").textContent =
        minutos;

    document.getElementById("segundos").textContent =
        segundos;

}


setInterval(atualizarContador, 1000);

atualizarContador();