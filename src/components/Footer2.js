import React from 'react'

const Footer2 = () => {
    return(
        <div className="footer anoth">
            <div className="container" id="form-urban">
                <div className="row">
                    <div className="f-logo col-md-6">
                        <img className="urban-960" src="/img/bitmap-copy.png" alt="..." />
                        <div className="area">
                            <img src="/img/bitmap_3.png" alt="..." />
                        </div>
                    </div>
                    <div className="frmo col-md-6" id="form-info">
                        <div className="box">
                            <div className="titl">
                                <h2>SOLICITA MÁS INFORMACIÓN</h2>
                                {/* <p class="par">Regístrate y recibe tu invitación para el gran lanzamiento
                                    ¡Obtén los mejores precios!</p> */}
                            </div>
                            <form className="contact-hub">
                                <input type="text" className="form-control" placeholder="Cédula" name="cc" required />
                                <input type="text" className="form-control" placeholder="Nombre" name="name" required />

                                <input type="text" className="form-control" placeholder="Teléfono" name="phone" required />
                                <input type="email" className="form-control" placeholder="Email" name="email" required />
                                <div className="form-group text-center frm-send">
                                    <button type="submit" className=" botn orange">¡QUIERO SABER MÁS!</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer2;