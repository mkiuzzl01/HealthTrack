"use client";
import Menu from "@mui/material/Menu";
import Link from "next/link";

type ServicesSubMenuPros = {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};

export default function ServicesSubMenu({
  setAnchorEl,
  anchorEl,
}: ServicesSubMenuPros) {
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
          <li>
            <Link href={"/laboratory"}>Laboratory</Link>
          </li>
          <li>
            <Link href={"/childCare"}>Child Care</Link>
          </li>
          <li>
            <Link href={"/education"}>Education</Link>
          </li>
          <li>
            <Link href={"/healthPackage"}>Health Package</Link>
          </li>
        
        </ul>
      </Menu>
    </>
  );
}
