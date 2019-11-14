import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import CommonSpaces from '../components/CommonSpaces';
import Presentation from '../components/Presentation';
import YourSpace from '../components/YourSpace';
import PrincipalPost from '../components/PrincipalPost';
import PostList from '../components/PostList';

export const LandingPageTemplate = ({
    image1,
    alt,
    title1,
    content1,
    ubication,
    feature1,
    feature2,
    feature3,
    gallery,
    video,
    previewBlog,
    isPreview
}) => {
    return (
        <div className="main">
          <div className="t-bg">
              <Presentation 
                  img={image1}
                  alt={alt}
                  principalTitle={title1}
                  content={content1}
                  ubication={ubication} />
              <CommonSpaces 
                title={feature1.title}
                description={feature1.description}
                gallery={gallery} />
              <YourSpace 
                title={feature2.title}
                description={feature2.description}
                video={video} />
          </div>
          <PrincipalPost 
            post={previewBlog} />
          {
            !isPreview && (
              <PostList feature3={feature3} />
            )
          }
      </div>
    )
} 

const LandingPage = ({ data }) => {
  const { markdownRemark: post } = data
  const {
    image1, 
    alt, 
    title1, 
    content1,
    ubication,
    feature1,
    feature2,
    feature3,
    gallery,
    video,
    previewBlog
  } = post.frontmatter;

  return (
    <TemplateWrapper2>
        <LandingPageTemplate 
            image1={image1.childImageSharp.fluid.src}
            alt={alt}
            title1={title1}
            content1={content1.body}
            ubication={ubication}
            feature1={feature1}
            feature2={feature2}
            feature3={feature3}
            gallery={gallery}
            video={video}
            previewBlog={previewBlog} />
    </TemplateWrapper2>
  )
}

LandingPage.defaultProps = {
  isPreview: false
}

LandingPage.propTypes = {
  data: PropTypes.object.isRequired,
  isPreview: PropTypes.bool
}

export default LandingPage

export const landingPageQuery = graphql`
  query LandingPage {
    markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }) {
        html
      frontmatter {
        title1
        alt
        content1 {
          body
        }
        ubication {
          address
          location
        }
        feature1 {
          title
          description
        }
        feature2 {
          title
          description
        }
        feature3 {
          title
        }
        video {
          urlVideo
          width
          height
        }
        image1 {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        gallery {
          photos {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            alt
          }
        }
        previewBlog {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          alt
          column1
          column2 {
            item
          }
        }
      }
    }
  }
`
