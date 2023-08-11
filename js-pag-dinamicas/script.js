const todasTeclas = document.querySelectorAll('.tecla');

todasTeclas.forEach((tecla) => {
  const buttonTecla = document.getElementById(`som_${tecla.classList[1]}`);
  tecla.addEventListener('click', () => buttonTecla.play());
  tecla.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'Enter')
      tecla.classList.add('ativa');
  });
  tecla.addEventListener('keyup', () => tecla.classList.remove('ativa'));
});
('');
