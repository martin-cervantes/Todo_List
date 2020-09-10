const hideForm = () => {
  const container = document.getElementById('container');
  container.classList.add('none');

  const formContainer = document.getElementById('form_container');
  formContainer.classList.add('none');
};

export default hideForm;
