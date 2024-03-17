import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Container from "../components/Container";
import SectionForm from "../components/form/SectionForm";
import HeaderUsers from "../components/home/HeaderUsers";
import HomeBtnMenu from "../components/home/HomeBtnMenu";
import HomeUserList from "../components/home/HomeUserList";
import userHelper from "../helper/UserHelper";

export default function HomePage() {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchDataUser = async () => {
      if (localStorage.getItem("token")) {
        const userData = await userHelper.fetchUserDetail();

        if (userData) {
          setUserProfile(userData);
        } else {
          alert("You must login first!");
          navigate("/logout");
        }
      } else {
        alert("You must login first!");
        navigate("/logout");
      }
    };

    fetchDataUser();
  }, [navigate]);

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
