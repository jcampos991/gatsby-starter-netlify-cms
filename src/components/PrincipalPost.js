import React from 'react'
import showdown from 'showdown'

const converter = new showdown.Converter()

const PrincipalPost = ({
    post
}) => {
    return (
        <div className="conoc anoth">
            <div className="container">
                <div className="row">
                    <div className="cover col-md-12">
                        <img src={
                            typeof(post.image) === "object" 
                                ? post.image.childImageSharp.fluid.src : post.image
                            } 
                            alt="..." />
                        <h4>{post.title}</h4>
                    </div>
                    <div className="col-md-6" id="article">
                    <div
                        className="text-justify" dangerouslySetInnerHTML={{ __html: converter.makeHtml(post.column1) }} />
                        {/* <p>Chapinero se caracteriza por ser una de las zonas más comerciales y con mejor ambiente
                            nocturno de Bogotá.
                        </p>
                        <p>Actualmente, y según el último censo demográfico, cuenta con 125.750 habitantes, y se
                            encuentra dividido en tres sectores urbanos: Chapinero, El Lago y Chicó. A su vez, Chapinero
                            se divide en Alto y Central. </p>
                        <p>
                            Por otra parte, casi el 50 % de sus habitantes son de un alto nivel económico, lo que
                            convierte a Chapinero en una zona muy llamativa llena de grandes beneficios mercantiles, de
                            transporte, salud, vivienda y educación.
                        </p> */}

                    </div>
                    <div className="col-md-6">
                        <ul className="list">
                            {
                                post.column2.map((value, index) => (
                                    <li key={`item-list${index}`}>{value.item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrincipalPost;