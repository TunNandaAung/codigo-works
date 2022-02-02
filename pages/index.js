import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  DeviceMobileIcon,
  DesktopComputerIcon,
  CogIcon,
  ViewGridIcon,
  ArrowRightIcon,
} from "@heroicons/react/outline";
import { works } from "../lib/data";
import { useQueryParam } from "../lib/hooks/useQueryParam";
import { useRouter } from "next/router";

export default function Home() {
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
      <header className="Nav">
        <Link className="relative inline-block" href="/">
          <img
            className="-ml-8 w-28 md:ml-2 md:w-36"
            src="https://www.codigo.co/img/ui/logo-codigo-red.svg"
            alt="codigo"
          />
        </Link>

        <div
          className={
            "MobileNav__bg " +
            (isMenuOpen ? "MobileNav__bg--open" : "MobileNav__bg--close")
          }
        ></div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Hamburger menu"
          className={
            "MobileNav__button " +
            (isMenuOpen ? "border-none bg-transparent" : "bg-brown")
          }
        >
          <div className="MobileNav__button__hamburger">
            <div
              className={
                "MobileNav__button__hamburgerBar " +
                (isMenuOpen ? " w-0 opacity-0" : "")
              }
            ></div>
            <div
              className={
                "MobileNav__button__hamburgerBar " +
                (isMenuOpen
                  ? "rotate-45 transform bg-white"
                  : "bg-transprent mt-1")
              }
            ></div>
            <div
              className={
                "MobileNav__button__hamburgerBar " +
                (isMenuOpen ? "absolute -rotate-45 transform" : "mt-1")
              }
            ></div>
            <div
              className={
                "MobileNav__button__hamburgerBar " +
                (isMenuOpen ? "w-0 opacity-0" : "mt-1")
              }
            ></div>
          </div>
        </button>

        <nav className="relative">
          <ul
            className={
              "MobileNav__items " +
              (isMenuOpen
                ? "MobileNav__items--enter"
                : "MobileNav__items--exit")
            }
          >
            <li>
              <p>Work</p>
            </li>
            <li>
              <p>Solutions</p>
            </li>
            <li>
              <p>Services</p>
            </li>
            <li>
              <p>About Us</p>
            </li>
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>Request a quote</p>
            </li>
            <li>
              <p>{"Let's chat"}</p>
            </li>

            <div
              className={
                "MobileNav__social " +
                (isMenuOpen
                  ? "MobileNav__social--enter"
                  : "MobileNav__social--exit")
              }
            >
              <a
                className="MobileNav__social__item"
                href="https://www.facebook.com/codigo.co"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://www.codigo.co/img/icons/social-facebook-white.svg"
                  height="22"
                  width="12"
                />
              </a>
              <a
                className="MobileNav__social__item"
                href="https:/twitter.com/CodigoApps"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://www.codigo.co/img/icons/social-twitter-white.svg"
                  height="18"
                  width="23"
                />
              </a>
              <a
                className="MobileNav__social__item"
                href="https://instagram.com/hellocodigo"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://www.codigo.co/img/icons/social-instagram-white.svg"
                  height="19"
                  width="21"
                />
              </a>
              <a
                className="MobileNav__social__item"
                href="https://linkedin.com/company/codigo-pte-ltd"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://www.codigo.co/img/icons/social-linkedIn-white.svg"
                  height="20"
                  width="20"
                />
              </a>
            </div>
          </ul>

          <ul className="DesktopNav">
            <li className="DesktopNav__item">
              <Link href="/">Work</Link>
            </li>
            <li className="DesktopNav__item">Solutions</li>
            <li className="DesktopNav__item">Services</li>
            <li className="DesktopNav__item">About Us</li>
            <li className="DesktopNav__item">Blog</li>
            <li>
              <button className="ActionBtn">Request a quote</button>
            </li>
          </ul>
        </nav>
      </header>

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

      <footer className="Footer">
        <section className="Footer__wrapper">
          <h1 className="Footer__header">Let's have a chat</h1>

          <div className="Footer__contact">
            <a className="Footer__contact__item group">
              <h3>
                <span>Build</span>
                <ArrowRightIcon className="Footer__contact__item__icon"></ArrowRightIcon>
              </h3>
              <p className="Footer__contact__item__text">
                Help you build something
              </p>
            </a>
            <a className="Footer__contact__item group">
              <h3>
                <span>Co-incubate</span>
                <ArrowRightIcon className="Footer__contact__item__icon"></ArrowRightIcon>
              </h3>
              <p className="Footer__contact__item__text">
                Co-incubate an idea together
              </p>
            </a>
            <a className="Footer__contact__item group">
              <h3>
                <span>Customise</span>
                <ArrowRightIcon className="Footer__contact__item__icon"></ArrowRightIcon>
              </h3>
              <p className="Footer__contact__item__text">
                Customise a solution for your business
              </p>
            </a>
            <a className="Footer__contact__item group">
              <h3>
                <span>Organise</span>
                <ArrowRightIcon className="Footer__contact__item__icon"></ArrowRightIcon>
              </h3>
              <p className="Footer__contact__item__text">
                Organise learnign session with us
              </p>
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
}
