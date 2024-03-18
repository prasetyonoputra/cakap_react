import { Client } from "@stomp/stompjs";
import { useState } from "react";

export default function ChatSocket() {
  const [message, setMessage] = useState();
  const SOCKET_URL = "ws://localhost:8080/api/ws-message";

  let onConnected = () => {
    console.log("Connected!!");
    client.subscribe("/topic/greetings", function (msg) {
      console.log(msg);
    });
  };

  let onDisconnected = () => {
    console.log("Disconnected!!");
  };

  const client = new Client({
    brokerURL: SOCKET_URL,
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
    onConnect: onConnected,
    onDisconnect: onDisconnected,
  });

  client.activate();

  function sendName() {
    client.publish({
      destination: "/app/sendMessage",
      body: JSON.stringify({ message: message }),
    });
  }

  return (
    <div className="container-custom">
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <br />
      <button onClick={() => sendName()}>Send</button>
    </div>
  );
}
