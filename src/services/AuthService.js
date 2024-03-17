import axios from "axios";
import Configuration from "../Configuration";

const registerUser = async (data) => {
  const formData = new FormData();

  formData.append("imageProfile", data.imageProfile);

  delete data.imageProfile;

  formData.append("user", JSON.stringify(data));

  return await axios.post(
    `${Configuration.API_URL}/api/auth/register`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

const loginUser = async (data) => {
  return await axios.post(`${Configuration.API_URL}/api/auth/login`, data);
};

const fetchDetailUser = async () => {
  return await axios.get(`${Configuration.API_URL}/api/user/detail`, {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
};

const fetchImageProfile = async () => {
  return await axios.get(`${Configuration.API_URL}/api/user/image`, {
    responseType: "arraybuffer",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
};

const exportedObject = { loginUser, registerUser, fetchDetailUser, fetchImageProfile };

export default exportedObject;
