import { useState } from "react";

function Banco(props) {

    const [saldo, setSaldo] = useState(props.saldo);

    function depositar() {
        setSaldo(saldo + 100); // aumenta o saldo em 100
    }

    function sacar() {
        if (saldo >= 50) {
            setSaldo(saldo - 50); // diminui o saldo em 50
        } else {
            alert("Saldo insuficiente para saque de R$50");
        }
    }

    return (
        <div>
            <h2>Banco Component</h2>
            <p><strong>Saldo:</strong> R$ {saldo}</p>

            <button onClick={depositar}>Depositar R$100</button>
            <button onClick={sacar}>Sacar R$50</button>
        </div>
    );
}

export default Banco;