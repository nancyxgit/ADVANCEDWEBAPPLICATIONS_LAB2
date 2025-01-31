import React, { useState } from 'react';

const PostForm = ({ onAddPost }) => {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim()) {
      onAddPost(postContent);
      setPostContent('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="Enter your post"
          className="form-input"
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default PostForm;