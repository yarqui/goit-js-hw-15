const refs = {
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  valOutput: document.querySelector("span#value"),
};

const updateCounter = (val) => {
  counterValue += val;
  refs.valOutput.textContent = counterValue;
};

const incrementCounter = () => {
  updateCounter(1);
};

const decrementCounter = () => {
  updateCounter(-1);
};

let counterValue = 0;

refs.incrementBtn.addEventListener("click", incrementCounter);
refs.decrementBtn.addEventListener("click", decrementCounter);
