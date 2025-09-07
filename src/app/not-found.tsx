import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-white dark:bg-gray-dark">
      <div className="container text-center">
        <h1 className="text-6xl font-extrabold text-black dark:text-white sm:text-7xl mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl mb-4">
          صفحه پیدا نشد
        </h2>
        <p className="text-lg text-body-color  text-black dark:text-white sm:text-1xl mb-8">
          متاسفیم، صفحه‌ای که دنبال آن بودید موجود نیست.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl"
          >
            بازگشت به خانه
          </Link>
        </div>
      </div>

      <svg className="absolute inset-0 w-full h-full -z-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A6CF7" />
            <stop offset="100%" stopColor="#FF6B6B" />
          </linearGradient>
        </defs>
        <circle cx="50%" cy="50%" r="200" fill="url(#grad)">
          <animate
            attributeName="r"
            values="180;220;180"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="30%" cy="70%" r="50" fill="#4A6CF7" opacity="0.3">
          <animate
            attributeName="cy"
            values="70%;60%;70%"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="70%" cy="30%" r="80" fill="#FF6B6B" opacity="0.2">
          <animate
            attributeName="cx"
            values="70%;75%;70%"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </section>
  );
};

export default NotFoundPage;
