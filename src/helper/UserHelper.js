import authService from "../services/AuthService";

const getDetailUser = async () => {
  try {
    const response = await authService.fetchDetailUser();

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

const getUserImage = async () => {
  try {
    const response = await authService.fetchImageProfile();

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

const fetchUserDetail = async () => {
  const userData = await getDetailUser();
  const userImageData = await getUserImage();

  if (userImageData) {
    userData.imageProfile = userImageData;
  }

  return userData;
};

const exportedObject = { fetchUserDetail };

export default exportedObject;