import Link from "next/link";
import { useState } from "react";
import { CgMenuCheese } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
import MyBtn from "./MyButton";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!isOpen);
  };

  const navLinks = [
    {
      name: "Home",
      link: "/#home",
    },
    {
      name: "Services",
      link: "/#services",
    },
    {
      name: "Testimonials",
      link: "/#testimonials",
    },
    {
      name: "Team",
      link: "/#team",
    },
  ];

  return (
    // <nav className="bg-white flex flex-col lg:flex-row lg:justify-center items-center rounded-md justify-around my-auto p-2 md:py-3 md:m-3">
    <nav className="bg-white shadow-2xl sticky top-0 z-10 shadow-cyan-200/50 flex flex-col lg:flex-row lg:justify-center items-center rounded-md justify-around my-auto p-2 md:py-3 md:m-3">
      <div className="flex flex-row justify-between w-full">
        <div className="w-36 md:w-52 my-auto">
          <Link href="/">
            <a>
              <Image src={"/logo.svg"} alt="logo" width="300px" height="80px" />
            </a>
          </Link>
        </div>
        <div
          className="visible my-auto lg:invisible p-2 text-xl text-gray-800 rounded-sm hover:bg-gray-100 active:bg-turbo-gray-100 cursor-pointer"
          onClick={toggleNavbar}
        >
          {!isOpen ? <CgMenuCheese /> : <GrClose />}
        </div>
      </div>
      <div
        className={`${
          !isOpen ? "hidden" : "z-20"
        } flex flex-col lg:hidden ml-1 md:justify-between my-8 md:my-10 mx-auto space-y-4 font-semibold`}
      >
        {navLinks.map((item) => (
          <div key={item.name} className="hover:underline">
            <Link href={item.link}>
              <a>{item.name}</a>
            </Link>
          </div>
        ))}
        <div className="block lg:hidden ">
          <Link href="/#contact" className="">
            <a>
              <MyBtn textContent={"Contact"} />
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex flex-row justify-around space-y-0 space-x-6 lg:space-x-10 font-semibold">
        {navLinks.map((item) => (
          <div key={item.name} className="hover:underline my-auto">
            <Link href={item.link}>
              <a>{item.name}</a>
            </Link>
          </div>
        ))}
      </div>
      <div className="hidden lg:flex ml-6">
        <Link href="/#contact" className="">
          <a>
            <MyBtn textContent={"Contact"} />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
