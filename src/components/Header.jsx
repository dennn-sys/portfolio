import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

import Topbar from "./Topbar";
import CoverPhoto from "./CoverPhoto";
import Profile from "./Profile";
import { defaultAvatar } from "../assets";

const defaultData = [
  {
    avatar: defaultAvatar,
    cover: "",
    name: "Denn-sys",
    resume: "",
    title: "Loading...",
  },
];

export default function Header() {
  const [profileData, setProfileData] = useState(defaultData);
  const profile = collection(db, "profile");
  const avatar = profileData[0].avatar;
  const cover = profileData[0].cover;
  const name = profileData[0].name;
  const resume = profileData[0].resume;
  const title = profileData[0].title;

  async function getProfile() {
    try {
      const data = await getDocs(profile);
      setProfileData(data.docs.map((doc) => ({ ...doc.data() })));
    } catch (error) {
      alert("Failed to fetch data. Please try again later.");
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="flex h-fit w-full justify-center bg-background ">
      <div className="flex h-fit max-w-[1366px] flex-grow flex-col items-center">
        <Topbar />
        <CoverPhoto cover={cover} />
        <div className="w-full max-w-[1302px] px-5">
          <Profile avatar={avatar} name={name} resume={resume} title={title} />
        </div>
      </div>
    </div>
  );
}
