import React from 'react'
import ContactLayout from "../components/contactlayout"
import ContactForm from "../components/contactform"
import { Container } from "reactstrap"
import Head from "next/head"

export default function Contact() {
  return (
    <>
          <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>
          Sirena Alyce | Data Analyst | FullStack Developer | Atlanta, GA
        </title>
      </Head>
      <ContactLayout>
        <Container>
        <ContactForm />
        </Container>
      </ContactLayout>
    </>
  );
}
