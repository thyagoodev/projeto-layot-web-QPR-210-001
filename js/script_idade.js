//PEGANDO ELEMENTOS DO DOM
const formDADOS = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDADOS.addEventListener('submit', (evt) =>{
    evt.preventDefault()

    const objFormDados = new FormData(formDADOS)

    let nome = objFormDados.get('nome')
    let idade = objFormDados.get('idade')

    let situacaoidade = ''

    if (idade >= 18) {
        situacaoidade = `${nome}, vc é maior de idade`
    } else {
        situacaoidade = `${nome}, vc é menor de idade`
    }

    divResultado.innerHTML = situacaoidade

})




