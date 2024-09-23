const faturamentoPorEstado = {
    saoPaulo: 6783643,
    rioDeJaneiro: 3667866,
    minasGerais: 2922988,
    espirtoSanto: 2716548,
    outros: 1984953
};

function calcularPercentuais(faturamento) {
    const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

    const percentuais = {};
    for (const estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2);
    }
    
    return percentuais;
}

const percentuais = calcularPercentuais(faturamentoPorEstado);

console.log("Percentual de faturamento por estado:");
for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
    }
