let mapedKeys = [
  'a',
  'w',
  's',
  'e',
  'd',
  'f',
  't',
  'g',
  'y',
  'h',
  'u',
  'j',
  'k',
  'o',
  'l',
  'p',
  ';',
];

let audio = new Audio('./src/audios/a.wav');

let teclas = document.querySelectorAll('.piano-keys .keys');

const volumePiano = document.querySelector('.volume-slider input');

const checkTeclas = document.querySelector('.keys-check input');

const spanTeclas = document.querySelectorAll('.piano-keys .keys span');

teclas.forEach((keys) => {
  keys.addEventListener('click', () => {
    tocarSom(keys.dataset.key);
  });
});

const tocarSom = (key) => {
  audio.src = `./src/audios/${key}.wav`;
  audio.play();
};

document.addEventListener('keydown', (e) => {
  const tecla = document.querySelector(`[data-key="${e.key}"]`);

  if (mapedKeys.includes(e.key)) {
    tocarSom(e.key);

    tecla.classList.add('click');

    setTimeout(() => {
      tecla.classList.remove('click');
    }, 150);
  }
});

volumePiano.addEventListener('input', (e) => {
  audio.volume = e.target.value;
});

checkTeclas.addEventListener('click', () => {
  spanTeclas.forEach((e) => {
    e.classList.toggle('hide');
  });
});
