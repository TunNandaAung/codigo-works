import Head from "next/head";
import Image from "next/image";
import { works } from "../lib/data";

export default function Home() {
  const tags = [
    { title: "All", slug: "all" },
    { title: "Food & Beverage", slug: "food-and-beverage" },
    { title: "Media", slug: "media" },
    { title: "Transport & Logistics", slug: "trnasport-and-logistics" },
    { title: "Banking & Finance", slug: "banking-and-finance" },
    { title: "Lifestyle", slug: "lifestyle" },
    { title: " Co-incubation", slug: "co-incubation" },
    { title: "Healthcare", slug: "healthcare" },
    { title: " Retail & Entertainment", slug: "retail-and-entertainment" },
    { title: "Telco", slug: "telco" },
    { title: "Others", slug: "others" },
    { title: "Start-ups", slug: "start-ups" },
  ];

  return (
    <div>
      <header className="py-8 px-12 flex justify-between items-center">
        <div>Logo</div>

        <nav>
          <ul className="flex items-center justify-center space-x-12 text-sm">
            <li>Work</li>
            <li>Solutions</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>
              <button className="rounded-full py-3.5 font-semibold px-6 bg-quote text-white flex items-center justify-center transition-transform duration-300 hover:scale-105 shadow-md">
                Request a quote
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <section className="mx-44 w-3/4 mt-32">
        <h1 className="Work__hero">
          <p>Here’s 5% of</p>
          <p>our published work.</p>
          <p className="text-red"> See 100% of our power.</p>
        </h1>
      </section>

      <section className="Work__tags">
        <div className="w-8/12">
          <div className="grid grid-cols-3 gap-x-0.5 gap-y-5">
            {tags.map((tag) => (
              <div className="Work__tags__item is-active">
                <div className="Work__tags__item__text">{tag.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-xs">
          <p className="font-bold">LEGEND</p>
          <div className="border-l border-gray-700 grid grid-cols-2 pl-4 py-2 gap-x-8 gap-y-5 mt-3">
            <p>APP</p>
            <p>WEB</p>
            <p>CMS</p>
            <p>UI/UX</p>
          </div>
        </div>
      </section>

      <section className="Work__gallery">
        {works.map((work) => (
          <div
            className={
              (work.should_span ? "col-span-2" : "") +
              " Work__gallery__item group"
            }
          >
            <img
              src={work.images.normal}
              alt=""
              className="absolute w-full h-full inset-0 object-cover transition
                    duration-1000 filter group-hover:scale-110"
            />
            <div class="absolute inset-x-8 text-white">
              <p class="text-sm font-medium uppercase tracking-wider mb-2">
                {work.tags && work.tags.map((tag) => tag.name)}
              </p>
              <h2 class="text-2xl font-bold">{work.name}</h2>
            </div>
            <div
              className=" absolute inset-0 w-full h-full bg-black bg-opacity-0 transition
                    duration-500 group-hover:bg-opacity-30"
            ></div>

            <button className="absolute inset-x-5 bottom-8 py-3 px-2 rounded-2xl font-semibold bg-white shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block">
              Learn more
            </button>
          </div>
        ))}
      </section>

      <footer className="bg-[#fafafa]">
        <section className="pt-20 pb-12 flex flex-col items-center justify-center">
          <h1 className="text-4xl leading-[4rem] font-bold text-center text-red mb-16">
            Let's have a chat
          </h1>

          <div className="grid grid-cols-4 gap-12">
            <a className="text-3xl leading-[4rem] font-bold mb-16 border-r border-gray-300 py-2 pr-8">
              Build
              <p className="text-sm text-gray-800 font-normal -mt-2">
                Help you build something
              </p>
            </a>
            <a className="text-3xl leading-[4rem] font-bold mb-16 border-r border-gray-300 py-2 pr-8">
              Co-incubate
              <p className="text-sm text-gray-800 font-normal -mt-2">
                Co-incubate an idea together
              </p>
            </a>
            <a className="text-3xl leading-[4rem] font-bold mb-16 border-r border-gray-300 py-2 pr-8">
              Customise
              <p className="text-sm text-gray-800 font-normal -mt-2">
                Customise a solution for you business
              </p>
            </a>
            <a className="text-3xl leading-[4rem] font-bold mb-16 border-gray-300 py-2">
              Organise
              <p className="text-sm text-gray-800 font-normal -mt-2">
                Organise learning session with us
              </p>
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
}
