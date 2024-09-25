document.addEventListener('DOMContentLoaded', () => {
    const primeiroNumeroInput = document.getElementById('num1');
    const segundoNumeroInput = document.getElementById('num2');
    const botaoSoma = document.getElementById('sum-btn');
    const resultadoTexto = document.getElementById('result');

    botaoSoma.addEventListener('click', () => {
        const num1 = parseFloat(primeiroNumeroInput.value);
        const num2 = parseFloat(segundoNumeroInput.value);
        const soma = num1 + num2;
        resultadoTexto.textContent = `Resultado: ${soma}`;
    });
});
