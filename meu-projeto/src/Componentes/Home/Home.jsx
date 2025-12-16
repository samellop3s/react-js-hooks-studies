/*import { useState } from "react";*/

import "../../Style.css";

function Home(props) {
    return (
        <>
            <section className="container-home">
                <div className="card-home">
                    <h1>{props.titulo}</h1>
                </div>
            </section>
        </>
    );
}

export default Home;