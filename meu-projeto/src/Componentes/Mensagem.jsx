import "../Style.css";
import { useEffect } from "react";

function Mensagem(props) {

    // Recado sobre Hooks:
    // useEffect observa as dependências [props.usuario].
    // Sempre que 'usuario' mudar, este efeito roda e registra uma mensagem no console.
    // UseEffect é usado para rodar efeitos colaterais (logs, chamadas API, timers) sincronizados com props/estado.
    useEffect(() => {
        console.log(`Mensagem de ${props.usuario} atualizada.`);
    }, [props.usuario]);

    return (
        <div className="container-mensagem">
            <div className="card-mensagem">
                <strong>{props.usuario}</strong> <em>{props.hora}</em>
                <p>{props.texto}</p>
            </div>
        </div>
    );
}

export default Mensagem;