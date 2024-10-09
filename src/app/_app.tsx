"use client";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { AppProps } from "next/app";

import { store } from "./store/store";
config.autoAddCss = false; // Prevent Font Awesome from adding its CSS automatically

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Default Hospital Website Title</title>
        <meta
          name="description"
          content="Welcome to our hospital. We provide excellent healthcare services."
        />
        <meta
          name="keywords"
          content="hospital, healthcare, medical services, doctors"
        />
        <meta name="author" content="Your Name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
