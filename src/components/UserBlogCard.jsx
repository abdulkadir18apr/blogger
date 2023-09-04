import React from 'react'

import { ThumbsUp } from 'lucide-react'
import { ThumbsDown } from 'lucide-react'
import { Flag } from 'lucide-react'

import "./css/blogcard.css"


export function UserBlogCard() {
  return (
    <div className='blogCard'>
        <div className="blog-header">
        <h1>My firstBlog</h1>
        <div className="settings">
            <span className='badge'>Approved</span>
            <button className='primary-btn'>Edit</button>
        </div>

        </div>
       
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sequi architecto fugiat unde delectus iure temporibus, laborum officiis magnam voluptatum labore laudantium. Corrupti vero dicta nulla enim officiis voluptate labore molestias nisi dolor suscipit eligendi fuga dignissimos iusto ex delectus eos voluptas, natus accusantium voluptatibus odit! Nisi iusto officiis inventore.</p>

        <div className="comments-section">
          <h2>Comments</h2>
          <div className="userComment">
            <div className="comment-content">
            <img src="https://picsum.photos/200" alt="profile" />
            <p>John Doe</p>
            <p className='comment-content' > Nice Blogs</p>

            </div>
            <div className="controls-container">
            <div className="controls">
              <span><ThumbsUp/></span>
              <button>Like</button>
            </div>
            <div className="controls">
              <span><ThumbsDown/></span>
              <button>Dislike</button>
            </div>
            <div className="controls">
              <span><Flag/></span>
              <button>Report</button>
            </div>

            </div>
           
          
            
          </div>
        </div>

    </div>
  )
}
