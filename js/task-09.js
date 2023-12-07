const refs = {
  body: document.querySelector("body"),
  changeColorBtn: document.querySelector("button.change-color"),
  outputText: document.querySelector("span.color"),
};

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

const changeBGColor = (color) => {
  refs.body.style.backgroundColor = color;
  refs.outputText.textContent = color;
};

const onColorChange = () => {
  const color = getRandomHexColor();
  changeBGColor(color);
};

refs.changeColorBtn.addEventListener("click", onColorChange);
