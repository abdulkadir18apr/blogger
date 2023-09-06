import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './css/blogEditor.css';

const BlogEditor = () => {
  const apiKey = 'xqhhbi3kfh3ngwxnap1se6o41l8d783mujrjeeybij1wxli2';

  const handleEditorChange = (content, editor) => {
    
    console.log('Content was updated:', content);
  };

  return (
    <div className="editor-container">
      {/* Category Select Box */}
      <div className="category-container">
      
        <select id="category" name="category">
          <option value="code">Code</option>
          <option value="IT">IT</option>
          <option value="food-blogs">Food Blogs</option>
          <option value="travel-blogs">Travel Blogs</option>
        </select>
      </div>

      {/* Heading Input Box */}
      <div className="heading-container">
        <input
          type="text"
          id="heading"
          name="heading"
          placeholder="Heading Here"
        />
      </div>

      {/* TinyMCE Editor */}
      <div className="editor">
        <Editor
          apiKey={apiKey}
          initialValue="<p>Type your blog here...</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
              'underline','fontsize','lists'
            ],
            toolbar:
              'undo redo | formatselect | fontsize bold italic underline |bullist numlist outdent indent | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
          }}
          onEditorChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

export default BlogEditor;
