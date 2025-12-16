import Home from "./Componentes/Home/Home.jsx";
import Produto from "./Componentes/Produto/Produto.jsx";
import Mensagem from "./Componentes/Mensagem/Mensagem.jsx";
import Contador from "./Componentes/Contador/Contador.jsx";
import Agenda from "./Componentes/Agenda/Agenda.jsx";
import Tema from "./Componentes/Tema/Tema.jsx";
import Usuario from "./Componentes/Usuario/Usuario.jsx";
import Todo from "./Componentes/Todo/Todo.jsx";
import Estoque from "./Componentes/Estoque/Estoque.jsx";
import Banco from "./Componentes/Banco/Banco.jsx";
import Status from "./Componentes/Status/Status.jsx";
import Timer from "./Componentes/Timer/Timer.jsx";
import Aviso from "./Componentes/Aviso/Aviso.jsx";
import Lembrete from "./Componentes/Lembrete/Lembrete.jsx";
import Aluno from "./Componentes/Aluno/Aluno.jsx";

function App() {
    return (
        <>
            <Home/>
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

            <Usuario
                nome="Maria Silva"
                idade={28}
                profissao="Desenvolvedora Front-end"
                descricao="Maria é uma desenvolvedora apaixonada por criar interfaces de usuário intuitivas e responsivas."
            />

            <Todo/>

            <Estoque
                title="LOJIKA"
                estoque="250"
            />

            <Banco 
                saldo={5000}
            />

            <Status/>

            <Timer/>

            <Aviso
                aviso="Este é um aviso importante!"
            />

            <Lembrete
                lembrete="Não esquecer da reunião amanhã às 10h."
            />

            <Aluno
                nome="Carlos"
                curso="Engenharia de Software"
                universidade="Universidade Federal"
                horario="Matutino"
                aviso="aprovado"
            />
        </>
    );
}

export default App;