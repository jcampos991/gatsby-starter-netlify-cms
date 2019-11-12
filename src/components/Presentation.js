import React from 'react'

const Presentation = ({
    img,
    principalTitle,
    content
}) => {
    return(
        <div className="featured">
            <div className="container">
                <div className="row">
                    <div className="cover
                        col-md-6">
                        <img src={img} alt="..." />
                        <div className="price">
                            <p>APARTAMENTOS DESDE <span>$145.000.000</span></p>
                        </div>
                    </div>
                    <div className="detail col-md-6">
                        <div className="titl">
                            {/* <h2>Área cuadrada <br /> Construyendo toda una vida</h2> */}
                        <h2>{principalTitle}</h2>
                        </div>
                        <div className="text-justify" dangerouslySetInnerHTML={{ __html: content }} />
                        {/* <p className="text-justify">Bienvenido a Urban 9/60, un proyecto innovador de vivienda
                            ubicado en el exclusivo sector de Chapinero Central, que ofrece modernos apartaestudios
                            entre 17 y 18 metros cuadrados. </p>
                        <br />
                        <p className="text-justify"><span>Urban 9/60</span> cuenta con modernas y amplias zonas
                            comunes, coworking, gimnasio, piscina, spa, zona de mascotas, entre otros beneficios.
                        </p>
                        {"   "}
                        <p>
                            <span> ¡Tenemos apartamento modelo!</span> Puedes dirigirte a nuestra sala de ventas en
                            el parqueadero
                            de la Calle 60 #9-34 en Chapinero Central.
                        </p>
                        {"   "}

                        <p>¡Conoce tu nuevo hogar! </p> */}
                        <div className="charact">
                            <ul>
                                <li>
                                    <img src="/img/i-bath.png" alt="..." />
                                    <p className="p-home"><span></span> Baño</p>
                                </li>
                                <li>
                                    <img src="/img/i-bed.png" alt="..." />
                                    <p className="p-home"><span></span> Dormitorio</p>
                                </li>
                                <li>
                                    <img src="/img/kit.png" alt="..." />
                                    <p className="p-home"><span></span> Cocina</p>
                                </li>
                            </ul>
                        </div>
                        <div className="ubication">
                            <p>Calle 60 #9-34 Chapinero Central </p>
                            <span>Chapinero, Bogotá Colombia</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation;