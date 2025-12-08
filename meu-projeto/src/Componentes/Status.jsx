import { useState } from "react";

function Status() {
    const [status, setStatus] = useState(false);

    function toggleStatus() {
        setStatus(!status);
    }
    return (
        <div>
            <h2>Status do Usuário: {status ? "online🟢" : "offline🔴"}</h2>
            <button onClick={toggleStatus}>
                {status ? "Desconectar" : "Conectar"  }
            </button>
           
        </div>
    );
}

export default Status;