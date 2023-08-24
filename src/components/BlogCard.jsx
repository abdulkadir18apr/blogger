import React from 'react'

import "./css/blogcard.css"


export default function BlogCard() {
  return (
    <div className='blogCard'>
        <h1>My firstBlog</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sequi architecto fugiat unde delectus iure temporibus, laborum officiis magnam voluptatum labore laudantium. Corrupti vero dicta nulla enim officiis voluptate labore molestias nisi dolor suscipit eligendi fuga dignissimos iusto ex delectus eos voluptas, natus accusantium voluptatibus odit! Nisi iusto officiis inventore.</p>
        <div className="blog-btn">
            <button className="primary-btn">Approve</button>
            <button className="secondary-btn">Reject</button>
        </div>
      
    </div>
  )
}
