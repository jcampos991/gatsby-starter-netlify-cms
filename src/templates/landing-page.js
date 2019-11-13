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

  return (
    <TemplateWrapper2>
        <LandingPageTemplate 
            image1={post.frontmatter.image1.childImageSharp.fluid.src}
            alt={post.frontmatter.alt}
            title1={post.frontmatter.title1}
            content1={post.frontmatter.content1.body}
            ubication={post.frontmatter.ubication}
            feature1={post.frontmatter.feature1}
            feature2={post.frontmatter.feature2}
            feature3={post.frontmatter.feature3}
            gallery={post.frontmatter.gallery}
            video={post.frontmatter.video}
            previewBlog={post.frontmatter.previewBlog} />
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
