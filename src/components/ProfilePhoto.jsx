import React from "react";
import { avatar } from "../assets";
import { cn } from "../lib/utils";

export default function ProfilePhoto({ avatar, variant }) {
  let style;

  if (variant === "main") {
    style = "size-[180px] ring-[10px] ring-background";
  } else if (variant === "post") {
    style = "size-[42px]";
  }

  return (
    <div
      className={cn("overflow-clip rounded-full bg-red-200 text-center", style)}
    >
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
