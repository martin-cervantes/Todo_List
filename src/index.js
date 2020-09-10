import './css/reset.css';
import './css/style.css';
import './css/list_projects.css';
import './css/list_todos.css';
import './css/forms.css';

import content from './js/content';
import listProjects from './js/list_projects';
import listTodos from './js/list_todos';
import formTodo1 from './js/form_todo';
import showMessage from './js/showMessage';

import Project from './js/project';
import Todo from './js/todo';


const App = JSON.parse(localStorage.getItem('appData')) || [];

let currentProject = parseInt(localStorage.getItem('currentProject'), 10) || 0;

window.changeTodosList = function (index) {
  currentProject = index;
  localStorage.setItem('currentProject', currentProject);
  listProjects(App, currentProject);

  listTodos(App, index);
};

window.deleteProject = function (index) {
  App.splice(index, 1);

  localStorage.setItem('appData', JSON.stringify(App));

  currentProject = 0;
  localStorage.setItem('currentProject', currentProject);
  listProjects(App, currentProject);

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

window.formTodo = function (index = -1) {
  formTodo1(App, currentProject, index);
};

const hideForm = () => {
  const container = document.getElementById('container');
  container.classList.add('none');

  const formContainer = document.getElementById('form_container');
  formContainer.classList.add('none');
};

const includes = (value) => {
  for (let i = 0; i < App.length; i += 1) {
    if (App[i].title === value) return true;
  }

  return false;
};

window.saveProject = function (title, desc) {
  if (includes(title)) {
    showMessage('There is a project with the same name');
  } else if (title !== '' && desc !== '') {
    const newProject = new Project(title, desc);
    App.push(newProject);

    localStorage.setItem('appData', JSON.stringify(App));

    currentProject = App.length - 1;
    localStorage.setItem('currentProject', currentProject);
    listProjects(App, currentProject);

    listTodos(App, currentProject);

    hideForm();
  } else {
    showMessage('Empty fields are not allowed');
  }
};

window.saveTodo = function (index, title, desc, dueDate, priority) {
  if (title !== '' && desc !== '' && dueDate !== '' && priority !== '') {
    if (index === -1) {
      if (App.length === 0) {
        const newProject = new Project('Project 1', 'Default project');
        App.push(newProject);
      }

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

    listProjects(App, currentProject);

    hideForm();
  } else {
    showMessage('Empty fields are not allowed');
  }
};

document.body.appendChild(content());

listProjects(App, currentProject);

listTodos(App, currentProject);
