import React, { useState } from 'react';
import Login from './Login';
import DiscussionForm from './DiscussionForm';
import DiscussionList from './DiscussionList';
import PostForm from './PostForm';
import PostList from './PostList';
import './App.css';

const App = () => {
  //variables to manage state
  const [discussions, setDiscussions] = useState([]);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [username, setUsername] = useState(null);
  const [filteredDiscussions, setFilteredDiscussions] = useState([]);

  //function to handle login
  const handleLogin = (user) => {
    setUsername(user);
  };

  //function to handle add discussion button press
  const handleAddDiscussion = (discussion) => {
    const newDiscussion = { ...discussion, posts: [], createdAt: new Date() };
    const newDiscussions = [newDiscussion, ...discussions];
    setDiscussions(newDiscussions);
    setFilteredDiscussions(newDiscussions);
  };

  //function to handle add post on discussion button press
  const handleAddPost = (post) => {
    if (selectedDiscussion) {
      const updatedDiscussions = discussions.map(discussion =>
        discussion.topic === selectedDiscussion.topic
          ? { ...discussion, posts: [...discussion.posts, { post, username }] }
          : discussion
      );
      setDiscussions(updatedDiscussions);
      setSelectedDiscussion({
        ...selectedDiscussion,
        posts: [...selectedDiscussion.posts, { post, username }]
      });
    }
  };

  const handleSearchDiscussion = (searchTerm) => {
    const filtered = discussions.filter(discussion =>
      discussion.topic.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDiscussions(filtered);
  };

  const handleClearAllPosts = () => {
    setDiscussions([]);
    setSelectedDiscussion(null);
  };

  const handleSelectDiscussion = (discussion) => {
    setSelectedDiscussion(discussion);
  };

  if (!username) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <h2>Welcome, {username}!</h2>
      <DiscussionForm
        onAddDiscussion={handleAddDiscussion}
        onSearchDiscussion={handleSearchDiscussion}
        onClearAllPosts={handleClearAllPosts}
        onAddPost={handleAddPost}
        selectedDiscussion={selectedDiscussion}
      />
      <DiscussionList
        discussions={filteredDiscussions}
        onSelectDiscussion={handleSelectDiscussion}
      />
      {selectedDiscussion && (
        <div>
          <h3>{selectedDiscussion.topic}</h3>
          <PostForm onAddPost={handleAddPost} />
          <PostList posts={selectedDiscussion.posts} />
        </div>
      )}
    </div>
  );
};

export default App;