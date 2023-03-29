// Importando as bibliotecas React e ReactDOM
import React, { useState } from "react";
import ReactDOM from "react-dom";

// Criando o componente funcional TodoList
function TodoList() {
// Inicializando os estados tasks, newTask, editingTaskIndex e editedTask com useState
const [tasks, setTasks] = useState([]);
const [newTask, setNewTask] = useState("");
const [editingTaskIndex, setEditingTaskIndex] = useState(null);
const [editedTask, setEditedTask] = useState("");

// Função para atualizar o estado newTask com o valor do input
function handleNewTask(event) {
setNewTask(event.target.value);
}

// Função para adicionar uma nova tarefa na lista de tasks e limpar o input
function handleAddTask() {
setTasks([...tasks, newTask]);
setNewTask("");
}

// Função para atualizar os estados editingTaskIndex e editedTask quando o usuário clicar em Edit
function handleEditTask(index) {
setEditingTaskIndex(index);
setEditedTask(tasks[index]);
}

// Função para salvar a tarefa editada e limpar os estados de edição
function handleSaveTask(index) {
const newTasks = [...tasks];
newTasks[index] = editedTask;
setTasks(newTasks);
setEditingTaskIndex(null);
setEditedTask("");
}

// Função para cancelar a edição e limpar os estados de edição
function handleCancelEdit() {
setEditingTaskIndex(null);
setEditedTask("");
}

// Função para deletar uma tarefa da lista de tasks
function handleDeleteTask(index) {
const newTasks = [...tasks];
newTasks.splice(index, 1);
setTasks(newTasks);
}

// Renderização do componente
return (
<div>
<h1>ToDo List</h1>
{/* Input para adicionar nova tarefa, atualizado pelo estado newTask */}
<input type="text" value={newTask} onChange={handleNewTask} />
{/* Botão para adicionar nova tarefa, que chama a função handleAddTask */}
<button onClick={handleAddTask}>Add Task</button>
<ul>
{/* Mapeamento das tarefas da lista de tasks */}
{tasks.map((task, index) => (
<li key={index}>
{/* Condicional para exibir input de edição ou span com a tarefa */}
{editingTaskIndex === index ? (
<>
<input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
{/* Botão para salvar a tarefa editada, que chama a função handleSaveTask */}
<button onClick={() => handleSaveTask(index)}>Save</button>
{/* Botão para cancelar a edição, que chama a função handleCancelEdit */}
<button onClick={handleCancelEdit}>Cancel</button>
</>
) : (
<>
<span>{task}</span>
{/* Botão para editar a tarefa, que chama a função handleEditTask */}
<button onClick={() => handleEditTask(index)}>Edit</button>
{/* Botão para deletar a tarefa, que chama a função handleDeleteTask */}
<button onClick={() => handleDeleteTask(index)}>Delete</button>
</>
)}
</li>
))}
</ul>
</div>
);
}

/* Exportando o componente TodoList */
export default



 TodoList;
