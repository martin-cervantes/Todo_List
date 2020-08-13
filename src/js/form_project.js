const formProject = () => {
  const container = document.getElementById('container');
  container.classList.remove('none');

  const formProject = document.getElementById('form_container');
  formProject.setAttribute('onsubmit', 'return false');
  formProject.classList.remove('none');
  formProject.innerHTML = '';

  const title = document.createElement('h1');
  title.innerText = 'New Project';

  formProject.appendChild(title);

  const lbTitle = document.createElement('label');
  lbTitle.innerText = 'Title';

  formProject.appendChild(lbTitle);

  const txtTitle = document.createElement('input');
  txtTitle.setAttribute('type', 'text');
  txtTitle.setAttribute('name', 'txtTitle');
  txtTitle.id = 'txtTitle';

  formProject.appendChild(txtTitle);

  const lbDesc = document.createElement('label');
  lbDesc.innerText = 'Description';

  formProject.appendChild(lbDesc);

  const txtDesc = document.createElement('textarea');
  txtDesc.setAttribute('name', 'txtDesc');
  txtDesc.setAttribute('col', '80');
  txtDesc.setAttribute('row', '8');
  txtDesc.id = 'txtDesc';

  formProject.appendChild(txtDesc);

  const save = document.createElement('button');
  save.setAttribute('onclick', 'window.saveProject(txtTitle.value, txtDesc.value)');
  save.innerText = 'Save';

  formProject.appendChild(save);

  const cancel = document.createElement('button');
  cancel.setAttribute('onclick', 'window.cancelForm()');
  cancel.innerText = 'Cancel';

  formProject.appendChild(cancel);

  return formProject;
};

export default formProject;
