import React from 'react'

import "./css/dashboard.css"
import  {Sidebar}  from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import BlogCard from '../../components/BlogCard'
import { useUserContext } from '../../context/UserContext'

export  function Dashboard() {

  const {state}=useUserContext()
  const {userFeed}=state

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
               {
                userFeed.map((feed)=>(
                  <div>
                    <BlogCard title={feed.title} content={feed.content} />
                    </div>
                ))
               }
            </div>
        </div>
    </div>
  )
}
