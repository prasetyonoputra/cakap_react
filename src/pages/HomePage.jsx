import { useNavigate } from "react-router";
import Container from "../components/Container";
import SectionForm from "../components/form/SectionForm";
import HeaderUsers from "../components/home/HeaderUsers";
import HomeBtnMenu from "../components/home/HomeBtnMenu";
import HomeUserList from "../components/home/HomeUserList";
import { useEffect, useState } from "react";
import userHelper from "../helper/UserHelper";

export default function HomePage() {
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
      <SectionForm>
        <HeaderUsers />
        <hr />
        <HomeBtnMenu />
        <HomeUserList />
      </SectionForm>
    </Container>
  );
}
