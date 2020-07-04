const form = document.querySelector('.js-register-form');

form.addEventListener('submit', handleSubmitWithFormData);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;

  const nameInput = form.elements.name;
  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;
  const subscription = form.elements.subscription.value;

  console.dir(form.elements);
  console.log(nameInput);
  const data = {
    [nameInput.name]: nameInput.value,
    [emailInput.name]: emailInput.value,
    [passwordInput.name]: passwordInput.value,
    subscription,
  };
  console.log(data);
}

function handleSubmitWithFormData(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const data = {};

  formData.forEach((value, name) => {
    console.log(`Name: ${name}, Value: ${value}`);
    data[name] = value;
  });
  console.log(data);
}
