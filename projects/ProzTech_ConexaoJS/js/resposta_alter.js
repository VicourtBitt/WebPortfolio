const tituloAlter = document.querySelector("#tituloCaixaPequena")
const siteProz = document.querySelector("#linkCaixaPequena")
const botaoExibirElementos = document.querySelector("#exibirInformacoesNaTela")
const listaNaoOrdenada = document.querySelector("#listaNaoOrdenada")
const listaOrdenada = document.querySelector("#listaOrdenada")

botaoExibirElementos.addEventListener("click", () => {
    tituloAlter.innerText = `Olá Visitante, obrigado por clicar ali.`
    siteProz.innerText = "ProzEducação"
    listaNaoOrdenada.innerHTML = `
                    <li>Olá</li>
                    <li>Boa Tarde</li>
                    <li>Tudo Bem</li>
    `

    listaOrdenada.innerHTML = `
        <li><a href="https://google.com">Google</a></li>
        <li><a href="https://www.canva.com/">Canva</a></li>
        <li><a href="https://www.youtube.com/">Youtube</a></li>
    `
})