import Container from "../components/Container";
import Footer from "../components/Footer";
import FormLogin from "../components/form/FormLogin";
import FormLogo from "../components/form/FormLogo";
import FormHeader from "../components/form/HeaderForm";
import LinkRegister from "../components/form/LinkRegister";
import SectionForm from "../components/form/SectionForm";

export default function LoginPage() {
  return (
    <Container>
      <SectionForm>
        <FormHeader text={"Login"} />
        <FormLogo />
        <FormLogin />
        <LinkRegister />
      </SectionForm>
      <Footer />
    </Container>
  );
}
