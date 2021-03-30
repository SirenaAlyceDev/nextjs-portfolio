import BlogLayout from '../../components/bloglayout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import { Container } from 'reactstrap'


export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData, home }) {
  return (
    <Container>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
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
    </Container>

  )
}