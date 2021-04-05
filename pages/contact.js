import ContactLayout from "../components/contactlayout"
import ContactForm from "../components/contact"
import { Container } from "reactstrap";
export default function Contact() {
  return (
    <>
      <ContactLayout>
        <Container>
        <ContactForm />
        </Container>
      </ContactLayout>
    </>
  );
}
