import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  DeviceMobileIcon,
  DesktopComputerIcon,
  CogIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import { works } from "../lib/data";
import { useQueryParam } from "../lib/hooks/useQueryParam";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import MetaTags from "../components/MetaTags";

const Home = () => {
  const tags = [
    { title: "All", slug: "all" },
    { title: "Food & Beverage", slug: "food-and-beverage" },
    { title: "Media", slug: "media" },
    { title: "Transport & Logistics", slug: "transport-and-logistics" },
    { title: "Banking & Finance", slug: "banking-finance" },
    { title: "Lifestyle", slug: "lifestyle" },
    { title: " Co-incubation", slug: "co-incubation" },
    { title: "Healthcare", slug: "healthcare" },
    { title: " Retail & Entertainment", slug: "retail-and-entertainment" },
    { title: "Telco", slug: "telco" },
    { title: "Others", slug: "others" },
    { title: "Start-ups", slug: "start-ups" },
  ];

  const router = useRouter();
  const tagParam = useQueryParam("tag");
  const [selectedTag, setSeletedTag] = useState(tagParam || "all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredWorks = () => {
    return selectedTag === "all"
      ? works
      : works.filter((work) => {
          return work.tags.some((tag) => tag.slug === selectedTag);
        });
  };

  useEffect(() => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, tag: selectedTag },
      },
      undefined,
      { scroll: false, shallow: false }
    );
  }, [selectedTag]);

  const getRoleIcon = (role) => {
    switch (role) {
      case "app":
        return <DeviceMobileIcon className="h-5 w-5" />;
      case "web":
        return <DesktopComputerIcon className="h-5 w-5" />;
      case "cms":
        return <CogIcon className="h-5 w-5" />;
      case "uiux":
        return <ViewGridIcon className="h-5 w-5" />;
    }
  };

  return (
    <div>
      <MetaTags title="Our iOS, Android & Web Developement Works" />
      <section className="Work__hero">
        <h1 className="Work__hero__text break-words">
          <p>Here’s 5% of </p>
          <p>
            our <br className="block sm:hidden" />
            published work.
          </p>

          <p className="text-red"> See 100% of our power.</p>
        </h1>
      </section>

      <section className="Work__tags">
        <div className="w-full lg:w-10/12 xl:w-8/12">
          <div className="grid grid-cols-3 gap-x-0.5 gap-y-3">
            {tags.map((tag) => (
              <div
                key={tag.slug}
                className={
                  "Work__tags__item " +
                  (selectedTag === tag.slug ? "is-active" : "")
                }
              >
                <a
                  className="Work__tags__item__text"
                  onClick={() => setSeletedTag(tag.slug)}
                >
                  {tag.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <section className="Work__legend">
          <div className="uppercase">
            <p className="font-bold">LEGEND</p>
            <div className="Work__legend__wrapper">
              <p>
                <DeviceMobileIcon className="h-4 w-4"></DeviceMobileIcon>
                <span>APP</span>
              </p>
              <p>
                <DesktopComputerIcon className="h-4 w-4"></DesktopComputerIcon>
                <span>WEB</span>
              </p>
              <p>
                <CogIcon className="h-4 w-4"></CogIcon>
                <span>CMS</span>
              </p>
              <p>
                <ViewGridIcon className="h-4 w-4"></ViewGridIcon>
                <span>UI/UX</span>
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="Work__gallery">
        {filteredWorks().map((work, index) => (
          <div
            key={work.slug + index}
            className={
              (work.should_span ? "col-span-2" : "") +
              " Work__gallery__item group"
            }
          >
            <img
              src={work.images.normal}
              alt={work.name}
              className="Work__gallery__image"
            />
            <div className="absolute inset-x-8 text-white">
              <p className="Work__gallery__tag">
                {work.tags && work.tags.map((tag) => tag.name).join(", ")}
              </p>
              <h2 className="Work__gallery__title">{work.name}</h2>
            </div>

            <div className="absolute inset-x-5 bottom-6 py-3 px-2">
              <div className="flex items-center space-x-2">
                {work.roles &&
                  work.roles.map((role) => {
                    return (
                      <div
                        key={role.slug}
                        className="rounded-full bg-white p-1"
                      >
                        {getRoleIcon(role.slug)}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
