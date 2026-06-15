function calcularCombustivel() {
    let d = parseFloat(document.getElementById('distancia').value);
    let c = parseFloat(document.getElementById('consumo').value);
    let p = parseFloat(document.getElementById('preco').value);
    let resultadoDiv = document.getElementById('resultadoCombustivel');

    if (isNaN(d) || isNaN(c) || isNaN(p) || d <= 0 || c <= 0 || p <= 0) {
        resultadoDiv.innerText = "Por favor, preencha todos os campos com números válidos.";
        return;
    }

    let litros = d / c;
    let valor = litros * p;

    resultadoDiv.innerText = `Distância ${d}km, Consumo ${c}km/l, Preço R$${p.toFixed(2)}. Quantidade de combustível: ${litros.toFixed(2)} litros. Valor total: R$ ${valor.toFixed(2)}`;
}

function limparCampos() {
    document.getElementById('distancia').value = '';
    document.getElementById('consumo').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('resultadoCombustivel').innerText = '';
}
