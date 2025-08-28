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
              {/* Mobile menu button */}
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="منو موبایل"
                className="ring-primary absolute left-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-2 focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[-8px] -rotate-45" : ""
                  }`}
                />
              </button>

              {/* Desktop Menu */}
              <nav
                id="navbarCollapse"
                className={`navbar absolute left-0 top-full z-30 w-[250px] rounded border border-gray-200 bg-white px-6 py-4 shadow-lg transition-all duration-300 dark:border-gray-700 dark:bg-dark lg:static lg:ml-10 lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none lg:dark:bg-transparent ${
                  navbarOpen
                    ? "visible opacity-100"
                    : "invisible opacity-0 lg:visible lg:opacity-100"
                }`}
              >
                <ul className="block lg:flex lg:items-center lg:gap-10">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          className={`flex py-2 text-base lg:py-6 ${
                            pathname === menuItem.path
                              ? "text-primary dark:text-white"
                              : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <button
                            onClick={() => handleSubmenu(index)}
                            className="text-dark group-hover:text-primary flex w-full items-center justify-between py-2 text-base dark:text-white/70 dark:group-hover:text-white lg:py-6"
                          >
                            {menuItem.title}
                            <span className="pl-3">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                className="fill-current"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.29289 5.29289C4.68342 4.90237 5.31658 4.90237 5.70711 5.29289L8 7.58579L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L8.70711 9.70711C8.31658 10.0976 7.68342 10.0976 7.29289 9.70711L4.29289 6.70711C3.90237 6.31658 3.90237 5.68342 4.29289 5.29289Z"
                                />
                              </svg>
                            </span>
                          </button>
                          <div
                            className={`submenu relative left-0 top-full rounded-sm bg-white transition-all duration-300 group-hover:opacity-100 dark:bg-dark lg:absolute lg:invisible lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:opacity-100 ${
                              openIndex === index ? "block" : "hidden"
                            }`}
                          >
                            {menuItem.submenu?.map((submenuItem, idx) => (
                              <Link
                                href={submenuItem.path}
                                key={idx}
                                className="text-dark hover:text-primary block rounded py-2 text-sm hover:bg-gray-50 dark:text-white/70 dark:hover:bg-gray-700 dark:hover:text-white lg:px-3"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Auth Buttons & Theme Toggler */}
            <div className="flex items-center gap-6">
              <Link
                href="/signin"
                className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 hidden rounded-sm px-6 py-2.5 text-base font-medium text-white transition duration-300 md:block md:px-7"
              >
                ورود
              </Link>
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;