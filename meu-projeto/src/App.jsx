import Produto from "./Componentes/Produto.jsx";

function App() {
    return (
        <Produto
            nome="Smartphone XYZ"
            preco={1999.99}
            descricao="Um smartphone moderno com todas as funcionalidades que você precisa."
        />
    );
}

export default App;