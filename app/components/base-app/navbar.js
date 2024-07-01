"use client";
import Link from "next/link";
import Container from "../styled/container";
import Logo from "./logo";
import {
  ArrowUpRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Navbar() {
  const navLinks = [
    {
      text: "Home",
      uri: "/",
      ext: false,
    },
    {
      text: "Solutions",
      uri: "/solutions/all",
      ext: false,
    },
    {
      text: "AnanyaGB",
      uri: "https://ananyagb.in",
      ext: true,
    },
    {
      text: "Docs",
      uri: "https://docs.ananyagb.in",
      ext: true,
    },
    {
      text: "Github",
      uri: "https://github.com/AnanyaGB",
      ext: true,
    },
  ];

  const NavLink = ({ data, ...rest }) => {
    return (
      <Link href={data.uri} target={data.ext ? "_blank" : "_self"} {...rest}>
        <span className="flex items-center text-slate-500 hover:text-slate-900">
          <span>{data.text}</span>
          {data.ext && <ArrowUpRightIcon className="h-4 w-4" />}
        </span>
      </Link>
    );
  };

  const ResponsiveNavLink = ({ data, ...rest }) => {
    return (
      <Link href={data.uri} target={data.ext ? "_blank" : "_self"} {...rest}>
        <button
          className="flex items-center w-full p-4 border-b text-slate-500 active:text-slate-900"
          onClick={() => setShowMenu(false)}
        >
          <span>{data.text}</span>
          {data.ext && <ArrowUpRightIcon className="h-4 w-4" />}
        </button>
      </Link>
    );
  };

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white z-50 border-b sticky top-0">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <div className="md:flex gap-6 items-center hidden">
            {navLinks.map((link, index) => (
              <NavLink data={link} key={index} />
            ))}
          </div>
          <div className="md:hidden">
            <button
              className="active:bg-slate-100 px-2 py-2 rounded"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
          {showMenu && (
            <div className="fixed top-16 left-0 right-0 border-t bg-white">
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <ResponsiveNavLink data={link} key={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
