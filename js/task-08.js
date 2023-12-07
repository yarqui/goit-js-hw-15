const form = document.querySelector("form.login-form");

const submitForm = (e) => {
  e.preventDefault();

  const formInputs = [...form.elements].filter((el) => el.nodeName === "INPUT");

  const hasEmptyInputs = formInputs.some((el) => !el.value);

  if (hasEmptyInputs) {
    return alert("All inputs should be filled");
  }

  const userCredentials = formInputs.reduce(
    (userCredentials, { name, value }) => {
      userCredentials[name] = value;
      return userCredentials;
    },
    {}
  );

  console.log("userCredentials", userCredentials);

  form.reset();
  document.activeElement.blur();
};

form.addEventListener("submit", submitForm);
