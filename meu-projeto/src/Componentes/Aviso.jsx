import { useState } from "react";

function Aviso(props) {

    // Estado para controlar a visibilidade do aviso
    const [aviso, setAviso] = useState(false);

    // Função para alternar o estado do aviso
    function toggleAviso() {
        setAviso(!aviso);
    }

    return (
        <div>
            <h2>Aviso</h2>
            <button onClick={toggleAviso}>
                {aviso ? "Esconder Aviso" : "Mostrar Aviso"}
            </button>

            {aviso && <p>{props.aviso}</p>}
        </div>
    )
}

export default Aviso;