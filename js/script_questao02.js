//PEGANDO ELEMENTOS DO DOM
const formDADOS = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDADOS.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const objFormDados = new FormData(formDADOS)

    let largura = parseFloat(objFormDados.get('largura'))
    let altura = parseFloat(objFormDados.get('altura'))

    let area = largura * altura


    divResultado.innerHTML = ` A área a ser pintada é de $ (area.
    toFixed(2).replace('.',',') } m , total de litros para pintar 
    essa área é de ${parseFloat(área / 2).toFixed(2).replace('.', '.')}`


    formDADOS.reset()


})




