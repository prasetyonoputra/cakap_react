import axios from "axios";
import Configuration from "../Configuration";

const registerUser = async (data) => {
  const formData = new FormData();

  formData.append("imageProfile", data.imageProfile);
  formData.append("firstName", data.firstName);
  formData.append("lastName", data.lastName);
  formData.append("email", data.email);
  formData.append("username", data.username);
  formData.append("password", data.password);

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

const exportedObject = {
  loginUser,
  registerUser,
};

export default exportedObject;
