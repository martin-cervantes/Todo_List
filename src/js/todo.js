export default function Todo(title, desc, dueDate, priority, status = false) {
  this.title = title;
  this.desc = desc;
  this.dueDate = dueDate;
  this.priority = priority;
  this.status = status;
}

Todo.prototype.toggleStatus = function () {
  this.status = !this.status;
};
