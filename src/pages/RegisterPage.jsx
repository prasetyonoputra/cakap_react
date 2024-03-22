import Container from "../components/Container";
import Footer from "../components/Footer";
import FormRegister from "../components/form/FormRegister";
import FormHeader from "../components/form/HeaderForm";
import LinkLogin from "../components/form/LinkLogin";
import SectionForm from "../components/form/SectionForm";

export default function RegisterPage() {
    return (
        <Container>
            <SectionForm>
                <FormHeader text={"Register"} className="form-header"/>
                <FormRegister />
                <LinkLogin />
            </SectionForm>
            <Footer />
        </Container>
    );
}