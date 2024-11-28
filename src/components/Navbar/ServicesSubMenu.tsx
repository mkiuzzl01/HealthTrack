"use client";
import Menu from "@mui/material/Menu";
import Link from "next/link";

export default function ServicesSubMenu({
  setAnchorEl,
  anchorEl,
  pathname,
}: any) {
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
      >
        <ul onClick={handleClose} className="p-2">
          <li className={pathname == "/laboratory" ? "border-b-blue-600 border-b-2" : ""}>
            <Link href={"/laboratory"}>Laboratory</Link>
          </li>
          <li className={pathname == "/bloodBank" ? "border-b-blue-600 border-b-2" : ""}>
            <Link href={"/bloodBank"}>Blood Bank</Link>
          </li>
          <li className={pathname == "/childCare" ? "border-b-blue-600 border-b-2" : ""}>
            <Link href={"/childCare"}>Child Care</Link>
          </li>
          <li className={pathname == "/oldAgeCare" ? "border-b-blue-600 border-b-2" : ""}>
            <Link href={"/oldAgeCare"}>OldAge Care</Link>
          </li>
          <li className={pathname == "/education" ? "border-b-blue-600 border-b-2" : ""}>
            <Link href={"/education"}>Education</Link>
          </li>
          <li className={pathname == "/healthPackage" ? "border-b-blue-600 border-b-2" : ""}>
            <Link href={"/healthPackage"}>Health Package</Link>
          </li>
        
        </ul>
      </Menu>
    </>
  );
}
