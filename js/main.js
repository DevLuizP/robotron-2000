const controle = document.querySelectorAll(".controle-ajuste");
const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca, evento.target.dataset.controle);
    })
})


function manipulaDados(botoes, controle){
    const peca = controle.querySelector("[data-contador]");

    if (botoes === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else if (botoes === "+"){
        peca.value = parseInt(peca.value) + 1
    } else {
        console.log(Error)
    }
}

function atualizaEstatistica(peca, operacao) {
    if (operacao === "+") {
        estatisticas.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        })
    } else if (operacao === "-"){
        estatisticas.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        })
    }
}

function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron_2000-"+cor+"/robotron.png";
 }
