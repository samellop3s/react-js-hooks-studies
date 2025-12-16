/*import { useState } from "react";*/

import "../../Style.css";

function Home(props) {
    return (
        <>
            <section className="container-home">
                <div className="card card-home">
                    <h1>{props.titulo}</h1>
                </div>
                <div className="card card-opcoes">
                    <h2>Navegue entre algumas sessões do site</h2>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </section>
        </>
    );
}

export default Home;