import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";

export default function MainContent() {
  return (
    <div className="w-full space-y-4 lg:w-[60%]">
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
