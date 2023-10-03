// ChatNowButton.js



const ChatNowButton = () => {
  const handleChatNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Chat Now button clicked');
    // Add your chat now logic here
  };

  return (
    <div className='button2'>
      <button onClick={handleChatNow}>Chat Now</button>
    </div>
  );
}

export default ChatNowButton;
