const form = document.querySelector("form.login-form");

const submitForm = (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  let userCredentials = {};

  formData.forEach((val, key) => {
    userCredentials[key] = val;
  });
  console.log("userCredentials:", userCredentials);

  e.currentTarget.reset();
  document.activeElement.blur();
};

form.addEventListener("submit", submitForm);
