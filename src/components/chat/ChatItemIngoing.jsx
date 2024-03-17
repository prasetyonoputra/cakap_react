export default function ChatItemIngoing({ textChat, dateChat }) {
  return (
    <div className="chat-item-ingoing-container">
      <div className="chat-item">
        <span className="chat-text">{textChat}</span>
        <span className="chat-date">{dateChat}</span>
      </div>
    </div>
  );
}
