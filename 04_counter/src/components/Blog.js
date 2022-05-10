import React from 'react'

export default function Blog({blog, onDeleteBlog}) {
  return (
    <div>
        <h3>{blog.title}</h3>
        <p>{blog.description}</p>
        <p>{blog.authorName}</p>
        <button onClick={onDeleteBlog}>Delete blog</button>
    </div>
  )
}
