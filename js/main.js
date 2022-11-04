const robotron = document.getElementById("robotron")

robotron.addEventListener("click", (event) => {
    console.log("Cliquei no robo")
    console.log(event)
})

function dizOi(nome) {
    console.log("Oi " + nome)
    console.log("Bem vindo ao Robotron 2000")
}

dizOi("Luiz")