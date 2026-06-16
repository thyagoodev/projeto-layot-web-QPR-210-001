function verificar() {
    
    let numero = Number(document.getElementById("numero").value);

    if (numero % 3 === 0 && numero % 7 === 0) {
        document.getElementById("resultado").innerHTML =
            "O número é divisível por 3 e por 7.";
    } else {
        document.getElementById("resultado").innerHTML =
            "O número NÃO é divisível por 3 e por 7.";
    }
}
