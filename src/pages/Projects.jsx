import CHATBOT from "../assets/chatbot.png";
import ProjectCard from "../components/ProjectCard";
import WEATHER from "../assets/weather.png";
import TODO from "../assets/to-do.png";

function Projects() {
  return (
    <div className="grid gap-3 m-5 mb-2 md:grid-cols-2 lg:grid-cols-3">
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
        tech={["React", "Tailwind", "API"]}
        github="https://github.com/Bajimastanshaik/Weather_app"
        demo="https://weather-app-37.vercel.app/"
      />
      <ProjectCard
        image={TODO}
        title="To-Do List"
        description="A clean and simple to-do list app built with React and Tailwind. You can add tasks, check them off when done, filter between active and completed, and keep your day organized with ease."
        tech={["React", "Tailwind", "JAVASCRIPT"]}
        github="https://github.com/Bajimastanshaik/To-Do-list"
        demo="https://to-do-list--90.vercel.app/"
      />
    
    </div>
  );
}

export default Projects;
