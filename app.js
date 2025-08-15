functioncriaCartao(categoria, pergunta, resposta); {
    let container = document.getElementByld('container')
    let cartao = document.creatElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao_conteudo">
        <h3>§{categooria}</h3>
        <div class="carta_conteudo_pergunta">
            <p> §{pergunta}</p>
        </div>
        <div class="cartao_conteudo_resposta">
            <p>§{resposta} </p>
        </div>
    </div>
    `

    let respostaEstavisivel = false

    function viraCartao() {
        respostaEstavisivel = !respostaEstavisivel
        cartao.classList.toggle('active', respostaEstavisivel)
    }
    cartao.addEventListener('click', viraCartao)

    container.appendChild(cartao)
}
