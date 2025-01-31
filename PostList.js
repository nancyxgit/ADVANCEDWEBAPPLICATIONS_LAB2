import React, { useState, useEffect } from 'react';

const PostList = ({ posts }) => {
  const [counts, setCounts] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setCounts(posts.map(() => 0));
    setSelected(posts.map(() => null));
  }, [posts]);

  const handleLikeDislike = (index, value) => {
    const newCounts = [...counts];
    const newSelected = [...selected];

    if (newSelected[index] === value) {
      // If the same button is clicked again, reset the selection
      newCounts[index] -= value;
      newSelected[index] = null;
    } else {
      // If a different button is clicked, update the count accordingly
      if (newSelected[index] !== null) {
        newCounts[index] -= newSelected[index];
      }
      newCounts[index] += value;
      newSelected[index] = value;
    }

    setCounts(newCounts);
    setSelected(newSelected);
  };

  return (
    <div>
      <h3>Posts</h3>
      {posts.length === 0 ? (
        <p>No posts yet. Be the first to add a post!</p>
      ) : (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              {post.post} - {post.username}
              <div>
                <label>
                  <input
                    type="radio"
                    name={`like-dislike-${index}`}
                    checked={selected[index] === 1}
                    onChange={() => handleLikeDislike(index, 1)}
                  />
                  Like
                </label>
                <span>{counts[index]}</span>
                <label>
                  <input
                    type="radio"
                    name={`like-dislike-${index}`}
                    checked={selected[index] === -1}
                    onChange={() => handleLikeDislike(index, -1)}
                  />
                  Dislike
                </label>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;