import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Flowbite React",
  description: "Generated by create flowbite react",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //return <div className="container mx-auto  px-4">{children}</div>;

  return <div className="container mx-auto  px-4">{children}</div>;
}
