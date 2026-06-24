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
  metadataBase: new URL("https://dev.maanaaasss.vercel.app"),
  title: "maanaaasss",
  description: "My personal website",
  openGraph: {
    title: "maanaaasss",
    description: "My personal website",
    images: [
      {
        url: "/OG.jpeg",
        width: 1200,
        height: 630,
        alt: "maanaaasss",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "maanaaasss",
    description: "My personal website",
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
