const numeros = [];

const preencheLista = (limite) => {
    for (let i = 0; i <= limite; i++) {
        numeros.push(i)
    }
}

const imprimePar = (limite) => {
    preencheLista(limite);

    for (let i = 0; i <= numeros.length; i++) {

        const numero = numeros[i];

        if (numero % 2 === 0) {
            console.log(`O numero ${numero} é par`);
        }
    }
}

imprimePar(25);