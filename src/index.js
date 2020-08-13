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

const App = [];
let currentProject = 0;

window.changeTodosList = function (index) {
  listTodos(App, index);
  currentProject = index;
};

window.deleteProject = function (index) {
  App.splice(index, 1);

  listProjects(App);

  listTodos(App, 0);
};

window.deleteTodo = function (index) {
  App[currentProject].todos.splice(index, 1);

  listTodos(App, currentProject);
};

window.toggleStatus = function (index) {
  App[currentProject].todos[index].toggleStatus();
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

window.saveProject = function (title, desc) {
  const newProject = new Project(title, desc);
  App.push(newProject);

  listProjects(App);

  listTodos(App, 0);

  hideForm();
};

window.saveTodo = function (index, title, desc, dueDate, priority) {
  if (index === -1) {
    const newTodo = new Todo(title, desc, dueDate, priority);
    App[currentProject].todos.push(newTodo);
  } else {
    App[currentProject].todos[index].title = title;
    App[currentProject].todos[index].desc = desc;
    App[currentProject].todos[index].dueDate = dueDate;
    App[currentProject].todos[index].priority = priority;
  }

  listTodos(App, currentProject);

  hideForm();
};

window.cancelForm = function () {
  hideForm();
};

/* testing */

const project1 = new Project('Library', 'Library project');
const project2 = new Project('Library2', 'Library project 2');

const todo1 = new Todo('Models', 'Create models', '2020-08-10', '1', true);
const todo2 = new Todo('Models 2', 'Create models', '2020-08-10', '1');

const todo3 = new Todo('Models 3', 'Create models', '2020-08-10', '1', true);
const todo4 = new Todo('Models 4', 'Create models', '2020-08-10', '1');


project1.todos.push(todo1);
project1.todos.push(todo2);

project2.todos.push(todo3);
project2.todos.push(todo4);

App.push(project1);
App.push(project2);

document.body.appendChild(content());

listProjects(App);

listTodos(App, currentProject);
