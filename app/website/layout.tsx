import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../about.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About Home Page",
  description: "This page is about CSS",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-4">{children}</div>
      </body>
    </html>
  );
}
