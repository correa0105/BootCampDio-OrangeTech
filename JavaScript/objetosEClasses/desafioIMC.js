class Pessoa {

    nome;
    idade;
    altura;
    peso;

    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }

    calcularIMC() {
        const imc = this.peso / (Math.pow(this.altura, 2));
        
        if (imc < 18.5) return "Abaixo do Peso";
        if (imc >= 18.5 && imc < 25) return "Peso Normal";
        if (imc >= 25 && imc < 30) return "Acima do Peso";
        if (imc >= 30 && imc < 40) return "Obeso";
        if (imc > 40) return "Obesidade Grave";
    }
}

const lucas = new Pessoa("Lucas Corrêa", 22, 1.65, 72);

console.log(lucas.calcularIMC());