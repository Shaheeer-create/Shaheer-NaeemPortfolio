"use client";
import Image from "next/image";
import React from "react";
import hero1 from "../../../public/assests/image/hero1.jpg";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello I Am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "UI/UX Designers",
                  "MS Office Expert",
                  "Power BI Expert",
                  "Data Analysis",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="h-[0.1rem] w-[100px] bg-slate-400"> </div>

          <p className="mb-8 leading-relaxed">
            My name is <strong>Shaheer Naeem</strong>, and I’m a front-end developer
            concentrating on building fast, modern, user-centric websites. I
            possess skills in languages like HTML, CSS, JavaScript, and
            TypeScript, and further incorporate and deepen the knowledge with
            frameworks react.js, next.js as well as back end technologies such
            as Python, SQL. I have good knowledge of Web designing principles
            and always have a creative insight while Designing responsive
            interfaces with several platforms in hand. I adhere to the
            principles of writing clean code, pursuing the task detailed and aim
            to achieve dynamic web applications without any glitches for the
            end-user. Thank you for reading and I welcome your comments for we
            can share more ways on how you can stay up-to-date with modern
            designs. I am also active on quite a number of social networks
            mostly professionally and try to implement new things. With due
            regard to the foregoing, I am a young specialist who is able to
            conjure only the most basic principles and with the proper design of
            the crowd will fully expand their abilities. Let’s combine our ideas
            with technology and design to realize them.
          </p>
          <div className="flex justify-center">
            <Link href="#Contact">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-[26rem] h-[15rem]"
            alt="hero"
            height={600}
            width={700}
            src={hero1}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
