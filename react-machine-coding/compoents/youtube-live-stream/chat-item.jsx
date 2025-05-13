const ChatItem = ({ message, avatar, name }) => {
  return (
    <div className="chat-item-container">
      <div className="author-details">
        <img className="avatar" src={avatar} />
        <span>{name}</span>
      </div>
      <div className="author-content">
        <p>{message}</p>
      </div>
    </div>
  );
};
export default ChatItem;
