import { FaGithub } from "react-icons/fa";
import { logo } from "../assets";

export default function Topbar() {
  return (
    <div className="flex h-10 w-full justify-center bg-background text-foreground shadow-md lg:h-14">
      <div className="flex w-full max-w-[2560px] items-center justify-between px-4">
        <div className=" flex size-[30px] items-center justify-center">
          <a
            href="https://dennn-sys.github.io/cms"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/dennn-sys"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
