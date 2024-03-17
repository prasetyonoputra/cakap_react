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

const fetchDetailUser = async (data) => {
  return await axios.get(
    `${Configuration.API_URL}/api/auth/user?token=${data}`
  );
};

const fetchImageProfile = async (data) => {
  return await axios.get(
    `${Configuration.API_URL}/api/auth/userImage?token=${data}`,
    {
      responseType: "arraybuffer",
    }
  );
};

export default { loginUser, registerUser, fetchDetailUser, fetchImageProfile };
