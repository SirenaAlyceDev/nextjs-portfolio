import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/assets/css/font-awesome.css";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    marginTop: "10px",
    color: "#2126B2",
    backgroundColor:"transparent",
  },
  socialgrid:{
    textAlign: 'right'
  },
  socialicons: {
    fontSize: "18px",
    color: "#2126b2"
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth={false} className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          &#169; 2021 Sirena Alyce, LLC.
        </Grid>
        <Grid item xs={6} className={classes.socialgrid}>
          <IconButton>
            <Link href="https://twitter/sirenaalyce">
              <TwitterIcon className={classes.socialicons} />
            </Link>
          </IconButton>
          <IconButton>
            <Link href="https://instagram.com/sirenaalyce.io">
              <InstagramIcon className={classes.socialicons} />
            </Link>
          </IconButton>
          <IconButton>
            <Link href="https://github.com/SirenaAlyceDev/react-budget">
              <GitHubIcon className={classes.socialicons} />
            </Link>
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
}
