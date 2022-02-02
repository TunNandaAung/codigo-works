import Head from "next/head";
import Link from "next/link";
import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { apiUrl } from "../config";
import Layout from "../components/Layout";
import MetaTags from "../components/MetaTags";

const WorkDetails = ({ work }) => {
  const slideSettings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlaySpeed: 3000,
    autoplay: true,
  };

  const hasCta = work.ios_url || work.android_url || work.web_url;

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <MetaTags
        title={work.name}
        description={work.description}
        image={work.gallery ? work.gallery[0].retina : null}
      />
      <Link href={`/${work.prev_post_slug}`}>
        <a className="group absolute -left-12 top-1/2 hidden lg:block">
          <button className="ProjectDetails__navigate__button group group-hover:scale-125 group-hover:shadow-2xl">
            <ArrowLeftIcon className="ProjectDetails__navigate__button__arrow pl-3 group-hover:translate-x-4"></ArrowLeftIcon>
          </button>
        </a>
      </Link>
      <Link href={`/${work.next_post_slug}`}>
        <a className="group absolute -right-12 top-1/2 hidden lg:block">
          <button className="ProjectDetails__navigate__button  group-hover:scale-125 group-hover:shadow-2xl">
            <ArrowRightIcon className="ProjectDetails__navigate__button__arrow pr-3 group-hover:-translate-x-4"></ArrowRightIcon>
          </button>
        </a>
      </Link>

      <div className={"ProjectDetails__wrapper"}>
        <div className="flex w-full flex-col items-center lg:flex-row">
          <section
            className={"ProjectDetails__description " + (hasCta ? "" : "pb-16")}
          >
            <h1 className="ProjectDetails__description__text">
              <p className="break-words">
                {/* OCBC Pay <br className="sm:hidden lg:block" />
                Anyone */}
                {work.name}
              </p>
            </h1>

            <section className="ProjectDetails__showcase  lg:hidden">
              <div
                className="ProjectDetails__showcase__circle"
                style={{ backgroundColor: `${work.colour_scheme}` }}
              ></div>
              <Slider
                {...slideSettings}
                className="ProjectDetails__showcase__slider"
              >
                {work.gallery.map((image, i) => (
                  <div key={i}>
                    <img
                      key={image.retina}
                      src={image.retina}
                      alt="slide_img"
                      className="w-[380px] max-w-[770px] sm:w-[700px]"
                    />
                  </div>
                ))}
              </Slider>
            </section>

            {hasCta && (
              <div className="ProjectDetails__description__cta">
                {work.ios_url && (
                  <a
                    className={
                      "ProjectDetails__description__cta__box " +
                      (work.android_url ? " borer-r-0" : "")
                    }
                    href={work.ios_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.codigo.co/img/ui/ico-app_store.png"
                      alt="App Store"
                    />
                    <p className="text-xs uppercase tracking-wide">
                      <span className="font-semibold">Available On</span>
                      <br />
                      <span className="text-sm font-bold capitalize">
                        App Store
                      </span>
                    </p>
                  </a>
                )}
                {work.android_url && (
                  <a
                    className={
                      "ProjectDetails__description__cta__box " +
                      (work.ios_url ? " borer-l-0 " : " ") +
                      (work.web_url ? " borer-r-0" : "")
                    }
                    href={work.android_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.codigo.co/img/ui/ico-google_play-store.png"
                      alt="Play Store"
                    />
                    <p className="text-xs uppercase tracking-wide">
                      <span>Available On</span>
                      <br />
                      <span className="text-sm font-bold capitalize">
                        App Store
                      </span>
                    </p>
                  </a>
                )}
                {work.web_url && (
                  <a
                    className={
                      "ProjectDetails__description__cta__box " +
                      (work.android_url ? " borer-l-0 " : " ")
                    }
                    href={work.web_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.codigo.co/img/ui/ico-web.png"
                      alt="Play Store"
                    />
                    <p className="text-xs uppercase tracking-wide">
                      <span>Live on</span>
                      <br />
                      <span className="text-sm font-bold capitalize">
                        website.com
                      </span>
                    </p>
                  </a>
                )}
              </div>
            )}
            <p
              className="ProjectDetails__description__body"
              dangerouslySetInnerHTML={{ __html: work.description }}
            ></p>

            <div className="ProjectDetails__description__feats">
              <h5 className="font-bold">Key Features</h5>
              <div
                className="ProjectDetails__description__feats__list"
                dangerouslySetInnerHTML={{ __html: work.key_features }}
              ></div>
            </div>
          </section>
          <section className="ProjectDetails__showcase hidden lg:block">
            <div
              className="ProjectDetails__showcase__circle"
              style={{ backgroundColor: `${work.colour_scheme}` }}
            ></div>
            <Slider
              {...slideSettings}
              className="ProjectDetails__showcase__slider"
            >
              {work.gallery.map((image, i) => (
                <div key={i}>
                  <img
                    src={image.retina}
                    alt="slide_img"
                    className="max-w-[770px] lg:w-[500px] xl:w-auto"
                  />
                </div>
              ))}
            </Slider>
          </section>
        </div>
      </div>
    </>
  );
};

export default WorkDetails;

WorkDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${apiUrl}/works/${params.slug}`);
  const work = await res.json();

  return {
    props: { work },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${apiUrl}/works/details`);
  const works = await res.json();

  const paths = works.map((work) => ({
    params: { slug: work.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
