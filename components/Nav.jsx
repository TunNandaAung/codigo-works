import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const Nav = ({ shouldDisplayLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="Nav">
      {shouldDisplayLinks ? (
        <Link className="relative inline-block" href="/">
          <img
            className="-ml-8 w-28 md:ml-2 md:w-36"
            src="https://www.codigo.co/img/ui/logo-codigo-red.svg"
            alt="codigo"
          />
        </Link>
      ) : (
        <Link className="relative inline-block" href="/">
          <div className="-ml-8 flex items-center justify-center space-x-4 md:ml-2">
            <ArrowLeftIcon className="text-red h-4 w-4"></ArrowLeftIcon>
            <p className="DesktopNav__item ">Back to works</p>
          </div>
        </Link>
      )}

      <div
        className={
          "MobileNav__bg " +
          (isMenuOpen ? "MobileNav__bg--open" : "MobileNav__bg--close")
        }
      ></div>

      <HamburgerButton
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />

      <nav className="relative">
        <MobileNav
          shouldDisplayLinks={shouldDisplayLinks}
          isMenuOpen={isMenuOpen}
        />

        <DesktopNav shouldDisplayLinks={shouldDisplayLinks} />
      </nav>
    </header>
  );
};

const DesktopNav = ({ shouldDisplayLinks }) => {
  const router = useRouter();

  return (
    <ul className="DesktopNav">
      {shouldDisplayLinks && (
        <>
          {" "}
          <li className="DesktopNav__item">
            <Link href="/">
              <span className={router.pathname == "/" ? "font-bold" : ""}>
                Work
              </span>
            </Link>
          </li>
          <li className="DesktopNav__item">Solutions</li>
          <li className="DesktopNav__item">Services</li>
          <li className="DesktopNav__item">About Us</li>
          <li className="DesktopNav__item">Blog</li>
        </>
      )}
      <li>
        <button className="ActionBtn">Request a quote</button>
      </li>
    </ul>
  );
};

const HamburgerButton = ({ onClick, isMenuOpen }) => {
  return (
    <button
      onClick={onClick}
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
            (isMenuOpen ? "rotate-45 transform bg-white" : "bg-transprent mt-1")
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
  );
};

const MobileNav = ({ shouldDisplayLinks, isMenuOpen }) => {
  return (
    <ul
      className={
        isMenuOpen
          ? "MobileNav__items MobileNav__items--enter"
          : "MobileNav__items--exit hidden"
      }
    >
      {shouldDisplayLinks && (
        <>
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
        </>
      )}

      <li>
        <p>Request a quote</p>
      </li>
      <li>
        <p>{"Let's chat"}</p>
      </li>

      <div
        className={
          "MobileNav__social " +
          (isMenuOpen ? "MobileNav__social--enter" : "MobileNav__social--exit")
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
  );
};

export default Nav;
