import authService from "../services/AuthService";

const getDetailUser = async (data) => {
  try {
    const response = await authService.fetchDetailUser(data);

    return response.data.user;
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert(error);
    }

    return null;
  }
};

const getUserImage = async (data) => {
  try {
    const response = await authService.fetchImageProfile(data);

    const base64String = btoa(
      new Uint8Array(response.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );

    return `data:image/jpeg;base64,${base64String}`;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export default { getDetailUser, getUserImage };
