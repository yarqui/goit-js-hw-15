const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

const refs = {
  inputNumber: document.querySelector("input[type='number']"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("div#boxes"),
};

const createBox = (size) => {
  const box = document.createElement("div");

  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();

  return box;
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
};

const createBoxes = (amount) => {
  destroyBoxes();

  const fragment = document.createDocumentFragment();

  for (let i = 0, size = 30; i < amount; i += 1, size += 10) {
    const box = createBox(size);

    fragment.appendChild(box);
  }

  refs.boxes.appendChild(fragment);
};

refs.createBtn.addEventListener("click", () =>
  createBoxes(refs.inputNumber.value)
);
refs.destroyBtn.addEventListener("click", destroyBoxes);
