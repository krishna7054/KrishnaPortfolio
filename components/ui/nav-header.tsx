"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className="w-full flex justify-center">
    <ul
      className="relative flex items-center  rounded-full border-2 border-white bg-black bg-opacity-60  text-white shadow-lg backdrop-blur-md md:space-x-4 md:p-3 lg:p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      <Tab setPosition={setPosition} href="">Home</Tab>
      <Tab setPosition={setPosition} href="/projects">Projects</Tab>
      <Tab setPosition={setPosition} href="/certificates">Certificates</Tab>
      <Tab setPosition={setPosition} href="/skills">Skills</Tab>
      <Tab setPosition={setPosition} href="/resume">Resume</Tab>
      <Tab setPosition={setPosition} href="/contact">Contact</Tab>

      <Cursor position={position} />
    </ul>
    </nav>
  );
}

const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: React.ReactNode;
  setPosition: any;
  href: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const pathname = usePathname(); 
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-1.5 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
     <Link href={href}>{children}</Link>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};

export default NavHeader;
