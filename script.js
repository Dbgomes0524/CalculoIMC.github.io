// Função para calcular o IMC e determinar a condição
function calcularIMC() {
    // Obtendo os valores dos inputs
    const nome = document.getElementById("nome").value;
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    
    // Verificando se todos os campos estão preenchidos
    if (!nome || !peso || !altura) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Calculando o IMC
    const imc = peso / (altura * altura);
    
    // Definindo as faixas de IMC de acordo com o sexo
    let faixaImc = '';
    let recomendacao = '';
    
    if (sexo === 'feminino') {
        // Mulheres: < 19.1, 19.1-25.8, 25.8-27.3, 27.3-32.3, > 32.3
        if (imc < 19.1) {
            faixaImc = 'Abaixo do peso';
            recomendacao = `Ganhe ${Math.abs(19.1 - imc).toFixed(1)} kg para atingir o peso normal.`;
        } else if (imc >= 19.1 && imc <= 25.8) {
            faixaImc = 'Peso normal';
        } else if (imc > 25.8 && imc <= 27.3) {
            faixaImc = 'Marginalmente acima do peso';
            recomendacao = `Perda de ${Math.abs(imc - 25.8).toFixed(1)} kg necessária.`;
        } else if (imc > 27.3 && imc <= 32.3) {
            faixaImc = 'Acima do peso ideal';
            recomendacao = `Perda de ${Math.abs(imc - 25.8).toFixed(1)} kg necessária.`;
        } else {
            faixaImc = 'Obeso';
            recomendacao = `Perda de ${Math.abs(imc - 25.8).toFixed(1)} kg necessária.`;
        }
    } else {
        // Homens: < 20.7, 20.7-26.4, 26.4-27.8, 27.8-31.1, > 31.1
        if (imc < 20.7) {
            faixaImc = 'Abaixo do peso';
            recomendacao = `Ganhe ${Math.abs(20.7 - imc).toFixed(1)} kg para atingir o peso normal.`;
        } else if (imc >= 20.7 && imc <= 26.4) {
            faixaImc = 'Peso normal';
        } else if (imc > 26.4 && imc <= 27.8) {
            faixaImc = 'Marginalmente acima do peso';
            recomendacao = `Perda de ${Math.abs(imc - 26.4).toFixed(1)} kg necessária.`;
        } else if (imc > 27.8 && imc <= 31.1) {
            faixaImc = 'Acima do peso ideal';
            recomendacao = `Perda de ${Math.abs(imc - 26.4).toFixed(1)} kg necessária.`;
        } else {
            faixaImc = 'Obeso';
            recomendacao = `Perda de ${Math.abs(imc - 26.4).toFixed(1)} kg necessária.`;
        }
    }

    // Exibindo o resultado na tela
    const resultadoDiv = document.getElementById("resultado");
    const infoResultado = document.getElementById("infoResultado");

    infoResultado.innerHTML = `
        <strong>Nome:</strong> ${nome} <br>
        <strong>Sexo:</strong> ${sexo === 'feminino' ? 'Feminino' : 'Masculino'} <br>
        <strong>Peso:</strong> ${peso} kg <br>
        <strong>Altura:</strong> ${altura} m <br>
        <strong>IMC:</strong> ${imc.toFixed(2)} <br>
        <strong>Condição:</strong> ${faixaImc} <br>
        <strong>Recomendação:</strong> ${recomendacao}
    `;
    resultadoDiv.style.display = 'block';
}

// Função para o envio do formulário de contato
document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (email && mensagem) {
        alert('Mensagem enviada com sucesso!');
        document.getElementById('email').value = '';
        document.getElementById('mensagem').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
