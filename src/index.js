import './sass/main.scss';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    start: document.querySelector ('button[data-action="start"]'),
    stop: document.querySelector ('button[data-action="stop"]'),
    body: document.querySelector ('body')
}

let id = null;

function logger(){
    let randIndex = randomIntegerFromInterval (0, colors.length-1);
    refs.body.style.backgroundColor = colors[randIndex];
}

function startLogger(){
    id = setInterval(logger, 1000);
    refs.start.setAttribute("disabled", "disabled");
}

function stopLogger(){
    clearInterval(id);
    refs.start.removeAttribute("disabled", "disabled");
}

refs.start.addEventListener("click", startLogger);
refs.stop.addEventListener("click", stopLogger);

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
