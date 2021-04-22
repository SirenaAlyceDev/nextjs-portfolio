import React from 'react'
import HomePage from './home'
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }


export default function Home({allPostsData}) {
    return (
        <>
        <h1>test</h1>
        <HomePage />
        <section>
          {allPostsData
              .slice(0, 2)
              .map(({ id, date, title, image, extra }) => (
                <div xs="6">
                  <Link href={`/posts/${id}`}>
                    <a >{title}</a>
                  </Link>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                </div>
              ))}
          </section>
        </>
        )
  }