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
    title1
}) => {
    return (
        <div className="main">
          <div className="t-bg">
              <Presentation 
                  img={image1}
                  principalTitle={title1} />
              <CommonSpaces />
              <YourSpace />
          </div>
          <PrincipalPost />
          <PostList />
      </div>
    )
} 
const LandingPage = ({ data }) => {
  const { markdownRemark: post } = data


  return (
    <TemplateWrapper2>
        <LandingPageTemplate 
            image1="/img/bitmap-copy.png"
            title1={post.frontmatter.title1} />
    </TemplateWrapper2>
  )
}

LandingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LandingPage

export const landingPageQuery = graphql`
  query LandingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title1
        image1 {
            childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
      }
    }
  }
`
