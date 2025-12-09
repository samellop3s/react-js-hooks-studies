import { useEffect, useState } from "react";

function Timer () {

    //guarda o numero atual de segundos
    const [segundos, setSegundos] = useState(0);

    //guarda se o timer esta rodando ou nao
    const [rodando, setRodando] = useState(false);

    /*
        o useEffect observa a variavel "rodando".
        Sempre que "rodando" mudar, o useEffect sera executado.
    */

    useEffect(() => {
        let intervalo = null;

        if (rodando) {
            intervalo = setInterval(() => {
                //atualiza os segundos
                setSegundos((s) => s + 1 );
            }, 1000)
        }

        //se rodando for false -> limpar o intervalo
        else {
            clearInterval(intervalo);
        }

        /*
            !!ATENÇÃO!!

            O return dentro do useEffect é executado quando: 

            -O componente desmonta (fecha a pagina)
            - Ou quando o 'rodando' mudar novamente.

            Aqui limpamos o intervalo para evitar bugs.
        
        */

        return () => clearInterval(intervalo);
    }, [rodando]); // <- o efeito depende de "rodando"
    
    return (
        <div>
            <h2><strong>Timer:</strong> {segundos}</h2>

            <button onClick={() => setRodando(true)}>Iniciar</button>
            <button onClick={() => setRodando(false)}>Pausar</button>
            <button onClick={() => setSegundos(0)}>Resetar</button>
        </div>
    )
}

export default Timer;