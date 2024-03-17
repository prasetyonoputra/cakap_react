import Container from "../components/Container";
import SectionForm from "../components/form/SectionForm";
import HeaderUsers from "../components/home/HeaderUsers";
import HomeBtnMenu from "../components/home/HomeBtnMenu";
import HomeUserList from "../components/home/HomeUserList";

export default function HomePage() {
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
