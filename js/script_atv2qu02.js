function validar() {

    let codigo = document.getElementById("codigo").value;
    let senha = document.getElementById("senha").value;

    if (codigo === "ABCD1234" && senha === "1234") {
        document.getElementById("resultado").innerHTML =
            "ACESSO PERMITIDO";
    } else {
        document.getElementById("resultado").innerHTML =
            "ACESSO NEGADO";
    }
}