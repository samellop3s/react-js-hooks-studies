import { useState } from "react";

function Estoque(props) {

    //este const sempre ira guardar o estado atual!!!
    const [estoque, setEstoque] = useState(props.estoque);

    //função que ira decrementa o estoque
    function Comprar() {
        if (estoque > 0) {
            setEstoque(estoque - 1); // diminui o estoque em 1
        }
    }
    return (
        <div className="card-estoque">
            <h2>{props.title}</h2>
            <p><strong>Estoque:</strong>{estoque}</p>

            <button
                onClick={Comprar}
                disabled={estoque === 0}
            >
                {estoque > 0 ? "Comprar" : "Sem estoque"}
            </button>
        </div>
    );
}


export default Estoque;