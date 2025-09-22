import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
function Navbar() {
  //variables
  const MotionLink = motion(Link);
  const navitems = [
    { name: "Home", path: "/" },
    { name: "Getting Started", path: "/getting-started" },
    { name: "Components", path: "/components" },
  ];

  //hooks
  const [active, setActive] = useState(navitems[0].name);

  return (
    <div>
      <div
        className={cn(
          "bg-background/60 relative z-[9999999] shadow-xl ring-2 ring-neutral-800/70",
          "mx-auto mt-2 flex w-full max-w-xl items-center justify-between gap-4 rounded-[9999px] p-4",
          "hidden md:flex",
        )}
      >
        <Logo />
        <div className="flex gap-2">
          {navitems.map((item, index) => (
            <MotionLink
              layoutId="navbar-link"
              className="relative rounded-xl px-2 py-1 "
              to={item.path}
              key={index}
              onClick={() => setActive(item.name)}
            >
              {active === item.name && (
                <div className="absolute inset-0 z-0 h-full w-full rounded-xl bg-neutral-50" />
              )}
              {item.name}
            </MotionLink>
          ))}
        </div>
      </div>
      <HamburgurMenu />
    </div>
  );
}

export default Navbar;

interface HamburgurMenuProps extends ComponentPropsWithoutRef<"div"> {}

const HamburgurMenu = (props: HamburgurMenuProps) => {
  return (
    <div
      {...props}
      className={cn(
        "bg-background/60 flex items-center justify-between", // key change
        "relative z-10 mb-4 w-full p-4 md:hidden", // take full width
        props.className,
      )}
    >
      <Logo />
      <HamburgurSVG />
    </div>
  );
};

const HamburgurSVG = () => {
  return <Menu />;
};

const Logo = () => {
  return (
    <div className="rounded-xl bg-neutral-50 p-1">
      <img className="h-8" src="/nemocn.svg" alt="logo" />
    </div>
  );
};
