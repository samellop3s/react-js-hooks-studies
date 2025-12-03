import Produto from "./Componentes/Produto.jsx";
import Mensagem from "./Componentes/Mensagem.jsx";
import Contador from "./Componentes/Contador.jsx";
import Agenda from "./Componentes/Agenda.jsx";
import Tema from "./Componentes/Tema.jsx";

function App() {
    return (
        <>
            <Produto
                nome="Smartphone XYZ"
                preco={1999.99}
                descricao="Um smartphone moderno com todas as funcionalidades que você precisa."
            />


            <Mensagem
                usuario="João"
                texto="Estou descansando, mais tarde eu vou "
                hora="10:30 AM"
            />

            <Contador />

            <Agenda
                titulo="Reunião de Projeto"
                data="2025-12-05"
                hora="14:00"
                local="Sala de Conferências 3"
                descricao="Discutir o progresso do projeto e próximos passos."
            />
            <Tema
                texto="Bem-vindo ao meu aplicativo React!"
            />
        </>
    );
}

export default App;