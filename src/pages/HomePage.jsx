import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Container from "../components/Container";
import SectionForm from "../components/form/SectionForm";
import HeaderUsers from "../components/home/HeaderUsers";
import HomeBtnMenu from "../components/home/HomeBtnMenu";
import HomeUserList from "../components/home/HomeUserList";
import userHelper from "../helper/UserHelper";
import contactService from "../services/ContactService";

export default function HomePage() {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({});
  const [listContact, setListContact] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (localStorage.getItem("token")) {
          const userData = await userHelper.fetchUserDetail();

          if (userData) {
            setUserProfile(userData);
          } else {
            throw new Error("Failed to fetch user data");
          }
        } else {
          throw new Error("You must login first!");
        }
      } catch (error) {
        alert(error.message);
        navigate("/logout");
      }

      try {
        const listContactData = await contactService.getListContact();

        if (listContactData) {
          setListContact(listContactData.data.contacts);
        } else {
          throw new Error("Failed to fetch contact list data");
        }
      } catch (error) {
        alert(error.message);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <Container>
      <SectionForm>
        <HeaderUsers userProfile={userProfile} />
        <hr />
        <HomeBtnMenu />
        <HomeUserList listContact={listContact} />
      </SectionForm>
    </Container>
  );
}
