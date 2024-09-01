import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inspirus 8 - Don Bosco College of Engineering",
  description: "Join us at Inspirus 8, the annual fest of Don Bosco College of Engineering. Explore a variety of technical, non-technical, and cultural events designed to showcase innovation, creativity, and skills. Be a part of workshops, hackathons, gaming competitions, and more!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
