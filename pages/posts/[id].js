import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import Link from "next/link";
import { Container } from "reactstrap";
import { DiscussionEmbed } from "disqus-react";
import superjson from 'superjson';
import MailChimpContactForm from "../../components/mailchimpcontactform";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: "40px",
    fontWeight: "bold"
  }
}))

export default function Post({ postData, home }) {
  const classes = useStyles();

  return (
    <Container>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Typography variant="h1" className={classes.heading}>{postData.title}</Typography>
        <div>
          {<Date dateString={superjson.stringify(postData.date)} />}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      {!home && (  
        <div>
          <Link href="/blog">
            <a>← Back to blog home</a>
          </Link>
        </div>
      )}

      <MailChimpContactForm />

      {/* adding disqus code to allow comments on blog posts */}
      <DiscussionEmbed
        shortname="sirenaalyce"
        config={{
          url: postData.url,
          identifier: postData.id,
          title: postData.title,
          language: "en_US", //e.g. for Traditional Chinese (Taiwan)
        }}
      />
    </Container>
  );
}
