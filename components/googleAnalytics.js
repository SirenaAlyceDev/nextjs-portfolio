import React from "react";
import Head from "next/head";

export default function GoogleAnalytics() {
  return (
    <>
      {process.env.NODE_ENV === "production" && process.browser ? (
        <Head>
            <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>
          Sirena Alyce | Data Analyst | FullStack Developer | Atlanta, GA
        </title>
        <link rel="icon" href="/favicon.ico" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-VT7VG6RPMT"
          ></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag("js", new Date());
  
                  gtag("config", "G-VT7VG6RPMT");`,
            }}
          />

        </Head>
      ) : null}
    </>
  );
}
