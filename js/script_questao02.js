//PEGANDO ELEMENTOS DO DOM
const formDADOS = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDADOS.addEventListener('submit', (evt) =>{
    evt.preventDefault()

    const objFormDados = new FormData(formDadoS)

    let n1 = objFormDados.get('num1')
    let n2 = objFormDados.get('num2')
    let n3 = objFormDados.get('num3')

    let media = parseFloat((n1 + n2 + n3)) /  3

    divResultado.innerHTML = 'A MÉDIA DOS NÚMEROS DIGITADOS É: $ 
       { media.toFixed (2).replace('.',',') }''

       formDados.reset()
       

 })




