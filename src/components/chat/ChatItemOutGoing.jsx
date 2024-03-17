export default function ChatItemOutGoing({ textChat, dateChat }) {
  return (
    <div className="chat-item-outgoing-container">
      <div className="chat-item">
        <span className="chat-text">{textChat}</span>
        <span className="chat-date">{dateChat}</span>
      </div>
    </div>
  );
}
