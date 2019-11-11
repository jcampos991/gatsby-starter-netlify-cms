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

const TemplateWrapper2 = ({ children }) => {
    const { title, description } = useSiteMetadata()

    return (
        <div>
        <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            {/* <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="logo col-md-4">
                            <a href="#"><img src="..//img/bitmap-copy.png" alt="..."/>jhkhjh</a>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}img/apple-touch-icon.png`}
            />
            <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-32x32.png`}
            sizes="32x32"
            />
            <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-16x16.png`}
            sizes="16x16"
            />

            <link
            rel="mask-icon"
            href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
            color="#ff4400"
            />
            <meta name="theme-color" content="#fff" />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content="/" />
            <meta
            property="og:image"
            content={`${withPrefix('/')}img/og-image.jpg`}
            /> */}
        </Helmet>
        {/* <Navbar />     */}
        <Header />
        <div>{children}</div>
        <Footer2 />
        </div>
    )
}

export default TemplateWrapper2
