const formDADOS = document.querySelector('#formDADOS')
const divResultado = document.querySelector('#div-dados')

formDADOS.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const objFormDados = new FormData(formDADOS)

    let distancia = parseFloat(objFormDados.get('distancia'))
    let consumo = parseFloat(objFormDados.get('consumo'))
    let preco = parseFloat(objFormDados.get('preco'))

    let combustivel = distancia / consumo
    let valorTotal = combustivel * preco

    divResultado.innerHTML = `
        <p>Quantidade de combustível necessária: ${combustivel.toFixed(2)} litros</p>
        <p>Valor total a pagar: R$ ${valorTotal.toFixed(2)}</p>
    `

    formDADOS.reset()
})
