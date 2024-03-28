import axios from "axios";
import Configuration from "../Configuration";

const getListChat = async (username) => {
  return await axios.get(
    `${Configuration.API_URL}/api/chat?usernameReceiver=${username}`,
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }
  );
};

const exportedObject = {
  getListChat,
};

export default exportedObject;
