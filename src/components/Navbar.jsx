const navItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Photos",
    href: "#photos",
  },
  {
    name: "Projects",
    href: "#projects",
  },

  {
    name: "Skills",
    href: "#skills",
  },
];

export default function Navbar() {
  return (
    <nav className="flex h-[70px] w-full items-center gap-1">
      {navItems.map((navItem) => (
        <a
          key={navItem.name}
          href={navItem.href}
          className="relative whitespace-nowrap"
        >
          <div className="active:text-primary text-muted-foreground hover:bg-muted before:bg-primary flex h-[50px] items-center rounded-md p-4 font-bold outline-none before:absolute before:bottom-[-10px] before:left-0 before:right-0 before:h-[4px] before:scale-x-0 before:transition before:ease-in-out  before:focus:scale-x-100 active:bg-transparent before:active:scale-x-100">
            {navItem.name}
          </div>
        </a>
      ))}
    </nav>
  );
}
