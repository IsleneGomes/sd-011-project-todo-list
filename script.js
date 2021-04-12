// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

// 6 - Ordene os itens da lista de tarefas por ordem de criação

const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

button.onclick = function criarTarefa() {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = input.value;
  novaTarefa.className = 'tarefa';
  novaTarefa.backgroundColor = 'white';
  listaTarefas.appendChild(novaTarefa);
  input.value = '';
};

// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)

// 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

listaTarefas.onclick = function selecionarTarefa(event) {
  const tarefaSelecionada = document.getElementsByClassName('selected');
  for (let index = 0; index < tarefaSelecionada.length; index += 1) {
    tarefaSelecionada[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
};

// 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item

// function completarTarefa(event) {
//   event.target.classList.add('completed');
// }

// function descompletarTarefa(event) {
//   event.target.classList.remove('completed');
// }

listaTarefas.ondblclick = function (event) {
  if (event.target.classList === 'completed') event.target.classList.remove('completed');
};

listaTarefas.ondblclick = function (event) {
  event.target.classList.add('completed');
};

// 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

const apagaTudo = document.querySelector('#apaga-tudo');
apagaTudo.onclick = function apagarLista() {
  while (listaTarefas.hasChildNodes) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
};
