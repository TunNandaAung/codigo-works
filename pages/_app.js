import "../styles/globals.scss";
import { useState } from "react";
import Router from "next/router";

function MyApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => page);

  const [showPageTransition, setShowPageTransition] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    if (url.indexOf("?") === -1) {
      setShowPageTransition(true);
    }
  });
  Router.events.on("routeChangeComplete", () => {
    setShowPageTransition(false);
  });
  Router.events.on("routeChangeError", () => setShowPageTransition(false));

  return (
    <>
      <section
      // className={
      //   "PageTransitions__placeholder PageTransitions__placeholder--exit  " +
      //   (showPageTransition ? "" : "hidden")
      // }
      >
        <div
          className={
            "PageTransition__wrapper PageTransition__wrapper--enter bg-red " +
            (showPageTransition ? "" : "hidden")
          }
          style={{ animationDuration: "0.5s" }}
        ></div>
        <div
          className={
            "PageTransition__wrapper PageTransition__wrapper--enter  bg-white " +
            (showPageTransition ? "" : "hidden")
          }
          style={{ animationDelay: "0.2s" }}
        ></div>
        {getLayout(<Component {...pageProps} />)}
      </section>
    </>
  );
}

export default MyApp;
