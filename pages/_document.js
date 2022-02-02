import Document, { Html, Head, Main, NextScript } from "next/document";
class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap"
          />

          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="https://www.codigo.co/favicon.ico"
          />

          <meta name="msapplication-TileColor" content="#d5333e" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
