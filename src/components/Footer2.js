import React, { useState, useEffect } from 'react'
import { Formik, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import withLocation from './withLocation';

const REQUIRED_FIELD = "Este campo es requerido";
const EMAIL_FIELD = "Este campo debe ser un email";

const schema = Yup.object().shape({
    cedula: Yup
        .string()
        .required(REQUIRED_FIELD),
    firstname: Yup
        .string()
        .required(REQUIRED_FIELD),
    phone: Yup
        .string()
        .required(REQUIRED_FIELD),
    email: Yup
        .string()
        .email(EMAIL_FIELD)
        .required(REQUIRED_FIELD)
  });

const Footer2 = ({ search }) => {
    const initialValues = {cedula: "", firstname: "", phone: "", email: ""};
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (obj, resetForm) => {
        setIsLoading(true);
        let fields = Object.keys(obj).map(key => ({name: key, value: obj[key]}));

        if(search.utm_source)
            fields.push({name: "source", value: search.utm_source});
        if(search.utm_campaign)
            fields.push({name: "campaign", value: search.utm_campaign});
        
        const data = {
            fields, 
            context: {
                pageUri: "https://urban960.com/",
                pageName: "Lanzamiento",
            },
            skipValidation: false
        }
        
        axios.post('https://api.hsforms.com/submissions/v3/integration/submit/5853267/baff055d-b1bf-4740-bd1b-3a3244044556', data)
          .then(function (response) {
            
            alert('¡Gracias por contactarnos! \n Pronto estaremos en contacto.');
            resetForm(initialValues)
            setIsLoading(false);
          })
          .catch(function (error) {
            setIsLoading(false);
          });
    }

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
                            <Formik
                                validationSchema={schema}
                                enableReinitialize={true}
                                initialValues={initialValues}
                                onSubmit={null}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        isValid,
                                        resetForm
                                    }) => (
                                        <form 
                                            className="contact-hub">
                                            <div className="mb-4 pb-3">
                                                <Field 
                                                    type="text"
                                                    name="cedula"
                                                    placeholder="Cédula"
                                                    className="form-control" />
                                                {errors.cedula && touched.cedula && (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.cedula}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="mb-4 pb-3">
                                                <Field 
                                                    type="text"
                                                    name="firstname"
                                                    placeholder="Nombre"
                                                    className="form-control" />
                                                {errors.firstname && touched.firstname && (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.firstname}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="mb-4 pb-3">
                                                <Field 
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Teléfono"
                                                    className="form-control" />
                                                {errors.phone && touched.phone && (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.phone}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="mb-4 pb-3">
                                                <Field 
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    className="form-control" />
                                                {errors.email && touched.email && (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.email}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="form-group text-center frm-send">
                                                <button 
                                                    disabled={!isValid}
                                                    onClick={() => handleSubmit(values, resetForm)}
                                                    type="button" 
                                                    style={{
                                                        opacity: !isValid ? ".7" : "1"
                                                    }}
                                                    className="botn orange">
                                                    {
                                                        isLoading ? (
                                                            <>Enviando solicitud...</>
                                                        ) : (
                                                            <>¡QUIERO SABER MÁS!</>
                                                        )
                                                    }
                                                </button>
                                            </div>
                                        </form>
                                    )}
                            </Formik>
                            {/* <form className="contact-hub">
                                <input type="text" className="form-control" placeholder="Cédula" name="cedula" required />
                                <input type="text" className="form-control" placeholder="Nombre" name="name" required />

                                <input type="text" className="form-control" placeholder="Teléfono" name="phone" required />
                                <input type="email" className="form-control" placeholder="Email" name="email" required />
                                <div className="form-group text-center frm-send">
                                    <button type="submit" className=" botn orange">¡QUIERO SABER MÁS!</button>
                                </div>

                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withLocation(Footer2);