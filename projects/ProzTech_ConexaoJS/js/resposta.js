const botaoMeioPagina = document.querySelector("#vocePressionou")
const textoClicou = document.querySelector("#voceApertouX")
let voceClicou = 0

botaoMeioPagina.addEventListener("click", (e) => {
    voceClicou++
    const textoFormatado = `Você pressionou o botão ${voceClicou} vezes`
    return textoClicou.innerHTML = textoFormatado
})
