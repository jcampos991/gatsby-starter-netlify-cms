import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  console.log('BLOG_POST_PREVIEW', entry.getIn(['data']).toJS());
  return(
    <BlogPostTemplate
      featuredimage={entry.getIn(['data', 'featuredimage'])}
      alt={entry.getIn(['data', 'alt'])}
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={entry.getIn(['data', 'tags'])}
      title={entry.getIn(['data', 'title'])}
      isPreview={true}
    />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
