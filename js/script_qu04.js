function calcularBoletim() {
    let nome = document.getElementById('nomeAluno').value;
    let n1 = parseFloat(document.getElementById('nota1').value);
    let n2 = parseFloat(document.getElementById('nota2').value);
    let n3 = parseFloat(document.getElementById('nota3').value);
    let resultadoDiv = document.getElementById('resultadoBoletim');

    if (nome === "" || isNaN(n1) || isNaN(n2) || isNaN(n3) || n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
        resultadoDiv.innerText = "Por favor, preencha o nome e todas as notas de 0 a 10.";
        return;
    }

    let media = (n1 + n2 + n3) / 3;
    let status = media >= 6 ? "Aprovado" : "Reprovado";

    resultadoDiv.innerText = `Aluno: ${nome}. Notas: ${n1}, ${n2}, ${n3}. Média: ${media.toFixed(2)}. Esse aluno está: ${status}.`;
}

function limparCampos() {
    document.getElementById('nomeAluno').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
    document.getElementById('resultadoBoletim').innerText = '';
}




