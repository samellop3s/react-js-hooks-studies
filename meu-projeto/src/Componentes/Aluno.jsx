import { useEffect, useState } from "react";


function Aluno (props) {

    const [aluno, setAluno] = useState(false);

    useEffect(() => {
        console.log("O status do aluno mudou!");
    }, [aluno]);

    function toggleAviso() {
        setAluno(!aluno);
    }

    return (
        <div cassName="card-aluno">
            <h2>Informações do aluno:</h2>
            <p><strong>Nome:</strong>{props.nome}</p>
            <p><strong>Curso:</strong>{props.curso}</p>
            <p><strong>Universidade:</strong>{props.universidade}</p>
            <p><strong>Horario:</strong>{props.horario}</p>
            <button onClick={toggleAviso}>
                {aluno ? `Status: ${props.aviso}` : "Mostrar Status"}
            </button>
        </div>
    );
}


export default Aluno;