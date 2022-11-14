const precoGasolina = 4.65;
const precoEtanol = 5.20;
const precoDiesel = 6;

const caculaAutonomiaVeiculo = (tipoCombustivel, consumoAutomovel, distanciaPercorrida) => {
    if (tipoCombustivel === "Gasolina") return (distanciaPercorrida / consumoAutomovel) * precoGasolina;
    if (tipoCombustivel === "Etanol") return (distanciaPercorrida / consumoAutomovel) * precoEtanol;
    if (tipoCombustivel === "Diesel") return (distanciaPercorrida / consumoAutomovel) * precoDiesel;
}

console.log(caculaAutonomiaVeiculo("Etanol" , 19, 75).toFixed(2));
console.log(caculaAutonomiaVeiculo("Diesel" , 19, 75).toFixed(2));
console.log(caculaAutonomiaVeiculo("Gasolina" , 19, 75).toFixed(2));