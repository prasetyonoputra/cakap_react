import axios from "axios";
import Configuration from "../Configuration";

const fetchDetailUser = async () => {
  return await axios.get(`${Configuration.API_URL}/api/user/detail`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const fetchImageProfile = async () => {
  return await axios.get(`${Configuration.API_URL}/api/user/image`, {
    responseType: "arraybuffer",
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const setSocketId = async (socketId) => {
  return await axios.post(
    `${Configuration.API_URL}/api/user/set_socket_id`,
    {
      socketId: socketId,
    },
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }
  );
};

const exportedObject = {
  fetchDetailUser,
  fetchImageProfile,
  setSocketId,
};

export default exportedObject;
