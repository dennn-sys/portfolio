import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { FcLike } from "react-icons/fc";
import PostHeader from "./PostHeader";

const defaultData = {
  date: "Jan 1, 2000",
  introduction: "Loading...",
  items: ["skill 1", "skill 2", "skill 3"],
  paragraph: "My skills",
  hashtag: "",
};

export default function Skills() {
  const [skillsData, setSkillsData] = useState(defaultData);
  const date = skillsData.date;
  const introduction = skillsData.introduction;
  const items = skillsData.items;
  const paragraph = skillsData.paragraph;
  const hashtag = skillsData.hashtag;

  useEffect(() => {
    const getSkills = async () => {
      const skills = collection(db, "skills");
      try {
        const data = await getDocs(skills);
        const dataArr = data.docs.map((doc) => ({ ...doc.data() }));
        setSkillsData(dataArr[0]);
      } catch (error) {
        alert(error);
      }
    };
    getSkills();
  }, []);

  return (
    <div id="skills" className="space-y-5">
      <div className="space-y-2 rounded-lg bg-background p-4 text-foreground shadow-md">
        <h2 className=" text-xl font-bold">Skills</h2>
      </div>
      <div className="rounded-lg bg-background text-foreground shadow-md">
        <div className="project-header space-y-2 p-4">
          <PostHeader title="Rodenmhar A. Ismael" date={date} />
          <p className="text-pretty">{introduction}</p>
          <ul className="list-inside list-disc pl-4">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-pretty">{paragraph}</p>
        </div>
        <div className="project-footer flex items-start gap-3 p-4">
          <FcLike className="text-2xl" />
          <p className="text-muted-foreground">{hashtag}</p>
        </div>
      </div>
    </div>
  );
}
