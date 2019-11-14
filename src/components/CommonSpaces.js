import React, { useEffect, useState } from 'react'
const InfiniteCarousel = typeof window !== `undefined` ? require("react-leaf-carousel") : null

const CommonSpaces = ({
    title,
    description,
    gallery
}) => {
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
            {
                gallery.photos.map((photo, index) => (
                    <div
                        key={`galkey${index}`} 
                        className="item">
                        <div className="cover">
                            <img 
                                src={
                                    typeof(photo.image) === "object" 
                                        ? photo.image.childImageSharp.fluid.src : photo.image
                                } 
                                alt={photo.alt} />
                            <h4>{photo.title}</h4>
                        </div>
                    </div>
                ))
            }
        </InfiniteCarousel.default>
        setCarousel(component);
    }, [InfiniteCarousel]);

    return(
        <div className="yourspace anoth">
            <div className="container">
                <div className="titl">
                    <h2>{title}</h2>
                    <p className="par">{description}</p>
                </div>
                <div className="spaces">
                    {carousel}
                </div>
            </div>
        </div> 
    )
}

export default CommonSpaces;