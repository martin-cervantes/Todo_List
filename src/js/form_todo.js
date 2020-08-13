const formTodo = (app, project, todo) => {
  const container = document.getElementById('container');
  container.classList.remove('none');

  const formTodo = document.getElementById('form_container');
  formTodo.setAttribute('onsubmit', 'return false');
  formTodo.classList.remove('none');
  formTodo.innerHTML = '';

  const title = document.createElement('h1');
  title.innerText = 'New Todo';

  formTodo.appendChild(title);

  const lbTitle = document.createElement('label');
  lbTitle.setAttribute('for', 'txtTitle');
  lbTitle.innerText = 'Title';

  formTodo.appendChild(lbTitle);

  const txtTitle = document.createElement('input');
  if (todo > -1) txtTitle.setAttribute('value', `${app[project].todos[todo].title}`);
  txtTitle.setAttribute('type', 'text');
  txtTitle.setAttribute('name', 'txtTitle');
  txtTitle.id = 'txtTitle';

  formTodo.appendChild(txtTitle);

  const lbDesc = document.createElement('label');
  lbDesc.setAttribute('for', 'txtDesc');
  lbDesc.innerText = 'Description';

  formTodo.appendChild(lbDesc);

  const txtDesc = document.createElement('textarea');
  if (todo > -1) txtDesc.innerText = `${app[project].todos[todo].desc}`;
  txtDesc.setAttribute('name', 'txtDesc');
  txtDesc.setAttribute('col', '80');
  txtDesc.setAttribute('row', '8');
  txtDesc.id = 'txtDesc';

  formTodo.appendChild(txtDesc);

  const lbDueDate = document.createElement('label');
  lbDueDate.setAttribute('for', 'txtDueDate');
  lbDueDate.innerText = 'Due Date';

  formTodo.appendChild(lbDueDate);

  const txtDueDate = document.createElement('input');
  if (todo > -1) txtDueDate.setAttribute('value', `${app[project].todos[todo].dueDate}`);
  txtDueDate.setAttribute('type', 'date');
  txtDueDate.setAttribute('name', 'txtDueDate');
  txtDueDate.id = 'txtDueDate';

  formTodo.appendChild(txtDueDate);

  const lbPriority = document.createElement('label');
  lbPriority.setAttribute('for', 'txtPriority');
  lbPriority.innerText = 'Priority';

  formTodo.appendChild(lbPriority);

  const txtPriority = document.createElement('input');
  if (todo > -1) txtPriority.setAttribute('value', `${app[project].todos[todo].priority}`);
  txtPriority.setAttribute('type', 'number');
  txtPriority.setAttribute('name', 'txtPriority');
  txtPriority.id = 'txtPriority';

  formTodo.appendChild(txtPriority);

  const save = document.createElement('button');
  save.setAttribute('onclick', `window.saveTodo(${todo}, txtTitle.value, txtDesc.value, txtDueDate.value, txtPriority.value)`);
  save.innerText = 'Save';

  formTodo.appendChild(save);

  const cancel = document.createElement('button');
  cancel.setAttribute('onclick', 'window.cancelForm()');
  cancel.innerText = 'Cancel';

  formTodo.appendChild(cancel);

  return formTodo;
};

export default formTodo;
