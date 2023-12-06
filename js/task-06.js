const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const inputLength = input.value.length;
  const attributeLength = parseInt(input.getAttribute("data-length"));

  const isValid = inputLength === attributeLength;

  input.classList.toggle("invalid", !isValid);
  input.classList.toggle("valid", isValid);
});
