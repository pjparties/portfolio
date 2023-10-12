import Head from "next/head";
// import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Avatar from "@/components/Avatar";
import { useState } from "react";
import Contact from "@/components/Contact";
import {SiLeetcode} from "react-icons/si";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Parth Juneja Portfolio</title>
        <meta name="keywords" content="web development, programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-light_bg px-10 md:px-20 lg:px-40 dark:bg-back">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons text-light_front dark:text-fore">
              PJ
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl dark:text-pale"
                />
              </li>
              <li>
                {" "}
                <a
                  className="bg-gradient-to-r from-light_mid2 to-light_accent text-black px-4 py-2 rounded-md ml-8 dark:bg-gradient-to-r dark:from-pale dark:to-calm dark:text-black "
                  href="https://drive.google.com/file/d/1DSsBQ-5B7PWgkvMxHWVFi76wBePdqePO/view?usp=share_link" download={true}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-5">
            <h2 className="text-5xl py-2 font-medium text-light_front md:text-6xl lg:text-8xl dark:text-fore">
              Parth Juneja
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl lg:text-4xl text-light_mid2 dark:text-sand">
              Software Developer
            </h3>
            <p className=" text-md py-5 leading-8 text-light_front md: text-xl mx-auto max-w-xl lg:text-2xl lg:max-w-2xl dark:text-mud">
              Hi, I&apos;m Parth, a software developer / engineer. With the
              help of ML and AI, I can help you create a better experience for
              your users with{" "}
              <span className="text-earth dark:text-pale">
                responsive Websites and Apps
              </span>{" "}
              and <span className="text-earth dark:text-pale">customized Software solutions</span>
              .
            </p>
          </div>
          <div className="text-5xl justify-center flex gap-12 lg:gap-16 py-3 text-light_front dark:text-calm">
            <a href="https://twitter.com/pjparties">
              <AiFillTwitterCircle className="cursor-pointer hover:opacity-60 hover:text-mid2" />
            </a>
            <a href="https://github.com/ParthJuneja">
              <AiFillGithub className="cursor-pointer hover:opacity-60 hover:text-mid2" />
            </a>
            <a href="https://www.linkedin.com/in/parth-juneja-861370211/">
              <AiFillLinkedin className="cursor-pointer hover:opacity-60 hover:text-mid2" />
            </a>
            <a href="https://leetcode.com/rizzouri_garden/">
              <SiLeetcode className="cursor-pointer hover:opacity-60 hover:text-mid2" />
            </a>
          </div>

          <Avatar />
        </section>

        {/* <Services /> */}

        <Skills />

        <Projects />

        <Contact />
      </main>
    </div>
  );
}
