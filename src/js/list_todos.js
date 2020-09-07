const listTodos = (projects, index) => {
  const listTodos = document.getElementById('list_todos');

  listTodos.innerHTML = '';

  if (projects.length > 0) {
    const button = document.createElement('button');
    button.id = 'new_project';
    button.innerHTML = "New Activity <i class='far fa-plus-square'></i>";
    button.setAttribute('onclick', 'window.formTodo()');

    listTodos.appendChild(button);

    const table = document.createElement('table');
    const tableRow = document.createElement('tr');

    const headers = ['Title', 'Desc', 'Due Date', 'Priority', 'Status'];

    headers.forEach((header) => {
      const tableHeader = document.createElement('th');
      tableHeader.innerText = header;

      tableRow.appendChild(tableHeader);
    });

    table.appendChild(tableRow);

    projects[index].todos.forEach((todo, i) => {
      const tableRow = document.createElement('tr');

      Object.values(todo).forEach((element, j) => {
        const tableData = document.createElement('td');

        if (j < 4) {
          tableData.innerText = element;
        } else {
          let html = '';
          html = `<input id='status' name='status' onclick='window.toggleStatus(${i})' type='checkbox' `;
          if (element) html += 'checked';
          html += ' />';
          tableData.innerHTML = html;
        }

        tableRow.appendChild(tableData);
      });
      const tableData1 = document.createElement('td');

      tableData1.innerHTML = `<a href='#' class='todo_link' onclick='window.formTodo(${i})'><i class="far fa-edit"></i></a>`;

      tableRow.appendChild(tableData1);

      const tableData = document.createElement('td');

      tableData.innerHTML = `<a href='#' class='todo_link' onclick='window.deleteTodo(${i})'><i class='far fa-trash-alt'></i></a>`;

      tableRow.appendChild(tableData);

      table.appendChild(tableRow);
    });

    listTodos.appendChild(table);
  }

  return listTodos;
};

export default listTodos;
