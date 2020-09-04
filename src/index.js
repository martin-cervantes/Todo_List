import './css/reset.css';
import './css/style.css';
import './css/list_projects.css';
import './css/list_todos.css';
import './css/forms.css';

import content from './js/content';
import listProjects from './js/list_projects';
import listTodos from './js/list_todos';
import formTodo1 from './js/form_todo';
import formProject1 from './js/form_project';

import Project from './js/project';
import Todo from './js/todo';


const App = JSON.parse(localStorage.getItem('appData')) || [];

let currentProject = 0;

window.changeTodosList = function (index) {
  listTodos(App, index);
  currentProject = index;
};

window.deleteProject = function (index) {
  App.splice(index, 1);

  localStorage.setItem('appData', JSON.stringify(App));

  listProjects(App);

  listTodos(App, 0);
};

window.deleteTodo = function (index) {
  App[currentProject].todos.splice(index, 1);

  localStorage.setItem('appData', JSON.stringify(App));

  listTodos(App, currentProject);
};

window.toggleStatus = function (index) {
  App[currentProject].todos[index].toggleStatus();

  localStorage.setItem('appData', JSON.stringify(App));
};

window.formProject = function () {
  formProject1();
};

window.formTodo = function (index = -1) {
  formTodo1(App, currentProject, index);
};

function hideForm() {
  const container = document.getElementById('container');
  container.classList.add('none');

  const formContainer = document.getElementById('form_container');
  formContainer.classList.add('none');
}

function includes(value) {
  for (let i = 0; i < App.length; i += 1) {
    if (App[i].title === value) return true;
  }

  return false;
}

window.saveProject = function (title, desc) {
  if (includes(title)) {
    alert('There is a project with the same name');
  } else if (title !== '' && desc !== '') {
    const newProject = new Project(title, desc);
    App.push(newProject);

    localStorage.setItem('appData', JSON.stringify(App));

    listProjects(App);

    listTodos(App, 0);

    hideForm();
  } else {
    alert('Empty fields are not allowed');
  }
};

window.saveTodo = function (index, title, desc, dueDate, priority) {
  if (title !== '' && desc !== '' && dueDate !== '' && priority !== '') {
    if (index === -1) {
      const newTodo = new Todo(title, desc, dueDate, priority);
      App[currentProject].todos.push(newTodo);
    } else {
      App[currentProject].todos[index].title = title;
      App[currentProject].todos[index].desc = desc;
      App[currentProject].todos[index].dueDate = dueDate;
      App[currentProject].todos[index].priority = priority;
    }

    localStorage.setItem('appData', JSON.stringify(App));

    listTodos(App, currentProject);

    hideForm();
  } else {
    alert('Empty fields are not allowed');
  }
};

window.cancelForm = function () {
  hideForm();
};

document.body.appendChild(content());

listProjects(App);

listTodos(App, currentProject);
