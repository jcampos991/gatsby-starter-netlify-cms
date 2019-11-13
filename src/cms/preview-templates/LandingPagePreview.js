import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'
import { LandingPageTemplate } from '../../templates/landing-page';

const LandingPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()
    console.log('DATA :', data);
    // console.log("LANDING PREVIEW: ", entry.getIn(['data', 'title1', 'image1']).toJS()) 
    return(
        <LandingPageTemplate 
            image1={data.image1}
            alt={data.alt}
            title1={data.title1}
            content1={data.content1.body}
            ubication={data.ubication}
            feature1={data.feature1}
            feature2={data.feature2}
            feature3={data.feature3}
            gallery={data.gallery}
            video={data.video}
            previewBlog={data.previewBlog} 
        />
    )
}

export default LandingPagePreview
