class Carros {
    marca;
    cor;
    gastoPorKm;

    constructor (marca, cor, gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    calcularViagem (distancia, precoCombustivel) {
        return (distancia / this.gastoPorKm) * precoCombustivel;
    }
}

const carro1 = new Carros("Renault", "Prata", 19);

console.log(carro1.calcularViagem(80, 6.50));