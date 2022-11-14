const geraNumero = require("./sortearNumero");

const arrayDeNumeros = [];

const adicionaNumerosSorteadosNoArray = () => {
    for (let i = 0; i <= 4; i++) {

        const numeroSorteado = geraNumero.sorteiaNumero();
        let semRepetido = true;

        arrayDeNumeros.forEach(valor => {
            if (numeroSorteado === valor) {
                i--
                return semRepetido = false;
            }
        })

        if(semRepetido) {
            arrayDeNumeros.push(numeroSorteado);
        }

    }
}

const retornaMaiorNumero = () => {

    let numeroAtual = 0;

    for (let i = 0; i <= 4; i++) {
        if (numeroAtual < arrayDeNumeros[i]) {
            numeroAtual = arrayDeNumeros[i]
        }
    }

    console.log(arrayDeNumeros);
    console.log("O maior numero do array é: ", numeroAtual);

}

adicionaNumerosSorteadosNoArray();
retornaMaiorNumero();
