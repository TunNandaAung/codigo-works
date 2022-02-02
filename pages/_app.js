import "../styles/globals.scss";
import { useState } from "react";
import Router from "next/router";

function MyApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => page);

  const [show, setShow] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setShow(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setShow(false);
  });
  Router.events.on("routeChangeError", () => setShow(false));

  return (
    <>
      <section
      // className={
      //   "PageTransitions__placeholder PageTransitions__placeholder--exit  " +
      //   (show ? "" : "hidden")
      // }
      >
        <div
          className={
            "PageTransition__wrapper PageTransition__wrapper--enter bg-red " +
            (show ? "" : "hidden")
          }
          style={{ animationDuration: "0.5s" }}
        ></div>
        <div
          className={
            "PageTransition__wrapper PageTransition__wrapper--enter  bg-white " +
            (show ? "" : "hidden")
          }
          style={{ animationDelay: "0.2s" }}
        ></div>
        {getLayout(<Component {...pageProps} />)}
      </section>
    </>
  );
}

export default MyApp;
