const controles = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const cores = document.querySelectorAll('[data-cor]');
const pecas = {
  braco: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleo: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  perna: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguete: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

cores.forEach((cor) => {
  cor.addEventListener('click', (event) => {
    trocaCorRobo(event.target.dataset.cor);
  });
});

function trocaCorRobo(cor) {
  const robo = document.querySelector('[data-robo]');
  const imageUrl = robo.src;
  const startIndex = imageUrl.lastIndexOf('-') + 1;
  const endIndex = imageUrl.indexOf('.', startIndex);
  const extractedContent = imageUrl.substring(startIndex, endIndex);
  const novaUrl = imageUrl.replace(extractedContent, cor);
  robo.src = novaUrl;
}

controles.forEach((controle) => {
  controle.addEventListener('click', (event) => {
    manipulaDados(event.target.dataset.controle, event.target.parentNode);
    atualizaEstatisticas(
      event.target.dataset.peca,
      event.target.dataset.controle,
    );
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector(`[data-contador]`);
  peca.value =
    operacao === 'subtrair'
      ? parseInt(peca.value) - 1
      : parseInt(peca.value) + 1;
}

function atualizaEstatisticas(peca, operacao) {
  estatisticas.forEach((estatistica) => {
    estatistica.textContent =
      operacao === 'subtrair'
        ? parseInt(estatistica.textContent) -
          pecas[peca][estatistica.dataset.estatistica]
        : parseInt(estatistica.textContent) +
          pecas[peca][estatistica.dataset.estatistica];
  });
}
