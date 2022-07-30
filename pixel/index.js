import React from "react";
import Head from "next/head";

import FacebookPixel from "./FacebookPixel";

const Pixel = ({ name }) => {
  return (
    <Head>
      <title>Oladele Graphics</title>
      <meta name="description" content="Oladele Grphics website" />
      <link rel="icon" href="/favicon.png" />
      <meta
        name="facebook-domain-verification"
        content="tyrwbyjxn7vfkzsc5e12w2b35yoxnx"
      />
      {name === "FacebookPixel" && <FacebookPixel />}
    </Head>
  );
};

export default Pixel;
