import { FC } from "react";
import { Logo } from "../../model/types";

const Logo: FC<Logo> = ({ yellowLogoName, logoName }: Logo) => {
  return (
    <div className="navbar-center h-20">
      <a className="btn-primary btn gap-0 text-2xl font-semibold normal-case text-white">
        <span className="text-yellow">{yellowLogoName}</span>
        {logoName}
      </a>
    </div>
  );
};

export default Logo;
