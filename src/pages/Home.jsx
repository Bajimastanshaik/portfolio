import { TypeAnimation } from "react-type-animation";
import React from "react";
import { CornerRightDown, Github, Linkedin } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-5 sm:px-10 md:px-16 lg:px-15 mt-16">
      
      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
          Hello, I'm
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl">Baji Mastan Shaik</h3>

        <p className="text-xl sm:text-2xl">
          and I&apos;m a
          <span className="ml-1">
            <TypeAnimation
              sequence={[
                " Front-end developer",
                1000,
                " Back-end developer",
                1000,
                " Web developer",
                1000,
                " Full-Stack developer",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                display: "inline-block",
                color: "blue",
              }}
            />
          </span>
        </p>

        <div className="pt-6 text-sm sm:text-base leading-relaxed">
          <p>
            A passionate Full Stack web developer who enjoys building clean and
            responsive websites and applications. I'm always eager to learn new
            technologies and build useful, user-friendly solutions.
          </p>
        </div>

        
        <div className="mt-6 space-y-4">
          <p>
            Github profile:
            <a
              href="https://github.com/Bajimastanshaik"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-block hover:text-blue-400"
            >
              <Github className="inline" />
            </a>
          </p>
          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/baji-mastan/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-block hover:text-blue-400"
            >
              <Linkedin className="inline" />
            </a>
          </p>
          <p>
            To download my Resume. Click here
            <CornerRightDown className="inline ml-1" />
          </p>

          <button className="px-5 py-2 rounded-3xl mt-4 bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/50 hover:bg-blue-600 transition">
            <a href="/Bajimastanshaik.pdf" download>
              Download My Resume
            </a>
          </button>
        </div>
      </div>

      
      <div className="flex justify-center items-center w-full md:w-1/2">
        <DotLottieReact
          className="w-60 sm:w-80 md:w-[400px] lg:w-[500px]"
          src="https://lottie.host/7a7cbd2f-9059-428b-8b7b-4b2a0600898c/Luf48noZgs.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
}

export default Home;
