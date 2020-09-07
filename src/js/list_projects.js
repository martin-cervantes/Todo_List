const listProjects = (projects, current) => {
  const listProjects = document.getElementById('list_projects');

  listProjects.innerHTML = '';

  projects.forEach((project, i) => {
    const p = document.createElement('div');
    p.classList.add('project');

    if (current === i) p.classList.add('active');

    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('onclick', `window.changeTodosList(${i})`);
    a.classList.add('project_link');
    a.innerText = project.title;

    p.appendChild(a);
    p.innerHTML += `<a href='#' onclick='window.deleteProject(${i})' class='project_link'><i class='far fa-trash-alt'></i></a>`;

    listProjects.appendChild(p);
  });

  return listProjects;
};

export default listProjects;
