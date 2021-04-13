const jobList = document.getElementById('lista-tarefas');
const taskNameInput = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');
const btnDeleteTasks = document.getElementById('apaga-tudo');
const btnDeleteCompletedTasks = document.getElementById('remover-finalizados');

function changeBackgroundColorTask(event) {
  for (let tarefa = 0; tarefa < jobList.children.length; tarefa += 1) {
    jobList.children[tarefa].setAttribute('id', '');
  }
  event.target.setAttribute('id', 'selectedTask');
}

// Faz o risco em tarefas completas, ou tira.
function completedTask(event) {
  event.target.classList.toggle('completed');
}

// Adiciona a task ao clicar no botao.
function addTask() {
  const taskToBeAdded = document.createElement('li');
  taskToBeAdded.innerText = taskNameInput.value;
  taskToBeAdded.setAttribute('class', 'task');
  taskToBeAdded.addEventListener('click', changeBackgroundColorTask);
  taskToBeAdded.addEventListener('dblclick', completedTask);
  jobList.appendChild(taskToBeAdded);

  taskNameInput.value = '';
}

btnCreateTask.addEventListener('click', addTask);

// Deleta todas as tarefas.
function deleteAllTasks() {
  while (jobList.children.length > 0) {
    jobList.children[0].remove();
  }
}

btnDeleteTasks.addEventListener('click', deleteAllTasks);

// Deleta tarefas completadas.
function deleteCompletedTasks() {
  for (let tarefa = 0; tarefa < jobList.children.length; tarefa += 1) {
    if (jobList.children[tarefa].classList[1] === 'completed') {
      jobList.children[tarefa].remove();
    }
  }
}

btnDeleteCompletedTasks.addEventListener('click', deleteCompletedTasks);