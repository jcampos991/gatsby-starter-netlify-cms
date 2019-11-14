import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script dangerouslySetInnerHTML={{
    __html:`!function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
        n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '437263417069140');
    fbq('track', 'PageView');`}} />
    
    <noscript dangerouslySetInnerHTML={{
        __html:`<img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=437263417069140&ev=PageView&noscript=1" />`}} />

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140882448-1"></script>
    <script dangerouslySetInnerHTML={{
        __html:`window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-140882448-1');`}} />
    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/5853267.js"></script>

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@urban960" />
    <meta name="twitter:creator" content="@urban960" />
    <meta property="og:url" content="http://urban960.com" />
    <meta property="og:title" content="URBAN 960 Apartamentos desde 145 Millones en Chapinero" />
    <meta property="og:description"
        content="Urban 9/60 un proyecto innovador de vivienda ubicado en el exclusivo sector de Chapinero. con modernas y amplias zonas comunes, coworking, gimnasio, piscina, spa ,zona de mascotas, entre otros benéficos." />
    <meta property="og:image" content="https://urban960.com/images/bitmap-copy.png" />
    
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}