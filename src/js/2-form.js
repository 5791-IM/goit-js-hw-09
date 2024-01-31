const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    const formData = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem('feedback-form-state');

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log(formData);

  localStorage.removeItem('feedback-form-state');

  form.reset();
});
