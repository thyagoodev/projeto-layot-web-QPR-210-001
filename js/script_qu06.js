function calcularIMC() {
    let nome = document.getElementById('nomePaciente').value;
    let p = parseFloat(document.getElementById('peso').value);
    let a = parseFloat(document.getElementById('altura').value);
    let resultadoDiv = document.getElementById('resultadoIMC');

    if (nome === "" || isNaN(p) || isNaN(a) || p <= 0 || a <= 0) {
        resultadoDiv.innerText = "Por favor, preencha o nome, peso e altura corretamente.";
        return;
    }

    let imc = p / (a * a);
    let faixa = "";

    if (imc < 20) {
        faixa = "Abaixo do peso";
    } else if (imc < 25) {
        faixa = "Normal";
    } else if (imc < 30) {
        faixa = "Excesso de peso";
    } else if (imc < 35) {
        faixa = "Obesidade";
    } else {
        faixa = "Obesidade mórbida";
    }

    resultadoDiv.innerText = `Paciente: ${nome}. Peso ${p}kg, Altura ${a}m. IMC: ${imc.toFixed(2)}. Faixa de Risco: ${faixa}.`;
}

function limparCampos() {
    document.getElementById('nomePaciente').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultadoIMC').innerText = '';
}

