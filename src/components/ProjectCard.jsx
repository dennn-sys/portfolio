import { FcLike } from "react-icons/fc";
import { ProfileSmall } from "./ProfilePhoto";

export default function ProjectCard({ title, date, post, image, stack }) {
  return (
    <div className="bg-background text-foreground rounded-lg shadow-md">
      <div className="project-header space-y-2 p-4">
        <div className="flex items-start gap-3">
          <ProfileSmall />
          <div>
            <h3 className=" inline font-bold">{title}</h3>
            <p className="text-muted-foreground text-sm">{date}</p>
          </div>
        </div>
        <p className="text-pretty">{post}</p>
      </div>
      <img src={image} alt="img" className="object-contain" />
      <div className="project-footer flex items-start gap-3 p-4">
        <FcLike className="text-2xl" />
        <p className="text-muted-foreground">{stack}</p>
      </div>
    </div>
  );
}
