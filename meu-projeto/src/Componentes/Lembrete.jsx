import { useState } from 'react';

function Lembrete(props) {

    const [lembrete, setLembrete] = useState(false);

    return (
        <div>
            <div className="container-lembrete">
                <h2>Lembrete</h2>
                <button onClick={() => setLembrete(!lembrete)}>
                    {lembrete ? "Esconder Lembrete" : "Mostrar Lembrete"}
                </button>

                {lembrete && <p>{props.lembrete}</p>}
            </div>
        </div>
    );
}

export default Lembrete;