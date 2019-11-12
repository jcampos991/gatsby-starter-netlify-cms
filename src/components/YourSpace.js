import React from 'react'

const YourSpace = ({
    title,
    description,
    video
}) => {
    return (
        <div className="yourspace anoth">
            <div className="container">
                <div className="titl">
                    <h2>{title}</h2>
                    <p className="par">{description}</p>
                </div>
                <div className="container" id="content-video">
                    <iframe className="video-link" width={video.width} height={video.height}
                        src={video.urlVideo} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default YourSpace;