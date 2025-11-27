import "../Style.css";
import { useState } from "react";

function Produto(props) {

    const [mostrar, setMostrar] = useState(true);

    return (
        <div className="container-produto">
            <div className="informacoes-produto">
                <h2>{props.nome}</h2>
                <p>Preço: R$ {props.preco}</p>
            </div>
            <div className="descricao-produto">
                <button onClick={() => setMostrar(!mostrar)}>
                    {mostrar ? 'Esconder detalhes' : 'Mostrar detalhes'}
                </button>

                {mostrar && <p>{props.descricao}</p>}
            </div>
        </div>
    );
}

export default Produto;