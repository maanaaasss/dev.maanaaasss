import Image from "next/image";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col font-mono bg-[#0a0a0a] text-gray-200">
      <main className="max-w-[600px] w-full mx-auto px-3 pt-8 pb-12">
        {/* ── Header ── */}
        <header className="flex items-center justify-between">
          <Image
            src="/avatar.jpg"
            alt="Profile photo"
            width={32}
            height={32}
            className="rounded-full object-cover"
            priority
          />

          <nav className="flex items-center gap-4 text-sm font-bold text-gray-400">
            <a
              href="#"
              className="transition-colors duration-200 hover:text-gray-100"
            >
              Projects
            </a>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-gray-100"
            >
              Blogs
            </a>
          </nav>
        </header>

        {/* ── Main content ── */}
        <section>
          <h1 className="text-lg font-bold mt-4 mb-4">Maanaaasss</h1>

          <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>
              Hello there, I am Manas, a fresh CSE graduate from India.
              Currently exploring different areas of software engineering that
              help me learn along the way.
            </p>

            <p>
              Besides programming, I also enjoy music, writing and anything that
              teaches me a new way of looking at the world.
            </p>

            <p>
              Building an open-source{" "}
              <a
                href="https://github.com/maanaaasss/timelinx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 font-semibold text-gray-100 transition-colors hover:text-gray-300"
              >
                timeline
              </a>{" "}
              library, learning{" "}
              <a
                href="https://www.dhrupad.info/q3/articles/fundamental-concepts-of-dhrupad.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 font-semibold text-gray-100 transition-colors hover:text-gray-300"
              >
                Dhrupad
              </a>
              , and trying to become a little better every day.
            </p>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer>
          <hr className="border-gray-800 my-6" />

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/maanaaasss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-100 transition-colors duration-200 hover:text-gray-400"
            >
              <GitHubIcon size={18} />
            </a>

            <a
              href="https://x.com/manaaaassss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-gray-100 transition-colors duration-200 hover:text-gray-400"
            >
              <XIcon size={18} />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
