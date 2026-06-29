"use client";

import { useState } from "react";


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

const projects = [
  {
    title: "Timelinx",
    description: "A simple timeline engine for the web.",
    link: "https://github.com/maanaaasss/timelinx",
  },
  {
    title: "lofi.manaaasss",
    description: "A beautiful and simple lofi music player.",
    link: "https://lofi-manaaasss.vercel.app",
  },
  {
    title: "Kymo",
    description: "A simple tool to download stuff from YouTube.",
    link: "https://kymo.vercel.app",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <div className="flex flex-1 flex-col font-mono bg-[#0a0a0a] text-gray-200">
      <main className="max-w-[600px] w-full mx-auto px-5 sm:px-6 pt-6 sm:pt-8 pb-10 sm:pb-12">
        {/* ── Header ── */}
        <header className="flex items-center justify-between mb-6 sm:mb-6">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(null);
            }}
            className="cursor-pointer transition-transform duration-200 active:scale-95"
            aria-label="Home"
          >
          <img
            src="/avatar.jpg"
            alt="Profile photo"
            className="w-9 h-9 sm:w-8 sm:h-8 rounded-full object-cover"
          />
          </a>

          <nav className="flex items-center gap-5 sm:gap-4 text-sm font-bold font-sans">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(activeTab === "projects" ? null : "projects");
              }}
              className={`relative pb-1 transition-colors duration-200 ${
                activeTab === "projects" ? "text-gray-100" : "text-gray-400 hover:text-gray-100"
              }`}
            >
              Projects
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-gray-100 origin-left transition-transform duration-300 ease-out ${
                  activeTab === "projects" ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(activeTab === "blogs" ? null : "blogs");
              }}
              className={`relative pb-1 transition-colors duration-200 ${
                activeTab === "blogs" ? "text-gray-100" : "text-gray-400 hover:text-gray-100"
              }`}
            >
              Blogs
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-gray-100 origin-left transition-transform duration-300 ease-out ${
                  activeTab === "blogs" ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          </nav>
        </header>

        {/* ── Main content ── */}
        {activeTab === "projects" ? (
          <section>
            <h2 className="text-base sm:text-lg font-bold mb-1 text-gray-100">Projects</h2>
            <p className="text-[13px] text-gray-400 mb-6 leading-relaxed">
              Just some things I've built.
            </p>
            <div className="flex flex-col gap-3">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2.5 px-4 bg-neutral-900/30 hover:bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700/80 rounded-lg transition-all duration-200"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-bold text-gray-100 group-hover:text-white transition-colors font-sans">
                      {project.title}
                    </span>
                    <span className="text-[12px] font-semibold text-gray-400 group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </span>
                  </div>
                  <div className="text-gray-500 group-hover:text-gray-300 transition-all duration-200 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ) : activeTab === "blogs" ? (
          <section>
            <h2 className="text-base sm:text-lg font-bold mb-4 text-gray-100">Blogs</h2>
            <div className="text-[13px] sm:text-sm text-gray-400">
              Writing coming soon...
            </div>
          </section>
        ) : (
          <section>
            <h1 className="text-base sm:text-lg font-bold mb-4">maanaaasss</h1>

            <div className="space-y-4 text-[13px] sm:text-sm text-gray-300 leading-relaxed">
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
        )}

        {/* ── Footer ── */}
        {activeTab === null && (
          <footer>
            <hr className="border-t border-neutral-800 my-5 sm:my-6" />

            <div className="flex items-center gap-4 sm:gap-3">
              <a
                href="https://github.com/maanaaasss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-100 transition-colors duration-200 hover:text-gray-400 p-1 -m-1"
              >
                <GitHubIcon size={20} />
              </a>

              <a
                href="https://x.com/manaaaassss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-gray-100 transition-colors duration-200 hover:text-gray-400 p-1 -m-1"
              >
                <XIcon size={20} />
              </a>
            </div>
          </footer>
        )}
      </main>
    </div>
  );
}
