import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

import ProfilePhoto from "./ProfilePhoto";
import { Link } from "./Link";
import { LuMail, LuDownloadCloud } from "react-icons/lu";
import { BsPatchCheckFill } from "react-icons/bs";
import { defaultAvatar } from "../assets";

const defaultData = [
  {
    address: " ",
    avatar: defaultAvatar,
    cover: " ",
    email: " ",
    id: " ",
    name: "Den-sys",
    phone: " ",
    resume: " ",
    school: " ",
    title: " ",
  },
];

export default function Header() {
  const [profileData, setProfileData] = useState(defaultData);
  const profile = collection(db, "profile");
  const avatar = profileData[0].avatar;
  const name = profileData[0].name;
  const resume = profileData[0].resume;
  const title = profileData[0].title;

  async function getProfile() {
    try {
      const data = await getDocs(profile);
      setProfileData(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })),
      );
    } catch (error) {
      alert("Failed to fetch data. Please try again later.");
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="flex w-full flex-col items-center  justify-center gap-4 border-b-2  pb-8 lg:h-[116px] lg:translate-y-0 lg:flex-row lg:items-end lg:gap-0">
      <div className="flex h-[90px] items-end lg:mr-4 lg:h-[180px] lg:translate-y-[15px]">
        <ProfilePhoto avatar={avatar} />
      </div>

      <div className=" flex-grow text-center lg:mr-4 lg:justify-end lg:text-left">
        <h1 className="mr-2 inline text-4xl font-bold text-foreground">
          {name}
        </h1>
        <BsPatchCheckFill className="relative top-[-4px] inline text-[--blue]" />
        <span className="block">{title}</span>
      </div>

      <div className="flex min-w-[262px] flex-grow items-end justify-center gap-4 lg:justify-end">
        <Link
          className="bg-muted text-muted-foreground"
          href={resume}
          target="_blank"
          rel="noreferrer"
        >
          <LuDownloadCloud />
          <span>My Resume</span>
        </Link>
        <Link>
          <LuMail />
          <span>Message</span>
        </Link>
      </div>
    </div>
  );
}
