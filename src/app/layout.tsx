import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "maanaaasss — portfolio",
  description:
    "Personal portfolio of Manas — CSE graduate, builder, and learner.",
  openGraph: {
    images: [
      {
        url: "/OG.jpeg",
        width: 1200,
        height: 630,
        alt: "maanaaasss — portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/OG.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
