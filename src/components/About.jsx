import { ProfileSmall } from "./ProfilePhoto";
import { FcLike } from "react-icons/fc";

export default function About() {
  return (
    <div id="about" className="space-y-5">
      <div className="bg-background text-foreground space-y-2 rounded-lg p-4 shadow-md">
        <h2 className=" text-xl font-bold">About</h2>
      </div>
      <div className="bg-background text-foreground rounded-lg shadow-md">
        <div className="project-header space-y-2 p-4">
          <div className="flex items-start gap-3">
            <ProfileSmall />
            <div>
              <h3 className=" inline font-bold">Rodenmhar A. Ismael</h3>
              <p className="text-muted-foreground text-sm">Feb 21, 2024</p>
            </div>
          </div>
          <p className="text-pretty">
            I am an IT student with an insatiable curiosity for technology and a
            firm commitment to continuous improvement. While I am currently
            developing my programming and coding skills, I possess a strong
            foundation in information technology. With a diligent work ethic and
            a keen appetite for learning, I eagerly welcome new challenges as
            opportunities for both personal and professional growth.
          </p>
        </div>

        <div className="project-footer flex items-start gap-3 p-4">
          <FcLike className="text-2xl" />
          <p className="text-muted-foreground">#WMSU #BSIT #2024</p>
        </div>
      </div>
    </div>
  );
}
