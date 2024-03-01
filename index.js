if (window.location.href.indexOf("?") != -1) {
    var raiz = window.location.href.split("?").pop();

    if (raiz.length != 9) {
        document.getElementById("resultado").innerText = "A raiz do CPF deve ser informada com nove dígitos.";
    }
    else if (isNaN(raiz)) {
        document.getElementById("resultado").innerText = "A raiz do CPF deve ser informada apenas com dígitos.";
    }
    else {
        var pesos = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

        var soma1 = 0;
        var soma2 = 0;
        var digito = 0;

        for (var i = 0; i < 9; i++) {
            digito = parseInt(raiz[i]);
            soma1 += digito * pesos[i + 1];
            soma2 += digito * pesos[i]
        }

        resto1 = soma1 % 11;

        if (resto1 < 2) {
            dv1 = 0;
        } else {
            dv1 = 11 - resto1;
        }

        soma2 += 2 * dv1;
        resto2 = soma2 % 11;

        if (resto2 < 2) {
            dv2 = 0;
        } else {
            dv2 = 11 - resto2;
        }

        var resultado = document.getElementById("resultado").innerText = raiz + dv1 + dv2;
    }
}