import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { apiUrl } from "../config";
import Layout from "../components/Layout";
import MetaTags from "../components/MetaTags";
import ProjectShowcaseSlider from "../components/ProjectShowcaseSlider";
import CallToAction from "../components/CallToAction";

const WorkDetails = ({ work }) => {
  const hasCta = work.ios_url || work.android_url || work.web_url;

  return (
    <>
      <MetaTags
        title={work.name}
        description={work.description}
        image={work.gallery ? work.gallery[0].retina : null}
      />
      <Link href={`/${work.prev_post_slug}`}>
        <a className="group absolute -left-12 top-1/2 hidden lg:block">
          <button className="WorkDetails__navigate__button group group-hover:scale-125 group-hover:shadow-2xl">
            <ArrowLeftIcon className="WorkDetails__navigate__button__arrow pl-3 group-hover:translate-x-4"></ArrowLeftIcon>
          </button>
        </a>
      </Link>
      <Link href={`/${work.next_post_slug}`}>
        <a className="group absolute -right-12 top-1/2 hidden lg:block">
          <button className="WorkDetails__navigate__button group-hover:scale-125 group-hover:shadow-2xl">
            <ArrowRightIcon className="WorkDetails__navigate__button__arrow pr-3 group-hover:-translate-x-4"></ArrowRightIcon>
          </button>
        </a>
      </Link>

      <div className={"WorkDetails__wrapper w-full"}>
        <div className="flex w-full flex-col lg:flex-row">
          <section
            className={"WorkDetails__description " + (hasCta ? "" : "pb-16")}
          >
            <h1 className="WorkDetails__description__text">
              <p className="break-words">{work.name}</p>
            </h1>

            <section className="mt-16 md:mt-32 lg:hidden">
              <ProjectShowcaseSlider work={work} />
            </section>

            {hasCta && <CallToAction work={work} />}
            <p
              className="WorkDetails__description__body"
              dangerouslySetInnerHTML={{ __html: work.description }}
            ></p>

            <div className="WorkDetails__description__feats">
              <h5 className="font-bold">Key Features</h5>
              <div
                className="WorkDetails__description__feats__list"
                dangerouslySetInnerHTML={{ __html: work.key_features }}
              ></div>
            </div>
          </section>

          <section className="mx-auto mt-16 flex w-full justify-between pb-6 lg:hidden">
            <Link href={`/${work.prev_post_slug}`}>
              <a className="group">
                <button className="WorkDetails__navigate__button shadow-xl group-hover:scale-125">
                  <ArrowLeftIcon className="WorkDetails__navigate__button__arrow"></ArrowLeftIcon>
                </button>
              </a>
            </Link>
            <Link href={`/${work.next_post_slug}`}>
              <a className="group">
                <button className="WorkDetails__navigate__button shadow-xl group-hover:scale-125">
                  <ArrowRightIcon className="WorkDetails__navigate__button__arrow"></ArrowRightIcon>
                </button>
              </a>
            </Link>
          </section>

          <section className={"hidden h-full w-1/2 pb-32 lg:block "}>
            <ProjectShowcaseSlider work={work} />
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

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`${apiUrl}/works/${params.slug}`);
  const work = await res.json();

  return {
    props: { work },
  };
};

// export const getStaticPaths = async () => {
//   const res = await fetch(`${apiUrl}/works/details`);
//   const works = await res.json();

//   const paths = works.map((work) => ({
//     params: { slug: work.slug },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
