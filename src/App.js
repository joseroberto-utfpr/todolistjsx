// Importando as bibliotecas React e ReactDOM
import React, { useState } from "react";
//import ReactDOM from "react-dom"; - não utilizado ainda.

// Criando o componente funcional TodoList
function TodoList() {
// Inicializando os estados tasks, newTask, editingTaskIndex e editedTask com useState
const [tasks, setTasks] = useState([]); //Essa linha de código utiliza o hook
                                        // useState do React para criar um estado
                                        // tasks e uma função setTasks para atualizar
                                        // esse estado. O valor inicial desse estado
                                        // é um array vazio []. Esse estado será
                                        // utilizado para armazenar as tarefas da 
                                        // lista de ToDo. Sempre que a lista de 
                                        // tarefas é atualizada, a função setTasks
                                        // é chamada para atualizar o valor do estado.
const [newTask, setNewTask] = useState("");
const [editingTaskIndex, setEditingTaskIndex] = useState(null);
const [editedTask, setEditedTask] = useState("");

// Função para atualizar o estado newTask com o valor do input
/* Esta função é responsável por lidar com a mudança de valor do
input onde o usuário pode adicionar novas tarefas. 
Quando um evento de mudança é disparado no input, a 
função é executada com o parâmetro "event", que contém 
informações sobre o evento ocorrido. Em seguida, o valor do 
input é obtido através da propriedade "value" do objeto "event.target", 
que representa o elemento que desencadeou o evento. Esse valor é então 
atualizado no estado "newTask" usando a função "setNewTask", que atualiza 
o valor do estado e faz com que o componente seja re-renderizado.
*/
function handleNewTask(event) {
setNewTask(event.target.value);
}

// Função para adicionar uma nova tarefa na lista de tasks e limpar o input
/*
A função handleAddTask é responsável por adicionar uma nova tarefa na
 lista de tarefas. Ela faz isso utilizando a função setTasks, 
 que atualiza o estado tasks com um novo array que é uma 
 cópia do array anterior ([...tasks]) com a nova tarefa 
 adicionada no final (newTask). Em seguida, a 
 função setNewTask é chamada para limpar o campo de 
 entrada de nova tarefa, definindo o valor de newTask para uma string vazia.
*/
function handleAddTask() {
setTasks([...tasks, newTask]);
setNewTask("");
}

// Função para atualizar os estados editingTaskIndex e editedTask quando o usuário clicar em Edit
/*
A função handleEditTask(index) é chamada quando o usuário 
clica no botão "Editar" para editar uma tarefa existente na lista. 
Ela recebe o índice da tarefa que deve ser editada como argumento.
Dentro da função, setEditingTaskIndex(index) atualiza o estado 
editingTaskIndex com o valor do índice recebido, que indica 
qual tarefa está sendo editada no momento.
Em seguida, setEditedTask(tasks[index]) atualiza o estado 
editedTask com o valor da tarefa que está sendo editada, 
para que o campo de edição na interface possa exibir o conteúdo atual da tarefa.
*/
function handleEditTask(index) {
setEditingTaskIndex(index);
setEditedTask(tasks[index]);
}

// Função para salvar a tarefa editada e limpar os estados de edição
/*
A função handleSaveTask é responsável por atualizar uma tarefa 
editada na lista de tarefas. Ela recebe um índice como argumento, 
que indica qual tarefa deve ser atualizada.
Na primeira linha da função, criamos uma cópia do array de tarefas 
atual utilizando o spread operator, atribuindo-o à constante newTasks. 
Em seguida, atualizamos o elemento no índice correspondente na cópia 
do array com a tarefa editada, que foi armazenada no estado editedTask.
Na terceira linha, chamamos a função setTasks para atualizar o 
estado tasks com o novo array de tarefas. Na quarta e quinta linha, 
chamamos as funções setEditingTaskIndex e setEditedTask para limpar 
os estados editingTaskIndex e editedTask, respectivamente.
*/
function handleSaveTask(index) {
const newTasks = [...tasks];
newTasks[index] = editedTask;
setTasks(newTasks);
setEditingTaskIndex(null);
setEditedTask("");
}

// Função para cancelar a edição e limpar os estados de edição
/*
Esta função é responsável por cancelar a edição de uma tarefa. 
Ela redefine o índice da tarefa sendo editada para null e redefine 
o valor da tarefa editada para uma string vazia, para que as alterações não sejam salvas.
*/
function handleCancelEdit() {
setEditingTaskIndex(null);
setEditedTask("");
}

// Função para deletar uma tarefa da lista de tasks
/*
A função handleDeleteTask é responsável por remover uma tarefa da lista de tarefas.
A variável newTasks é criada a partir de uma cópia da lista de tarefas atual, 
utilizando o operador spread. Em seguida, a função splice é utilizada 
para remover a tarefa da lista, usando o índice da tarefa a ser removida 
e o número 1, indicando que apenas uma tarefa deve ser removida.
Por fim, a função setTasks é chamada com a nova lista de tarefas, 
para atualizar o estado do componente.
*/
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
{/*
Esta linha de código cria um input de texto que permite ao usuário editar 
uma tarefa existente na lista. O valor inicial do input é definido como 
editedTask, que é um estado que representa a tarefa atualmente em edição. 
Quando o usuário altera o valor do input, a função onChange é acionada e 
chama uma função que atualiza o estado editedTask com o valor do input que 
foi alterado. Dessa forma, quando o usuário salva as alterações, 
 tarefa atualizada é salva em editedTask e a lista de tarefas é atualizada com a nova tarefa.
*/}


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
export default TodoList;
