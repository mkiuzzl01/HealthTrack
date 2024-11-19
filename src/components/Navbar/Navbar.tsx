"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import LoginIcon from "@mui/icons-material/Login";
import Image from "next/image";
import AppointmentModal from "../../utils/AppointmentModal";
import ServicesSubMenu from "./ServicesSubMenu";
import { usePathname } from "next/navigation";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full top-0 z-50 p-6 transition-all duration-300 ${
        pathname === "/"
          ? isScrolled
            ? "bg-white shadow-md"
            : "bg-white bg-opacity-25"
          : "bg-white"
      } ${pathname === "/" ? "fixed" : "sticky"}`}
    >
      <div className="lg:w-3/4 mx-auto flex lg:flex justify-between items-center">
        <div className="w-24 items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-sky-600">H</span>ealthTrack
          </h1>
        </div>
        <div>
          {open ? (
            <div onClick={handleClose} className="bar1">
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <div
              onClick={handleOpen}
              className={`bar2 ${open ? "" : "activeBar"}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          <ul
            className={`flex justify-between gap-7 navItems ${
              open ? "" : "activeMenu"
            }`}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/doctors">Doctors</Link>
            </li>
            <li>
              <button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Services
              </button>
            </li>
            <li>
              <Link href="/departments">Departments</Link>
            </li>
            <li>
              <Link href="/pharmacy">Pharmacy</Link>
            </li>
            <li>
              <Link href={"/gallery"}>Gallery</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <button
            className="bg-[#0057B8] px-5 py-3 rounded text-white hover:bg-blue-600 duration-300"
            onClick={handleModalOpen}
          >
            Appointment
          </button>
        </div>
        <div className="hidden lg:block">
          <Link href="/login">
            Login <LoginIcon></LoginIcon>
          </Link>
        </div>
      </div>
      <AppointmentModal open={isModalOpen} handleClose={handleModalClose} />{" "}
      <ServicesSubMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </div>
  );
};

export default Navbar;
