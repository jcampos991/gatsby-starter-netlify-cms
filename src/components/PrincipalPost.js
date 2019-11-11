import React from 'react'

const PrincipalPost = () => {
    return (
        <div className="conoc anoth">
            <div className="container">
                <div className="row">
                    <div className="cover col-md-12">
                        <img src="/img/bitmap_2.png" alt="..." />
                        <h4>Conoce sobre Chapinero</h4>
                    </div>
                    <div className="col-md-6" id="article">
                        <p>Chapinero se caracteriza por ser una de las zonas más comerciales y con mejor ambiente
                            nocturno de Bogotá.
                        </p>
                        <p>Actualmente, y según el último censo demográfico, cuenta con 125.750 habitantes, y se
                            encuentra dividido en tres sectores urbanos: Chapinero, El Lago y Chicó. A su vez, Chapinero
                            se divide en Alto y Central. </p>
                        <p>
                            Por otra parte, casi el 50 % de sus habitantes son de un alto nivel económico, lo que
                            convierte a Chapinero en una zona muy llamativa llena de grandes beneficios mercantiles, de
                            transporte, salud, vivienda y educación.
                        </p>

                    </div>
                    <div className="col-md-6">
                        <ul className="list">
                            <li>Chapinero es atravesado por una de las principales vías de la ciudad, la carrera séptima. 
                            </li>
                            <li>Chapinero tiene la mejor zona nocturna de Bogotá, la zona T.</li>
                            <li>Chapinero cuenta con más de 35 sedes de Colegios y múltiples universidades.</li>
                            <li>Chapinero tiene dos de los mejores espacios naturales de la ciudad: Quebrada La Vieja y Quebrada Las Delicias </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrincipalPost;