const precoProduto = 72;

const valorASerPago = (condicaoDePagamento, precoProduto) => {
    const valorProduto = precoProduto;
    if (condicaoDePagamento === "Debito") return valorProduto - (valorProduto * 0.1);
    if (condicaoDePagamento === "Dinheiro" || condicaoDePagamento === "Pix") return valorProduto - (valorProduto * 0.15);
    if (condicaoDePagamento === "2 Vezes") return valorProduto;
    else return valorProduto + (valorProduto * 0.1);
}

console.log(`O produto custa ${precoProduto}, você vai pagar`, valorASerPago("Dinheiro", precoProduto));