import React from 'react'

const YourSpace = () => {
    return (
        <div className="yourspace anoth">
            <div className="container">
                <div className="titl">
                    <h2>Tus Espacios</h2>
                    <p className="par"> A través del siguiente vídeo, URBAN 9/60 te da la bienvenida a sus
                        cómodos y bien distribuidos apartaestudios, con espacios indispensables para vivir y
                        disfrutar de un hogar con todo lo necesario.</p>
                </div>
                <div className="container" id="content-video">
                    <iframe className="video-link" width="560" height="315"
                        src="https://www.youtube.com/embed/VVX5HWEElys" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default YourSpace;