const precoCombustivel = 4.65;

const caculaAutonomiaVeiculo = (consumoAutomovel, distanciaPercorrida) => {
    return (distanciaPercorrida / consumoAutomovel) * precoCombustivel;
}

console.log(caculaAutonomiaVeiculo(6.75, 19, 75).toFixed(2))
