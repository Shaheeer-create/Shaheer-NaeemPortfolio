import Image from "next/image";
import Link from "next/link";
import React from "react";
import DigitalClock from "../../../public/assests/projects/Digital Clock.jpg";
import GuessTheNumber from "../../../public/assests/projects/GuessTheNumber.jpg";
import WrecksAndBuildsGym from "../../../public/assests/projects/WrecksAndBuildsGym.jpg";

const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              My projects showcase a blend of creativity and functionality.
              <strong>The Digital Clock</strong> is a sleek, responsive
              timepiece with a modern design and smooth animations.
              <strong>Guess the Number</strong> is a fun, interactive game that
              challenges users with an animated interface and playful feedback
              on their guesses.<strong>The Wreck and Build Gym</strong>
              website is a visually striking, animated platform, complete with a
              bold yellow and black theme, designed to promote gym services and
              engage users with interactive forms and cool social media icons.
              Each project highlights my ability to merge aesthetics with coding
              skills, making them both user-friendly and visually appealing.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* projects */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={DigitalClock}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    Digital Clock Projects
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Digital Clock
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    <strong> My Digital Clock </strong>is a sleek, animated
                    web-based clock with a modern black and blue gradient
                    background. Featuring bold, easy-to-read numbers and smooth
                    real-time updates, it adds a touch of style and
                    functionality to any screen.
                  </p>
                  <Link
                    href={"https://digitalclockshaheernaeem.netlify.app/"}
                    target="_blank"
                  >
                    <p className="leading-relaxed text-indigo-400  hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* projects 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={GuessTheNumber}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    GuessTheNumber Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    GuessTheNumber
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    <strong>Guess the Number </strong>is a fun and interactive
                    game where players try to guess a hidden number. Featuring
                    smooth animations, playful feedback for correct and wrong
                    guesses, and a sleek design, the game engages users with an
                    exciting, visually appealing interface. Perfect for both fun
                    and learning!
                  </p>
                  <Link
                    href={"https://guessthenumbermain.netlify.app/"}
                    target="_blank"
                  >
                    <p className="leading-relaxed text-indigo-400  hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Projects 3 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={WrecksAndBuildsGym}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    WrecksAndBuildsGym Projects
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    WrecksAndBuildsGym
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    <strong>Wreck and Build Gym </strong>is a dynamic, animated website
                    designed to promote gym services. With a bold yellow and
                    black theme, it features engaging sections for membership
                    sign-ups, location maps, and cool, animated social media
                    icons. The site is visually striking, with separate animated
                    sections for boys and girls, offering an interactive and
                    modern user experience.
                  </p>
                  <Link
                    href={"https://wreckandbuildgym.netlify.app/"}
                    target="_blank"
                  >
                    <p className="leading-relaxed text-indigo-400  hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
