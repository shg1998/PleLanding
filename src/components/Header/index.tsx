"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const pathname = usePathname();

  return (
    <header
      dir="rtl"
      className={`header top-0 right-0 z-40 flex w-full items-center ${
        sticky
          ? "dark:bg-gray-dark fixed z-[9999] bg-white/80 backdrop-blur-sm shadow-md dark:shadow-sticky-dark transition-all duration-300"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <div className="w-60 max-w-full xl:ml-12">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-3 lg:py-2" : "py-6 lg:py-4"
              }`}
            >
              <Image
                src="/images/logo/logo-l.png"
                alt="لوگو"
                width={140}
                height={30}
                className="w-full dark:hidden"
                priority
              />
              <Image
                src="/images/logo/logo-d.png"
                alt="لوگو"
                width={140}
                height={30}
                className="hidden w-full dark:block"
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
           
            </div>

            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <Link
                  href="/login"
                  className="text-dark hidden px-7 py-3 text-base font-medium hover:opacity-70 md:block dark:text-white"
                >
                  ورود
              </Link>
              <Link
                href="/register"
                className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 hidden rounded-sm px-6 py-2.5 text-base font-medium text-white transition duration-300 md:block md:px-7"
              >
                ثبت نام
              </Link>
              <div className="mr-8">
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;