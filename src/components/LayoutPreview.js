import React from 'react'
// import { window, document } from 'browser-monads';
import { Helmet } from 'react-helmet'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
// import { withPrefix } from 'gatsby'
import Footer2 from './Footer2'
import Header from './Header'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Popper from 'popper.js';
// import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import "./Layout2.css";

const TemplatePreviewWrapper = ({ children }) => {
    return (
        <div>
        <Helmet>
            <html lang="en" />
            <title></title>
            <meta name="description" content="" />
        </Helmet>
        <Header />
        <div>{children}</div>
        <Footer2 />
        </div>
    )
}

export default TemplatePreviewWrapper
