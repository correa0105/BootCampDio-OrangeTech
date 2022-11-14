const calculaMedia = (nota1, nota2, nota3) => {
    const media = (nota1 + nota2 + nota3) / 3;
    console.log("Sua nota foi: ", media);
    console.log("Sua situação é: ");
    return situacao(media);
}

const situacao = (media) => {
    if (media < 5) return "Reprovado";
    if (media >= 5 && media < 7) return "Recuperação";
    if (media >= 7) return "Aprovado";
} 

console.log(calculaMedia(6, 6.75, 3));
