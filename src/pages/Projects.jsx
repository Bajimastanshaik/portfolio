import CHATBOT from "../assets/chatbot.png";
import ProjectCard from "../components/ProjectCard";
import WEATHER from "../assets/weather.png";

function Projects() {
  return (
    <div className="flex gap-3 m-5">
      <ProjectCard
        image={CHATBOT}
        title="ChatBot Application"
        description= "  AI-powered chatbot built with Gemini and React that feels natural to talk to. It’s simple, responsive, and designed to make conversations smooth and engaging."
        tech={["React", "Tailwind", "javaScript"]}
        github="https://github.com/Bajimastanshaik/ChatBot"
        demo="https://zoro-ai-chatbot.netlify.app/"
      />
      <ProjectCard
        image={WEATHER}
        title="Weather App"
        description="A sleek weather app built with React, Tailwind CSS, and a weather API to show real-time conditions in a clean and responsive design."
        tech={["React", "Tailwind", "Framer Motion"]}
        github="https://github.com/Bajimastanshaik/Weather_app"
        demo="https://weather-app-37.vercel.app/"
      />
      <ProjectCard
        image="https://source.unsplash.com/random/800x600?website"
        title="Portfolio Website"
        description="A modern and responsive portfolio website built with React, Tailwind CSS, and Framer Motion."
        tech={["React", "Tailwind", "Framer Motion"]}
        github="https://github.com/yourusername/portfolio"
        demo="https://yourportfolio.com"
      />
      <ProjectCard
        image="https://source.unsplash.com/random/800x600?website"
        title="Portfolio Website"
        description="A modern and responsive portfolio website built with React, Tailwind CSS, and Framer Motion."
        tech={["React", "Tailwind", "Framer Motion"]}
        github="https://github.com/yourusername/portfolio"
        demo="https://yourportfolio.com"
      />
      <ProjectCard
        image="https://source.unsplash.com/random/800x600?website"
        title="Portfolio Website"
        description="A modern and responsive portfolio website built with React, Tailwind CSS, and Framer Motion."
        tech={["React", "Tailwind", "Framer Motion"]}
        github="https://github.com/yourusername/portfolio"
        demo="https://yourportfolio.com"
      />
    </div>
  );
}

export default Projects;
