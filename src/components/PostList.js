import React from 'react'

const PostList = () => {
    return (
        <div className="interes anoth">
            <div className="container">
                <div className="titl">
                    <h2>Conoce aún más...</h2>
                </div>
                <div className="row">
                    <div className="item col-md-4">
                        <a href="./por-que-vivir-en-chapinero/">
                            <img src="/img/chapineroMin.png" alt="Proyecto urban 960 Chapinero" />
                            <h4>¿Por qué vivir en Chapinero?</h4>
                        </a>
                    </div>
                    <div className="item col-md-4">
                        <a href="./creditos-de-vivienda-bogota/">
                            <img src="/img/credito_bogota_min.png" alt="Crédito de Vivienta Bogota" />
                            <h4>Créditos de vivienda: Cómo Comprar un apartamento en Bogotá</h4>
                        </a>
                    </div>
                    {/* <div className="item col-md-4">
                        <a href="">
                            <img src="/img/rectangle-copy-10.png" alt="...">
                            <h4>Bogotá, más que un código postal</h4>
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default PostList;