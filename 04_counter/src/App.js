import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import React, { useState } from 'react';
import { blogList } from './data/blog-list';
import BlogList from './components/BlogList';

function App() {
  const [blogs, setBlogs] = useState(blogList);
  const deleteBlogs = () => {
      
  }
 
  return (
    <div className="App">
    <BlogList blogs={blogs} onDeleteBlogs={deleteBlogs}/>
    </div>
  );
} 

export default App;
