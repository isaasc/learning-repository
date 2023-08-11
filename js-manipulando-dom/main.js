const controles = document.querySelectorAll('[data-controle]');
const pecas = {
  bracos: {
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
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

controles.forEach((controle) => {
  controle.addEventListener('click', (event) => {
    manipulaDados(event.target.dataset.controle, event.target.parentNode);
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector(`[data-contador]`);
  peca.value =
    operacao === 'subtrair'
      ? parseInt(peca.value) - 1
      : parseInt(peca.value) + 1;

  //   operacao === 'subtrair'
  //     ? contadorSelector.setAttribute('value', contadorSelector.value--)
  //     : contadorSelector.setAttribute('value', contadorSelector.value++);
}
