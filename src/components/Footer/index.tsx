"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo-l.png"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo-d.png"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  سامانه نظام ارزیابی مشاغل امنیت سایبر (پله)
                </p>
               
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  پیوندهای مرتبط
                </h2>
                <ul>
                  <li>
                    <Link
                      href="https://kashef.ir"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      شرکت امن الکترونیکی کاشف
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.nicholding.ir/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      شرکت ملی انفورماتیک
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://cbi.ir/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      بانک مرکزی ج.ا.ا
                    </Link>
                  </li>
                </ul>
              </div>
            </div>


            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  پیوندهای مرتبط
                </h2>
                <ul>
                  <li>
                    <Link
                      href="https://kashef.ir"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      شرکت امن الکترونیکی کاشف
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.nicholding.ir/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      شرکت ملی انفورماتیک
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://cbi.ir/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      بانک مرکزی ج.ا.ا
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  پیوندهای مرتبط
                </h2>
                <ul>
                  <li>
                    <Link
                      href="https://kashef.ir"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      شرکت امن الکترونیکی کاشف
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.nicholding.ir/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      شرکت ملی انفورماتیک
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://cbi.ir/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      بانک مرکزی ج.ا.ا
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
