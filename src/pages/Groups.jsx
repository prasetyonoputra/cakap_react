import Container from "../components/Container";
import SectionForm from "../components/form/SectionForm";
import HeaderGroups from "../components/groups/HeaderGroups";
import GroupsBtn from "../components/groups/GroupsBtn";
import GroupsList from "../components/groups/GroupsList";

export default function Groups() {
    return (
        <Container>
            <SectionForm>
                <HeaderGroups />
                <hr />
                <GroupsBtn />
                <GroupsList />                
            </SectionForm>
        </Container>
    );
}
