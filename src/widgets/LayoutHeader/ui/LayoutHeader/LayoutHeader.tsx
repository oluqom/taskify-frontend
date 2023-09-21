import { FC } from "react";
import { Menu, Logo, Add } from "@/widgets";

const LayoutHeader: FC = () => {
  return (
    <>
      <header>
        <nav className="!container navbar bg-base-100">
          <Menu
            links={[
              { name: "Homepage", href: "/" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "About", href: "/about" },
            ]}
          />
          <Logo yellowLogoName={"Task"} logoName={"ify"} />
          <Add />
        </nav>
      </header>
    </>
  );
};

export default LayoutHeader;
