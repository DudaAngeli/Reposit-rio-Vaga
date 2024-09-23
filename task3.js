const faturamentoDiarioJSON = `
{
    "faturamento": [
        {"dia": 1, "valor": 150.00},
        {"dia": 2, "valor": 200.00},
        {"dia": 3, "valor": 0},
        {"dia": 4, "valor": 250.00},
        {"dia": 5, "valor": 300.00},
        {"dia": 6, "valor": 0},
        {"dia": 7, "valor": 400.00},
        {"dia": 8, "valor": 0},
        {"dia": 9, "valor": 500.00},
        {"dia": 10, "valor": 0},
        {"dia": 11, "valor": 350.00},
        {"dia": 12, "valor": 0}
    ]
}
`;
function processarFaturamento(jsonData) {
    const dados = JSON.parse(jsonData).faturamento;
    
    const valores = dados.map(dia => dia.valor).filter(valor => valor > 0);
    
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    
    const somaTotal = valores.reduce((acc, valor) => acc + valor, 0);
    const mediaMensal = somaTotal / valores.length;

    const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia,
    };
}

const resultado = processarFaturamento(faturamentoDiarioJSON);

console.log(`Menor valor de faturamento: R$ ${resultado.menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${resultado.maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);