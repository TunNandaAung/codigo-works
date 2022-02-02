import Document, { Html, Head, Main, NextScript } from "next/document";
class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap"
            rel="stylesheet"
          /> */}

          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="https://www.codigo.co/favicon.ico"
          />

          <meta name="msapplication-TileColor" content="#d5333e" />
          <meta name="theme-color" content="#d5333e" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
