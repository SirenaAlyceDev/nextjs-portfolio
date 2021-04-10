import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "reactstrap";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

export default function ContactSuccess() {
  return (
    <Container>
      <Row>
        <Card className="p-3">
          <h1>Thank You!</h1>
          <p>I'm looking forward to working together.</p>
          <p>I'll get back in touch with you soon!</p>
          <p>-Sirena Alyce</p>
          <Link href="/home" className="btn home-button"><a className="btn" role="button">Back To Home</a></Link>
        </Card>
      </Row>
    </Container>
  );
}
