import { FaGithub } from "react-icons/fa";
import { logo } from "../assets";

export default function Topbar() {
  return (
    <div className="z-20 flex h-10 w-full items-center justify-between bg-background px-4 text-foreground shadow-md lg:h-14">
      <div className=" flex size-[30px] items-center justify-center rounded-full bg-blue-500 text-white">
        <a
          href="https://dennn-sys.github.io/cms"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logo} alt="logo" className="" />
        </a>
      </div>

      <div className="flex items-center gap-2">
        <a href="https://github.com/dennn-sys" target="_blank" rel="noreferrer">
          <FaGithub className="text-3xl" />
        </a>
      </div>
    </div>
  );
}
