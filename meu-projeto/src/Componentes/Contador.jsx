import { useState } from "react";

function Contador() {

    //indicado que ira iniciar no 0
    const [numero, setNumero] = useState(0);

    //funcao para aumentar o valor em +1
    function aumentar() {
        setNumero(numero + 1);
    }

    //funcao para diminuir o valor em -1
    function diminuir() {
        setNumero(numero - 1);
    }


    return (
        <div className="container-contador">
            <h2>Contador: {numero}</h2>
            <div className="botao-contador">
                <button onClick={aumentar}>Aumentar</button>
                <button onClick={diminuir}>Diminuir</button>
            </div>
        </div>
    );
}

export default Contador;