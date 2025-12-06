import { useState } from "react";
import "../Style.css";

function Todo() {

    //"tarefas" vai guardar a lista de tarefas
    const [tarefas, setTarefas] = useState([]);

    //estado pra guardar o texto digitado
    const [texto, setTexto] = useState("");


    function adicionarTarefa() {

        if (texto.trim() === "") {
            alert("Por favor, digite uma tarefa válida.");
            return;
        }  // evita adicionar tarefas vazias
        setTarefas([...tarefas, texto]); //adiciona a nova tarefa na lista
        setTexto(""); //limpa o campo de input
    }
    return (
        <div className="container-todo">
            <h2>Lista de tarefas</h2>

            <input
                type="text"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Digite uma nova tarefa"
            />

            <button onClick={adicionarTarefa}>Adicionar</button>

            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;