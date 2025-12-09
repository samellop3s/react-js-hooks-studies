import { useState } from "react";

function Aviso(props) {
    const [aviso, setAviso] = useState(false);

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