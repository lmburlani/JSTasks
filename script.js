const prompt = require('prompt-sync')();

// Cria uma lista de tarefas vazia
let taskList = [];

// Função para adicionar uma nova tarefa à lista
function addTask() {
  const task = prompt("Digite a nova tarefa: ");
  // Adiciona a nova tarefa à lista
  taskList.push(task);

  // Exibe a lista atualizada de tarefas
  displayTasks();

  // Pergunta ao usuário se deseja adicionar outra tarefa
  const answer = prompt("Deseja adicionar outra tarefa? (S/N) ");
  if (answer.toUpperCase() === "S") {
    addTask();
  } else {
    console.clear();
  }
}

// Função para remover uma tarefa da lista
function removeTask() {
  const index = prompt("Digite o índice da tarefa que deseja remover: ");
  // Remove a tarefa com base no índice fornecido
  taskList.splice(index, 1);

  // Exibe a lista atualizada de tarefas
  displayTasks();

  // Pergunta ao usuário se deseja remover outra tarefa
  const answer = prompt("Deseja remover outra tarefa? (S/N) ");
  if (answer.toUpperCase() === "S") {
    removeTask();
  } else {
    console.clear();
  }
}

// Função para exibir a lista de tarefas atual
function displayTasks() {
  // Limpa o console
  console.clear();

  // Exibe a lista de tarefas atual
  console.log("Lista de Tarefas:");
  taskList.forEach((task, index) => console.log(`${index}: ${task}`));
}

// Exibe a lista de tarefas inicial
displayTasks();

// Pergunta ao usuário se deseja adicionar ou remover uma tarefa
const answer = prompt("Deseja adicionar ou remover uma tarefa? (A/R/N) ");
if (answer.toUpperCase() === "A") {
  addTask();
} else if (answer.toUpperCase() === "R") {
  removeTask();
} else {
  console.clear();
}
