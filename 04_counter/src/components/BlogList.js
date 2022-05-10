import React from 'react'
import PropTypes from 'prop-types'
import Blog from './Blog'

function BlogList({blogs, onDeleteBlogs}) {
  return (
    <div>
        {
            blogs.map(blog => {
               return <Blog blog={blog} onDeleteBlogs={onDeleteBlogs}/>
            })
        }
    </div>
  )
}

BlogList.propTypes = {}

export default BlogList
