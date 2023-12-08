const MIN_FONT_SIZE = refs.rangeControl.getAttribute("min");

const refs = {
  rangeControl: document.querySelector("input#font-size-control"),
  outputText: document.querySelector("span#text"),
};

refs.rangeControl.value = MIN_FONT_SIZE;

refs.rangeControl.addEventListener("input", (e) => {
  refs.outputText.style.fontSize = `${e.currentTarget.value}px`;
});
