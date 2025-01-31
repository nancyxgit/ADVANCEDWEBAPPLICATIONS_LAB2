import React, { useState } from 'react';

const DiscussionForm = ({
  onAddDiscussion,
  onAddPost,
  onSearchDiscussion,
  selectedDiscussion,
  onClearAllPosts
}) => {
  //variables to manage state
  const [discussionTopic, setDiscussionTopic] = useState('');
  const [postContent, setPostContent] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  //when user submit a new disscussion
  const handleSubmitDiscussion = (e) => {
    e.preventDefault();
    if (discussionTopic.trim()) {
      onAddDiscussion({ topic: discussionTopic });
      setDiscussionTopic('');
    }
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (postContent.trim()) {
      onAddPost(postContent);
      setPostContent('');
    }
  };

  return (
    <div className="discussion-form-container">
      <input
        type="text"
        placeholder="Search discussions..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearchDiscussion(e.target.value);
        }}
        className="search-input"
      />
      <button onClick={onClearAllPosts} className="clear-all-button">
        Clear All Discussions
      </button>

      <form onSubmit={handleSubmitDiscussion}>
        <input
          type="text"
          value={discussionTopic}
          onChange={(e) => setDiscussionTopic(e.target.value)}
          placeholder="New discussion topic"
          className="form-input"
        />
        <button type="submit">Add Discussion</button>
      </form>

      {selectedDiscussion && (
        <form onSubmit={handleSubmitPost}>
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Add a post..."
            className="form-input"
          />
          <button type="submit">Post</button>
        </form>
      )}
    </div>
  );
};

export default DiscussionForm;
