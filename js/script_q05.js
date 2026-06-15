function classificarTriangulo() {
    let l1 = parseFloat(document.getElementById('lado1').value);
    let l2 = parseFloat(document.getElementById('lado2').value);
    let l3 = parseFloat(document.getElementById('lado3').value);
    let resultadoDiv = document.getElementById('resultadoTriangulo');

    // Validação de campos vazios ou menores/iguais a zero
    if (isNaN(l1) || isNaN(l2) || isNaN(l3) || l1 <= 0 || l2 <= 0 || l3 <= 0) {
        resultadoDiv.innerText = "Por favor, digite valores válidos e maiores que zero para os três lados.";
        return;
    }

    // Lógica de classificação
    if (l1 === l2 && l2 === l3) {
        resultadoDiv.innerText = `Lados: ${l1}, ${l2}, ${l3}. O triângulo é Equilátero (possui os 3 lados iguais).`;
    } else if (l1 !== l2 && l2 !== l3 && l1 !== l3) {
        resultadoDiv.innerText = `Lados: ${l1}, ${l2}, ${l3}. O triângulo é Escaleno (possui os 3 lados diferentes).`;
    } else {
        resultadoDiv.innerText = `Lados: ${l1}, ${l2}, ${l3}. O triângulo é Isósceles (possui 2 lados iguais).`;
    }
}

function limparCampos() {
    document.getElementById('lado1').value = '';
    document.getElementById('lado2').value = '';
    document.getElementById('lado3').value = '';
    document.getElementById('resultadoTriangulo').innerText = '';
}