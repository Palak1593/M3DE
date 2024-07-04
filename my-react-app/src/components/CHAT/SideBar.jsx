// Sidebar.jsx

import React from 'react';

const Sidebar = ({ chats, onSelectChat, onNewChat }) => {
  return (
    <div className="sidebar">
      <button className="new-chat-button" onClick={onNewChat}>
        New Chat
      </button>
      <div className="chat-list">
        {chats.map((chat, index) => (
          <div
            key={index}
            className="chat-list-item"
            onClick={() => onSelectChat(index)}
          >
            Chat {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
