const addTask = document.getElementById('criar-tarefa');
const clearTasks = document.getElementById('apaga-tudo');
const endedTasks = document.getElementById('remover-finalizados');
const salveTasks = document.getElementById('salvar-tarefas');

const upTask = document.getElementById('mover-cima');
const downTask = document.getElementById('mover-baixo');

const removeTask = document.getElementById('remover-selecionado');

const inputTask = document.getElementById('texto-tarefa');
const listTask = document.getElementById('lista-tarefas');

function loadTasks() {
  for (let i = 0; i < localStorage.length / 2; i += 1) {
    const li = document.createElement('li');
    const val = localStorage[`val_${i}`];
    let cls = localStorage[`cls_${i}`];
    cls = cls.split(' ').includes('completed');
    li.innerText = val;
    if (cls) {
      li.classList.add('completed');
    }
    listTask.appendChild(li);
  }
}

function addTaskEvent() {
  const li = document.createElement('li');
  li.innerText = inputTask.value;
  inputTask.value = '';
  listTask.appendChild(li);
}

function clearTasksEvent() {
  while (listTask.childElementCount) {
    listTask.firstChild.remove();
  }
}

function endedTasksEvent() {
  const enders = document.getElementsByClassName('completed');
  while (enders.length) {
    enders[0].remove();
  }
}

function salveTasksEvent() {
  localStorage.clear();
  for (let i = 0; i < listTask.children.length; i += 1) {
    const task = listTask.children[i];
    const val = `val_${i}`;
    const cls = `cls_${i}`;
    localStorage[val] = task.innerText;
    localStorage[cls] = task.className;
  }
}

function clickTaskEvent(e) {
  const task = e.target;
  const cls = task.classList;
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }

  if (!cls.contains('selected')) {
    cls.add('selected');
  } else {
    cls.remove('selected');
  }
}

function doubleTaskEvent(e) {
  const task = e.target;
  const cls = task.classList;

  if (!cls.contains('completed')) {
    cls.add('completed');
  } else {
    cls.remove('completed');
  }
}

function upTaskEvent() {
  const selected = document.querySelector('.selected');
  if (selected) {
    const up = selected.previousSibling;
    if (up.innerText !== undefined) {
      const selectedText = selected.innerText;
      const selectedClass = selected.className;
      const upText = up.innerText;
      const upClass = up.className;
      up.innerText = selectedText;
      up.className = selectedClass;
      selected.innerText = upText;
      selected.className = upClass;
    }
  }
}

function downTaskEvent() {
  const selected = document.querySelector('.selected');
  if (selected) {
    const down = selected.nextSibling;
    if (down) {
      const selectedText = selected.innerText;
      const selectedClass = selected.className;
      const downText = down.innerText;
      const downClass = down.className;
      down.innerText = selectedText;
      down.className = selectedClass;
      selected.innerText = downText;
      selected.className = downClass;
    }
  }
}

function removeTaskEvent() {
  const selected = document.querySelector('.selected');
  selected.remove();
}

loadTasks();

addTask.addEventListener('click', addTaskEvent);
clearTasks.addEventListener('click', clearTasksEvent);
endedTasks.addEventListener('click', endedTasksEvent);
salveTasks.addEventListener('click', salveTasksEvent);

upTask.addEventListener('click', upTaskEvent);
downTask.addEventListener('click', downTaskEvent);

removeTask.addEventListener('click', removeTaskEvent);

listTask.addEventListener('click', clickTaskEvent);
listTask.addEventListener('dblclick', doubleTaskEvent);
