import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-white dark:bg-gray-dark"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                پله ، سامانه ارزیابی سطوح خبرگی
              </h1>
              <h3 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight md:text-3xl md:leading-tight">
                Professional Level Evaluation System
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl md:text-2xl">
                سیستمی پیشرفته برای ارزیابی علمی و دقیق مهارت‌ها و دانش حرفه‌ای است. این پلتفرم بر حوزه‌های تخصصی نظیر امنیت سایبری و زیرشاخه‌های مرتبط تمرکز دارد. پله وظایف، مسئولیت‌ها، دوره‌های آموزشی و سطح تحصیلات مورد نیاز را به‌صورت ساختاریافته تعریف می‌کند. با تحلیل جامع و روشمند، توانمندی‌ها و زمینه‌های بهبود حرفه‌ای شما شناسایی می‌شود. مسیر تعالی حرفه‌ای خود را با پله به شکلی هدفمند و مؤثر طی نمایید.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Link
                  href="/signup"
                  className="rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl"
                >
                  شروع کنید
                </Link>
                <Link
                  href="/about"
                  className="rounded-lg border-2 border-primary px-8 py-3 text-lg font-semibold text-primary transition-all duration-300 hover:bg-primary/10 dark:text-white dark:hover:bg-white/10"
                >
                  درباره ما
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
          <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)" />
          <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)" />
          <circle
            cx="325.486"
            cy="302.87"
            r="180"
            transform="rotate(-37.6852 325.486 302.87)"
            fill="url(#paint3_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="184.521"
            cy="315.521"
            r="132.862"
            transform="rotate(114.874 184.521 315.521)"
            stroke="url(#paint4_linear_25:217)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:217"
              x1="-54.5003"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
            </radialGradient>
            <linearGradient
              id="paint3_linear_25:217"
              x1="226.775"
              y1="-66.1548"
              x2="292.157"
              y2="351.421"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:217"
              x1="184.521"
              y1="182.159"
              x2="184.521"
              y2="448.882"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_25:218)"
          />
          <path
            d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
            stroke="url(#paint1_linear_25:218)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:218"
              x1="184.389"
              y1="69.2405"
              x2="184.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_25:218"
              x1="156.389"
              y1="69.2405"
              x2="156.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;