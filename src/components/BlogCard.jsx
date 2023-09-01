import React from 'react'

import { ThumbsUp } from 'lucide-react'
import { ThumbsDown } from 'lucide-react'
import { Flag } from 'lucide-react'

import "./css/blogcard.css"


export default function BlogCard() {
  return (
    <div className='blogCard'>
        <h1>My firstBlog</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sequi architecto fugiat unde delectus iure temporibus, laborum officiis magnam voluptatum labore laudantium. Corrupti vero dicta nulla enim officiis voluptate labore molestias nisi dolor suscipit eligendi fuga dignissimos iusto ex delectus eos voluptas, natus accusantium voluptatibus odit! Nisi iusto officiis inventore.</p>

        <div className="comments-section">
          <h2>Comments</h2>
          <div className="comment">
            <img src="https://picsum.photos/200" alt="profile" />
            <p>John Doe</p>
            <p className='comment-content' > Nice Blogs</p>
          </div>

          <div className="new-comment">
            <input type="text" name="commnet" id="commnet" className="comment-input" placeholder='comments here..' />

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
  )
}
