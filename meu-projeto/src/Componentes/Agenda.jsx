import { useState } from "react";
import { useEffect } from "react";

function Agenda (props) {

    //declara o 'mostrarDetalhes' e a funcao 'setMostrarDetalhes' para atualizar ele
    //o useState (false) esta sendo usado para a funcao iniciar com o valor "escondido")
    const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

    //useEffect observa as dependências [props.data].
    //Sempre que 'data' mudar, este efeito roda e registra uma mensagem no console.
    useEffect(() => {
        console.log(`a data foi alterada "${props.data}".`);
    }, [props.data]);

    return (
        <div className="container-agenda">
            <h2>{props.titulo}</h2>
            <p><strong>Data:</strong> {props.data}</p>
            <p><strong>Hora:</strong> {props.hora}</p>
            <p><strong>Local:</strong> {props.local}</p>
            {/*ao clicar no botao, sera chamada o "setMostrarDetalhes" para atualizar o valor de 'mostrarDetalhes'
            e fara uma agendamento de atualização de estado e faz o componente re-renderizar*/}  
            <button onClick={() => setMostrarDetalhes(!mostrarDetalhes)}>

                {/* usa o valor do estado para decidir o texto do botao*/}
                {mostrarDetalhes ? 'Esconder anotação' : 'Mostrar anotação'}
            </button>

            {/* renderiza a descricao condicionalmente com base no valor de 'mostrarDetalhes' */}
            {mostrarDetalhes && <p>{props.descricao}</p>}
        </div>
    );
}


export default Agenda;