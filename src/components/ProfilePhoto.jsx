import React from "react";
import { avatar } from "../assets";

export default function ProfilePhoto({ avatar }) {
  return (
    <div className="size-[180px] overflow-clip rounded-full bg-red-200 text-center ring-[10px] ring-background">
      <img src={avatar} alt="profile picture" />
    </div>
  );
}

export function ProfileSmall() {
  return (
    <div className="size-[42px] overflow-clip rounded-full bg-red-200 text-center">
      <img src={avatar} alt="profile picture" />
    </div>
  );
}
