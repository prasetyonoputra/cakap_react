import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import ChatContainer from "../components/chat/ChatContainer";
import ChatInputAction from "../components/chat/ChatInputAction";
import ChatItemIngoing from "../components/chat/ChatItemIngoing";
import ChatItemOutGoing from "../components/chat/ChatItemOutGoing";
import HeaderChat from "../components/chat/HeaderChat";
import { useEffect, useState } from "react";
import userHelper from "../helper/UserHelper";

export default function ChatPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [userImage, setUserImage] = useState({});

  useEffect(() => {
    const getDataUser = async () => {
      if (localStorage.getItem("token")) {
        const userData = await userHelper.getDetailUser();
        const userImageData = await userHelper.getUserImage();

        if (userData) {
          setUser(userData);
        } else {
          navigate("/logout");
        }

        if (userImageData) {
          setUserImage(userImageData);
        }
      } else {
        alert("You must login first!");
        navigate("/logout");
      }
    };

    getDataUser();
  }, []);

  return (
    <Container>
      <HeaderChat user={user} userImage={userImage} />

      <ChatContainer>
        <ChatItemIngoing textChat={"Hallooo Mas bro!!"} dateChat={"08.00"} />
        <ChatItemOutGoing textChat={"Hallooo Mas bro!!"} dateChat={"08.00"} />
      </ChatContainer>

      <ChatInputAction />
    </Container>
  );
}
