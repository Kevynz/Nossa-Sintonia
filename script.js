document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões que têm o atributo 'data-proxima'
    const botoes = document.querySelectorAll('button[data-proxima]');

    // Adiciona um "ouvinte" de clique para cada botão
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            // Pega o ID da próxima tela a ser mostrada
            const proximaTelaId = botao.dataset.proxima;
            const proximaTela = document.getElementById(proximaTelaId);

            // Encontra a tela que está ativa no momento
            const telaAtual = document.querySelector('.tela.ativa');

            // Se encontrou a tela atual e a próxima tela
            if (telaAtual && proximaTela) {
                // Remove a classe 'ativa' da tela atual para escondê-la
                telaAtual.classList.remove('ativa');
                // Adiciona a classe 'ativa' na próxima tela para mostrá-la
                proximaTela.classList.add('ativa');

                // Toca a música quando for para a tela 2
                if (proximaTelaId === 'tela2') {
                    // Tenta criar e tocar o áudio. 
                    // Se o arquivo não existir, não dará erro, apenas não tocará.
                    try {
                        const audio = new Audio('assets/Meu_Sonho.mp3');
                        audio.play();
                    } catch (e) {
                        console.log("Arquivo de música não encontrado, mas tudo bem.");
                    }
                }
            }
        });
    });
});