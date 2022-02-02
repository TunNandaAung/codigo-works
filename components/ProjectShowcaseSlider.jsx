import Head from "next/head";
import { useState } from "react";
import Slider from "react-slick";

const ProjectShowcaseSlider = ({ work }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slideSettings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlaySpeed: 3000,
    autoplay: true,
    beforeChange: (current, next) => setActiveSlide(next),
  };

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
      <section className="WorkDetails__showcase">
        <div
          className="WorkDetails__showcase__circle"
          style={{
            backgroundColor: `${work.colour_scheme}`,
            borderRadius: "50%",
          }}
        >
          <div className="WorkDetails__showcase__slider">
            <Slider {...slideSettings} className="h-full w-full">
              {work.gallery.map((image, i) => (
                <div key={i}>
                  <img
                    src={image.retina}
                    alt="slide_img"
                    className={
                      "xl:w-[770px]" +
                      (activeSlide === i ? " opacity-1" : "opacity-0")
                    }
                  />
                </div>
              ))}
            </Slider>
          </div>
          {/* <Slider
            {...slideSettings}
            className="absolute  h-[36vw] w-[36vw] -translate-x-1/2 -translate-y-1/2"
          >
            {work.gallery.map((image, i) => (
              <div key={i}>
                <img
                  src={image.retina}
                  alt="slide_img"
                  className={
                    "w-[380px] max-w-[770px] sm:w-[700px] lg:w-[500px] xl:w-auto " +
                    (activeSlide === i ? " opacity-1" : "opacity-0")
                  }
                />
              </div>
            ))}
          </Slider> */}
        </div>
      </section>
    </>
  );
};

export default ProjectShowcaseSlider;
