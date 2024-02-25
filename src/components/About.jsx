import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

import PostHeader from "./PostHeader";
import { FcLike } from "react-icons/fc";

const defaultData = [
  {
    content: "Loading...",
    date: "Jan 1, 2000",
    hashtag: "",
  },
];

export default function About() {
  const [aboutData, setAboutData] = useState(defaultData);
  const about = collection(db, "about");
  const content = aboutData[0].content;
  const date = aboutData[0].date;
  const hashtag = aboutData[0].hashtag;

  async function getAbout() {
    try {
      const data = await getDocs(about);
      setAboutData(data.docs.map((doc) => ({ ...doc.data() })));
    } catch (error) {
      alert("Failed to fetch data. Please try again later.");
    }
  }

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <div id="about" className="space-y-5">
      <div className="space-y-2 rounded-lg bg-background p-4 text-foreground shadow-md">
        <h2 className=" text-xl font-bold">About</h2>
      </div>
      <div className="rounded-lg bg-background text-foreground shadow-md">
        <div className="project-header space-y-2 p-4">
          <PostHeader title="Rodenmhar A. Ismael" date={date} />
          <p className="text-pretty">{content}</p>
        </div>

        <div className="project-footer flex items-start gap-3 p-4">
          <FcLike className="text-2xl" />
          <p className="text-muted-foreground">{hashtag}</p>
        </div>
      </div>
    </div>
  );
}
