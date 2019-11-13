import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import TemplateWrapper2 from '../components/Layout2';

export const BlogPostTemplate = ({
  featuredimage,
  content,
  contentComponent,
  title,
  helmet,
  allPost,
  isPreview
}) => {
  const PostContent = contentComponent || Content
  
  return (
      <>
      {helmet || ''}
            <div className="container-fluid" id="content-image-noticia">
                <img className="img-fluid" src={
                    typeof(featuredimage) === "object" 
                      ? featuredimage.childImageSharp.fluid.src : featuredimage
                    } 
                    alt="Responsive image" />
            </div>
            <div className="main">
                <div className="featured">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h1 className="h2-text text-uppercase">{title}</h1>
                                <PostContent 
                                  className="blog text-justify"
                                  content={content} />
                            </div>
                              <div className="col-md-4">
                                {
                                  !isPreview && (
                                    <ul
                                      style={{boxShadow: "none"}} 
                                      className="list">
                                      {
                                        allPost.map(({node}, index) => (
                                          <li key={`post${node}`}>
                                            <Link
                                              to={node.fields.slug}>{node.frontmatter.title}</Link>
                                          </li>
                                        ))
                                      }
                                    </ul>
                                    )
                                  }
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

BlogPostTemplate.defaultProps = {
  isPreview: false
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  isPreview: PropTypes.bool
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post, allMarkdownRemark } = data

  const allPost = allMarkdownRemark.edges.filter(item => item.node.id !== post.id)

  return (
    <TemplateWrapper2>
      <BlogPostTemplate
        allPost={allPost}
        featuredimage={post.frontmatter.featuredimage}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </TemplateWrapper2>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
