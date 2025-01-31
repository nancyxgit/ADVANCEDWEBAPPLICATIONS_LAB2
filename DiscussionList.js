import React from 'react';

const DiscussionList = ({ discussions, onSelectDiscussion }) => {
  return (
    <div className="discussion-list-container">
      <h3>Discussions</h3>
      <ul>
        {/* to display the disscussions */}
        {discussions.map((discussion, index) => (
          <li
            key={index}
            className="discussion-item"
            onClick={() => onSelectDiscussion(discussion)}
          >
            {discussion.topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscussionList;
