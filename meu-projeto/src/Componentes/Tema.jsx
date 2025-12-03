import { useState } from "react";
import "../Style.css"; // confirma se o caminho está correto

function Tema(props) {
  // vai guardar o estado atual do tema (false = claro, true = escuro)
  const [escuro, setEscuro] = useState(false);

  // inverte o estado atual
  function toggleTema() {
    setEscuro(!escuro);
  }

  // classes CSS condicionais com base no estado
  const classContainer = escuro ? "container-tema escuro" : "container-tema claro";

  return (
    <div className={classContainer}>
      <p className="texto">{props.texto}</p>
      <button onClick={toggleTema}>
        {escuro ? "Tema Claro" : "Tema Escuro"}
      </button>
    </div>
  );
}

export default Tema;
