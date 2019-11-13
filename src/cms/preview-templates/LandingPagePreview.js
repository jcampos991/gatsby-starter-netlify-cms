import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'
import { LandingPageTemplate } from '../../templates/landing-page';

const LandingPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()
    console.log('DATA :', data);
    // console.log("LANDING PREVIEW: ", entry.getIn(['data', 'title1', 'image1']).toJS()) 
    return(
        <div className="p-5 bg-primary">
            holla
        </div>
    )
    // <LandingPageTemplate 
    //     image1={post.frontmatter.image1.childImageSharp.fluid.src}
    //     alt={post.frontmatter.alt}
    //     title1={post.frontmatter.title1}
    //     content1={post.frontmatter.content1.body}
    //     ubication={post.frontmatter.ubication}
    //     feature1={post.frontmatter.feature1}
    //     feature2={post.frontmatter.feature2}
    //     feature3={post.frontmatter.feature3}
    //     gallery={post.frontmatter.gallery}
    //     video={post.frontmatter.video}
    //     previewBlog={post.frontmatter.previewBlog} />
    }

export default LandingPagePreview
