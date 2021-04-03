import SecondaryLayout from "../components/secondarypagelayout"
import ContactForm from "../components/contact"
import { Container } from "reactstrap";
export default function Contact() {
  return (
    <>
      <SecondaryLayout>
        <Container>
        <ContactForm />
        </Container>
      </SecondaryLayout>
    </>
  );
}
