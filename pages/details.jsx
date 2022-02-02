import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Slider from "react-slick";
import Layout from "../components/Layout";

const Details = () => {
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

  const images = [
    {
      normal: "https://cdn.codigo.co/uploads/2021/04/PAO-1.png",
      retina: "https://cdn.codigo.co/uploads/2021/04/PAO-1@2x.png",
    },
    {
      normal: "https://cdn.codigo.co/uploads/2021/04/PAO-2-1.png",
      retina: "https://cdn.codigo.co/uploads/2021/04/PAO-2-1@2x.png",
    },
    {
      normal: "https://cdn.codigo.co/uploads/2021/04/PAO-3.png",
      retina: "https://cdn.codigo.co/uploads/2021/04/PAO-3@2x.png",
    },
    {
      normal: "https://cdn.codigo.co/uploads/2021/04/PAO-4-1.png",
      retina: "https://cdn.codigo.co/uploads/2021/04/PAO-4-1@2x.png",
    },
    {
      normal: "https://cdn.codigo.co/uploads/2021/04/PAO-5.png",
      retina: "https://cdn.codigo.co/uploads/2021/04/PAO-5@2x.png",
    },
  ];

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

      <div className="group absolute -left-12 top-1/2 hidden lg:block">
        <button className="ProjectDetails__navigate__button group group-hover:scale-125 group-hover:shadow-2xl">
          <ArrowLeftIcon className="ProjectDetails__navigate__button__arrow pl-3 group-hover:translate-x-4"></ArrowLeftIcon>
        </button>
      </div>
      <div className="group absolute -right-12 top-1/2 hidden lg:block">
        <button className="ProjectDetails__navigate__button  group-hover:scale-125 group-hover:shadow-2xl">
          <ArrowRightIcon className="ProjectDetails__navigate__button__arrow pr-3 group-hover:-translate-x-4"></ArrowRightIcon>
        </button>
      </div>

      <div className="ProjectDetails__wrapper">
        <div className="flex w-full flex-col items-center lg:flex-row">
          <section className="ProjectDetails__description">
            <h1 className="ProjectDetails__description__text">
              <p>
                OCBC Pay <br className="sm:hidden lg:block" />
                Anyone
              </p>
            </h1>

            <section className="ProjectDetails__showcase  lg:hidden">
              <div
                className="ProjectDetails__showcase__circle"
                style={{ backgroundColor: "rgb(114, 210, 204)" }}
              ></div>
              <Slider
                {...slideSettings}
                className="ProjectDetails__showcase__slider"
              >
                {images.map((image, i) => (
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

            <div className="ProjectDetails__description__cta">
              <div className="ProjectDetails__description__cta__box">
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
              </div>
              <div className="ProjectDetails__description__cta__box border-l-0">
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
              </div>
            </div>
            <p className="ProjectDetails__description__body">
              You can now pay kopitiam uncles, merchants, peers, and dears with
              the OCBC Pay Anyone app, and you can even withdraw cash by
              scanning the QR code at OCBC’s ATMs without your card!
            </p>

            <div className="ProjectDetails__description__feats">
              <h5 className="font-bold">Key Features</h5>
              <div className="ProjectDetails__description__feats__list">
                <p>Scan to pay</p>
                <p>Transfer cash and request payment</p>
                <p>ATM QR cash withdrawal</p>
                <p>Access exclusive discounts and promotions</p>
              </div>
            </div>
          </section>
          <section className="ProjectDetails__showcase hidden lg:block">
            <div
              className="ProjectDetails__showcase__circle"
              style={{ backgroundColor: "rgb(114, 210, 204)" }}
            ></div>
            <Slider
              {...slideSettings}
              className="ProjectDetails__showcase__slider"
            >
              {images.map((image, i) => (
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

export default Details;

Details.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
