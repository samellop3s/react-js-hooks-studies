import Produto from "./Componentes/Produto.jsx";
import Mensagem from "./Componentes/Mensagem.jsx";

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
                texto="Estou desacansando, mais tarde eu vou "
                hora="10:30 AM"
            />
        </>
    );
}

export default App;