import Head from "next/head";
import React from "react";
export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} | The Nexus India` : "The Nexus India - "}
        </title>
        <link rel="icon" href="/images/icon/fabicon.png" />
      </Head>
      {children}
    </>
  );
}
