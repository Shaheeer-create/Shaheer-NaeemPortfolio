"use client"
import Image from "next/image";
import logo from "../../../public/assests/image/logo.jpg";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="hero"
              src={logo}
              width={400}
              height={400}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              About Me
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["Im Shaheer Naeem","Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-5 leading-relaxed">
              A passionate and driven front-end developer with a knack for
              creating highly interactive and visually stunning web
              applications. I specialize in HTML, CSS, JavaScript, and
              TypeScript, and I’m constantly learning new technologies like
              React.js, Next.js, Python, and SQL to stay ahead in the
              ever-evolving world of web development. With a strong foundation
              in design and animation, I love turning ideas into functional,
              beautiful, and user-friendly digital experiences. Whether it’s
              building sleek portfolios, dynamic games, or complex interfaces, I
              always aim for perfection in every pixel. When I’m not coding,
              you’ll find me brainstorming new ideas, exploring the latest tech
              trends, or refining my skills through exciting personal projects.
              My goal is to continue growing as a developer and make a positive
              impact through my work. Let’s build something amazing together!
            </p>
            <div className="flex justify-center">
                <Link target="_blank" href={"/assests/cv/MyCv.pdf"}>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                View CV
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
