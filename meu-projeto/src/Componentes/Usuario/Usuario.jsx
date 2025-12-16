import { useState } from "react";

function Usuario (props) {

    const [mostrarMais, setMostrarMais] = useState (false);

    function toggleUsuario () {
        setMostrarMais (!mostrarMais);
    }

    return (
        <div className="container-usuario">
            <h2>Usuário: {props.nome}</h2>
            <p>Idade: {props.idade} anos</p>
            <p>profissao: {props.profissao}</p>
            <button onClick={toggleUsuario}>
                {mostrarMais ? "Mostrar Menos" : "Mostrar Mais"}
            </button>

            {mostrarMais && <p>{props.descricao}</p>}
        </div>
    );
}

export default Usuario;