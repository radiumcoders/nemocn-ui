import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { motion } from "motion/react";
import { Menu } from "lucide-react";

function Navbar() {
  const navitems = ["home", "getting-started", "components"];
  return (
    <div>
      <div
        className={cn(
          "bg-background/60 relative z-[9999999] shadow-xl ring-2 ring-neutral-800/70",
          "flex md:mx-auto md:mt-2 md:max-w-xl md:gap-4 md:rounded-[9999px] md:p-4",
          "hidden md:block",
        )}
      >
        {navitems.map((item) => (
          <Link to="/components">{item}</Link>
        ))}
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
        "relative z-10 w-full p-4 mb-4 md:hidden", // take full width
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
  return <div>Logo</div>;
};
