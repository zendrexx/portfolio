import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zendrex Adversalo — Mobile App Developer",
  description:
    "Portfolio of Zendrex Adversalo — mobile-first developer building Flutter apps, Java desktop software, and founder of a gamified powerlifting workout app.",
  openGraph: {
    title: "Zendrex Adversalo — Mobile App Developer",
    description:
      "Flutter developer, founder, and CS student from Pangasinan, Philippines.",
    type: "website",
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="noise min-h-full">{children}</body>
    </html>
  );
}
