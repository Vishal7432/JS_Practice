const randomColor = function () {
  const hex = "0123456789ABDCF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());

let Interval;

const startChangingColor = function () {
  if (!Interval) {
    Interval = setInterval(changeColor, 1000);
  }

  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChanginColor = function () {
  clearInterval(Interval);
  Interval = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChanginColor);
