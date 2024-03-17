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
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchDataUser = async () => {
      if (localStorage.getItem("token")) {
        const userData = await userHelper.getDetailUser();
        const userImageData = await userHelper.getUserImage();

        if (!userData) {
          alert("You must login first!");
          navigate("/logout");
        }

        if (userImageData) {
          userData.imageProfile = userImageData;
        }

        setUserProfile(userData);
      } else {
        alert("You must login first!");
        navigate("/logout");
      }
    };

    fetchDataUser();
  }, []);

  return (
    <Container>
      <SectionForm>
        <HeaderUsers userProfile={userProfile} />
        <hr />
        <HomeBtnMenu />
        <HomeUserList />
      </SectionForm>
    </Container>
  );
}
