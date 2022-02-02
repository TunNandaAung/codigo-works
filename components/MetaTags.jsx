import Head from "next/head";

const MetaTags = ({
  title,
  description = "Award winning Singapore based mobile app development company. iOS, Android, Web, Social, Games, UI, UX &amp; SEO. 300 apps developed since 2010.",
  image = "https://www.codigo.co/img/social.jpg",
}) => {
  return (
    <Head>
      <title>
        {title
          ? `${title} | Codigo`
          : `Mobile App Development Company in Singapore | Codigo SG`}
      </title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@CodigoApps" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
};

export default MetaTags;
