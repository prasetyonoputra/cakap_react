import axios from "axios";
import Configuration from "../Configuration";

const addContact = async (data) => {
  return await axios.post(`${Configuration.API_URL}/api/contact`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const getListContact = async () => {
  return await axios.get(`${Configuration.API_URL}/api/contact`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const deleteContact = async (data) => {
  return await axios.delete(`${Configuration.API_URL}/api/contact`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const exportedObject = {
  addContact,
  getListContact,
  deleteContact,
};

export default exportedObject;
