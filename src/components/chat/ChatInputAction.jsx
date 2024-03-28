import { useState } from "react";

export default function ChatInputAction({ socket, contactProfile }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    setMessage("");

    socket.emit("message", message, contactProfile.socketId);
  };

  return (
    <div className="chat-submit item-row-around">
      <button className="custom-button" onClick={() => window.history.back()}>
        <span
          className="bi bi-emoji-smile-fill"
          style={{ color: "#4a69bb", fontSize: "20px" }}
        ></span>
      </button>

      <div className="input-chat-text">
        <input
          type="text"
          name="message-text"
          id="message-text"
          placeholder="Ketik Pesan"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="item-row-around">
        <button className="custom-button" onClick={() => window.history.back()}>
          <span
            className="bi bi-paperclip"
            style={{ color: "#4a69bb", fontSize: "20px" }}
          ></span>
        </button>

        <button className="custom-button" onClick={() => window.history.back()}>
          <span
            className="bi bi-mic-fill"
            style={{ color: "#4a69bb", fontSize: "20px" }}
          ></span>
        </button>

        <button className="custom-button" onClick={() => handleSend()}>
          <span
            className="bi bi-send-fill"
            style={{ color: "#4a69bb", fontSize: "20px" }}
          ></span>
        </button>
      </div>
    </div>
  );
}
