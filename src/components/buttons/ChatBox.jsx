
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';

const ChatBox = () => {
  return (
    <div className="chatbox">
      <FontAwesomeIcon icon={faComment} />
    </div>
  );
};

export default ChatBox;
