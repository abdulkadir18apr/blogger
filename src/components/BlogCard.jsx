import React from 'react'

import { ThumbsUp } from 'lucide-react'
import { ThumbsDown } from 'lucide-react'
import { Flag } from 'lucide-react'

import "./css/blogcard.css"


export default function BlogCard({title,content}) {
  return (
    <div className='blogCard'>
        <h1>{title}</h1>
        <p>{content}</p>

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
