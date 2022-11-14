const calculaIMC = (peso, altura) => {
    const imc = peso / (Math.pow(altura, 2));
    return tipoIMC(imc);
}

const tipoIMC = (imc) => {
    if (imc < 18.5) return "Abaixo do Peso";
    if (imc >= 18.5 && imc < 25) return "Peso Normal";
    if (imc >= 25 && imc < 30) return "Acima do Peso";
    if (imc >= 30 && imc < 40) return "Obeso";
    if (imc > 40) return "Obesidade Grave";
}

console.log(calculaIMC(73, 1.65));