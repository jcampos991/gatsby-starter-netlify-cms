import React, { useEffect, useState } from 'react'
// import InfiniteCarousel from 'react-leaf-carousel';
// const module = typeof window !== `undefined` ? require("module") : null
const InfiniteCarousel = typeof window !== `undefined` ? require("react-leaf-carousel") : null

const CommonSpaces = () => {
    const [carousel, setCarousel] = useState(null);
    useEffect(() => {
        const component = <InfiniteCarousel.default
            breakpoints={[
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },{
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    },
                }
            ]}
            dots={true}
            showSides={true}
            sidesOpacity={.5}
            sideSize={.1}
            slidesToScroll={4}
            slidesToShow={4}
        >
            <div className="item">
                    <div className="cover">
                        <img src="/img/Cowork.png" alt="Coworking" />
                        <h4>Coworking</h4>
                    </div>
                    {/* <a href="#" data-toggle="modal" data-target=""></a> */}
                </div>
                <div className="item">
                    <div className="cover">
                        <img src="/img/BBQ.png" alt="Zona con BBQ Urban 960" />
                        <h4>Zona con BBQ</h4>
                    </div>
                    {/* <a href="#" data-toggle="modal" data-target=""></a> */}
                </div>
                <div className="item">
                    <div className="cover">
                        <img src="/img/Piscina.png" alt="Piscina" />
                        <h4>Piscina</h4>
                    </div>
                </div>
                <div className="item">
                    <div className="cover">
                        <img src="/img/Mascotas.png" alt="Patio de mascotas" />
                        <h4>Mascotas</h4>
                    </div>
                </div>
                <div className="item">
                    <div className="cover">
                        <img src="/img/SalaDeJuegos.png" alt="Sala de juegos" />
                        <h4>Sala de juegos</h4>
                    </div>
                    {/* <a href="#" data-toggle="modal" data-target=""></a> */}
                </div>
        </InfiniteCarousel.default>
        setCarousel(component);
    }, [InfiniteCarousel]);

    return(
        <div className="yourspace anoth">
            <div className="container">
                <div className="titl">
                    <h2>Espacios Comunes</h2>
                    <p className="par">Los espacios comunes complementan nuestro propósito de brindar calidad de vida y
                        satisfacción habitacional, por ello las zonas recreacionales hacen parte de nosotros.</p>
                </div>
                <div className="spaces">
                    {carousel}
                </div>
            </div>
        </div> 
    )
}

export default CommonSpaces;