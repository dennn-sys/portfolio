import Projects from "./Projects";
import About from "./About";

export default function MainContent() {
  return (
    <div className="w-full space-y-4 lg:w-[60%]">
      <About />
      <Projects />
    </div>
  );
}
