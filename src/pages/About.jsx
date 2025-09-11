import React from "react";
import { MoveRight } from "lucide-react";
import Card from "../components/Card";
import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import JAVA from "../assets/java.svg";
import TAILWIND from "../assets/tailwind.svg";
import SQL from "../assets/sql.svg";
import REACT from "../assets/React.png";
import JS from "../assets/JS.svg";

function About() {
  const techStack = [
    {
      title: "HTML",
      image: HTML,
    },
    { title: "CSS", image: CSS },
    { title: "JS", image: JS },
    { title: "TAILWIND", image: TAILWIND },
    { title: "REACT", image: REACT },
    { title: "SQL", image: SQL },
    { title: "JAVA", image: JAVA },
  ];
  return (
    <div className=" m-5 sm:m-10">
      <h2 className="flex   justify-center text-2xl sm:text-3xl underline mb-6 text-shadow-sm/20">
        About ME
      </h2>
      <div className=" rounded-3xl p-6 sm:p-10 bg-white/5 backdrop-blur-sm border border-white/20 shadow-md">
        <p className="text-base sm:text-lg leading-relaxed">
          I’m Baji Mastan Shaik, a Java Full Stack Developer with a solid
          foundation in building full-stack web applications using Java,
          JavaScript, React.js, HTML, CSS, and SQL. I bring hands-on experience
          from my internship at Brain O Vision, where I contributed to
          developing responsive and user-focused web applications in an agile
          environment. My academic background in Computer Science Engineering
          has equipped me with a strong grasp of both front-end and back-end
          technologies, along with database management.
        </p>
        <br />
        <p className="mt-4 text-sm sm:text-base">
          <b>Location</b> : Hyderabad,India.
        </p>

        <div className="mt-6">
          <p className="text-lg sm:text-2xl mb-3">
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="text-sm sm:text-base space-y-2">
            <li className="flex items-center gap-2">
              <MoveRight size={18} /> Playing Games
            </li>
            <li className="flex items-center gap-2">
              <MoveRight size={18} /> Watching Anime
            </li>
            <li className=" flex items-center gap-2">
              <MoveRight size={18} /> Travelling
            </li>
            <li className="flex items-center gap-2">
              <MoveRight size={18} /> Reading comics
            </li>
          </ul>
        </div>
        <p className="font-extrabold underline">TechStack:</p>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {techStack.map((val, ind) => (
            <Card key={ind} title={val.title} image={val.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
