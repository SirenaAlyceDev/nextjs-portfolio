import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-social/assets/css/font-awesome.css"

export default function Footer() {
  return (
    <Container className="footer w-100 py-3 mt-4" fluid>
      <Row className="d-flex align-items-center"> 
        <Col><p className="footer-copyright">&#169; 2021 Sirena Alyce, LLC.</p></Col>
        <Col className="text-right">
          <a class="btn btn-social-icon btn-twitter">
            <span class="fa fa-twitter"></span>
          </a>
          <a class="btn btn-social-icon btn-github">
            <span class="fa fa-github"></span>
          </a>
          <a class="btn btn-social-icon btn-instagram">
            <span class="fa fa-instagram"></span>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
