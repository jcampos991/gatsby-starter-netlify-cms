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
    title1,
    content1,
    ubication,
    feature1
}) => {
    return (
        <div className="main">
          <div className="t-bg">
              <Presentation 
                  img={image1}
                  principalTitle={title1}
                  content={content1}
                  ubication={ubication} />
              <CommonSpaces 
                title={feature1.title}
                description={feature1.description} />
              <YourSpace />
          </div>
          <PrincipalPost />
          <PostList />
      </div>
    )
} 
const LandingPage = ({ data }) => {
  const { markdownRemark: post } = data

console.log('POST........ :', data);
  return (
    <TemplateWrapper2>
        <LandingPageTemplate 
            image1={post.frontmatter.image1.childImageSharp.fluid.src}
            title1={post.frontmatter.title1}
            content1="kjjfdkkgdkflgj"
            ubication={post.frontmatter.ubication}
            feature1={post.frontmatter.feature1} />
    </TemplateWrapper2>
  )
}

LandingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LandingPage

export const landingPageQuery = graphql`
  query LandingPage {
    markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }) {
        html
      frontmatter {
        title1
        ubication {
          address
          location
        }
        feature1 {
          title
          description
        }
        image1 {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
      }
    }
  }
`