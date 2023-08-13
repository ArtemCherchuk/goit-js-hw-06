const formEl = document.querySelector(".login-form");
let userIhfo = {};
const onSubmitForm = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  // console.log(`Email: ${email.value}, Password: ${password.value}`);

  userIhfo.email = email.value;
  userIhfo.password = password.value;

  console.log(userIhfo);
  event.currentTarget.reset();
};

formEl.addEventListener("submit", onSubmitForm);
