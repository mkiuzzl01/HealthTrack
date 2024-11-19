import Link from "next/link";
import React, { ReactNode } from "react";

interface SubMenuProps {
  link: ReactNode;
  routeName: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ link, routeName }) => {
  return (
    <div>
      <li>
        <Link href={routeName}>{link}</Link>
      </li>
    </div>
  );
};

export default SubMenu;
