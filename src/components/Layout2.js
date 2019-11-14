import React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from './SiteMetadata'
import Footer2 from './Footer2'
import Header from './Header'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./Layout2.css";

const TemplateWrapper2 = ({ children }) => {
    const { title, description } = useSiteMetadata()

    return (
        <div>
        <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
        <Header />
        <div>{children}</div>
        <Footer2 />
        </div>
    )
}

export default TemplateWrapper2
