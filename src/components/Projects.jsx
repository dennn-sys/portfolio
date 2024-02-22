import ProjectCard from "./ProjectCard";
import { harvest, roms } from "../assets";

export default function Projects() {
  return (
    <div id="projects" className="space-y-5">
      <div className="bg-background text-foreground space-y-2 rounded-lg p-4 shadow-md">
        <h2 className=" text-xl font-bold">Projects</h2>
      </div>
      <ProjectCard
        title="Vertical Harvest"
        date="Jan 8, 2024"
        post="Vertical Harvest is a cutting-edge mobile app designed to streamline
          the lettuce farming process for growers in Zamboanga City. It features
          an advanced environmental monitoring system that measures critical
          factors like temperature, humidity, and light levels, providing
          real-time data analytics and insights. This information empowers farmers
          to make informed decisions about crop management, leading to higher
          productivity and healthier lettuce growth. Vertical Harvest's
          user-friendly interface includes easy-to-understand graphs and alerts,
          ensuring that farmers can take immediate action in response to
          changes in growing conditions."
        image={harvest}
        stack="Arduino, Java, MySQL"
      />
      <ProjectCard
        title="Records Office Information Management System"
        date="May 5, 2023"
        post="The Records Office Information Management System (ROIMS) is a
          streamlined solution developed to enhance the data recording and
          archiving processes at Western Mindanao State University's Records and
          Archive Office in Zamboanga City. It's designed to boost efficiency
          and accuracy by addressing identified limitations and requirements.
          ROIMS provides flexible database storage, allowing for infinite
          entries and facilitating efficient searches through name or order
          number inputs. It categorizes orders, attaches relevant files, and
          manages user access control via a user-friendly interface. ROIMS aims
          to optimize the office's workflow, meet client needs, enhance
          searchability, and improve overall user experience."
        image={roms}
        stack="HTML, CSS, Javascript, PHP, MySQL"
      />
    </div>
  );
}
