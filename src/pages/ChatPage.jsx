import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import ChatContainer from "../components/chat/ChatContainer";
import ChatInputAction from "../components/chat/ChatInputAction";
import ChatItemIngoing from "../components/chat/ChatItemIngoing";
import ChatItemOutGoing from "../components/chat/ChatItemOutGoing";
import HeaderChat from "../components/chat/HeaderChat";
import userHelper from "../helper/UserHelper";
import contactService from "../services/ContactService";
import chatService from "../services/ChatService";
import io from "socket.io-client";
import Configuration from "../Configuration";
import userService from "../services/UserService";

export default function ChatPage() {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({});
  const [contactProfile, setContactProfile] = useState({});
  const [listChat, setListChat] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await userHelper.fetchUserDetail();
        setUserProfile(userData);
        const usernameContact = new URLSearchParams(window.location.search).get("username");
        const detailContact = await contactService.getDetailContact(usernameContact);

        if (detailContact.data.user) {
          setContactProfile(detailContact.data.user);
          const listChat = await chatService.getListChat(usernameContact);

          if (listChat.data.chats) {
            setListChat(listChat.data.chats);
          }
        } else {
          alert(detailContact.data.message);
          navigate("/home");
        }
      } catch (error) {
        console.log(error);
        alert("Error fetching data. Please try again later.");
        navigate("/home");
      }
    };

    fetchData();
  }, [navigate]);

  useEffect(() => {
    const socket = io(Configuration.WS_URL);

    socket.on("connect", async () => {
      console.log("Terhubung ke server Socket.IO");

      try {
        const response = await userService.setSocketId(socket.id);
        console.log(response.data.message);
      } catch (error) {
        console.log(error);
        alert("Error connecting to Socket.IO server. Please try again later.");
        window.location.reload();
      }

      setSocket(socket);
    });

    socket.on("message", (data) => {
      console.log(data);
    })

    return () => {
      socket.disconnect();
    };
  }, []);

  const formatDate = (date) => {
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();
    let month = formattedDate.getMonth() + 1;
    let day = formattedDate.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  return (
    <Container>
      <HeaderChat userProfile={contactProfile} />

      <ChatContainer>
        {listChat.map((chat, index) => (
          chat.userSender.username === userProfile.username ? (
            <ChatItemOutGoing
              key={index}
              textChat={chat.message}
              dateChat={formatDate(chat.updatedAt)}
            />
          ) : (
            <ChatItemIngoing
              key={index}
              textChat={chat.message}
              dateChat={formatDate(chat.updatedAt)}
            />
          )
        ))}
      </ChatContainer>

      <ChatInputAction socket={socket} contactProfile={contactProfile} />
    </Container>
  );
}
