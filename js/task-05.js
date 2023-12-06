const refs = {
  input: document.querySelector("input#name-input"),
  output: document.querySelector("span#name-output"),
};

const onInputChange = (e) => {
  const inputVal = e.currentTarget.value;
  refs.output.textContent = inputVal || "Anonymous";
};

refs.input.addEventListener("input", onInputChange);
