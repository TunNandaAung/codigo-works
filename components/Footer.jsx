import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/outline";

const Footer = () => {
  return (
    <footer className="Footer">
      <section className="Footer__wrapper">
        <h1 className="Footer__header">{"Let's have a chat"}</h1>

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

      <section className="mb-12 mt-6 lg:-mt-12">
        <div className="flex items-center justify-center space-x-10">
          <a
            className="MobileNav__social__item"
            href="https://www.facebook.com/codigo.co"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://www.codigo.co/img/icons/social-facebook.svg"
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
              src="https://www.codigo.co/img/icons/social-twitter.svg"
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
              src="https://www.codigo.co/img/icons/social-instagram.svg"
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
              src="https://www.codigo.co/img/icons/social-linkedIn.svg"
              height="20"
              width="20"
            />
          </a>
        </div>
        <div className="mt-6 flex flex-col space-y-3 text-center text-sm">
          <p>Copyright © Codigo - Mobile App Developer Singapore</p>
          <p>
            +65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore
            573970
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
