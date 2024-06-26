const botaoMeioPagina = document.querySelector("#vocePressionou")
const textoClicou = document.querySelector("#voceApertouX")

let exibidos = false
let voceClicou = 0

botaoMeioPagina.addEventListener("click", () => {
    voceClicou++
    const textoFormatado = `Você pressionou o botão ${voceClicou} vezes`
    return textoClicou.innerHTML = textoFormatado
})
