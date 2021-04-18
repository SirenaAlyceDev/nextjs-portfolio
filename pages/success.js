import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "reactstrap";
import Link from "next/link";
import Head from "next/head";

export default function ContactSuccess() {
  return (
      <>
    <Container className="d-flex justify-content-center">
         <Head>
         <meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width"
/>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display&display=swap"
            rel="stylesheet"
          />
          <title>
            Sirena Alyce | Data Analyst | FullStack Developer | Atlanta, GA
          </title>
        </Head>
      <Row>
          <Col className="p-3">
          <h1>Thank You!</h1>
          <p>I'm looking forward to working together.</p>
          <p>I'll get back in touch with you soon!</p>
          <p>-Sirena Alyce</p>
          <Link href="/home" className="btn home-button"><a className="btn" role="button">Back To Home</a></Link>
        </Col>
      </Row>
    </Container>
    </>
  );
}
