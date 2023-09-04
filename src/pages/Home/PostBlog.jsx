import React from 'react'

import "./css/dashboard.css"
import  {Sidebar}  from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import BlogCard from '../../components/BlogCard'
import BlogEditor from '../../components/BlogEditor'

export  function PostBlog() {
  return (
    <div class="dashboard">
        <div class="sidebar-container">
           <Sidebar/>
        </div>
        <div className="main-content">
            <div className="navbar-container">
                <Navbar/>

            </div>
            <div className="blog-container">
                <BlogEditor/>
              
            </div>
        </div>
    </div>
  )
}
