"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Logo from "@/assets/bylogo.png";
import Image from "next/image";

export function Navbar() {
  const [input, setInput] = useState("");

  const route = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    route.push(`/candidate/${input}`);
  };

  return (
    <nav className="flex items-center justify-between border-b-2 px-1 py-2 text-xl">
      <div className=" flex size-12 items-center justify-center rounded p-1 text-white">
        <Link href="/">
          <Image src={Logo} className="w-16" alt="logo" />
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="sr-only mb-2 text-sm font-medium text-gray-900 ">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="size-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            id="search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="absolute bottom-2.5 end-2.5 rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 "
          >
            Search
          </button>
        </div>
      </form>

      <div className="space-x-2 text-base font-semibold text-green-500 ">
        <Link className="border-r-2 py-2 pr-2" href="/">
          Dashboard
        </Link>

        <Link className="" href="/">
          Verify-Candidate
        </Link>
      </div>

      <Link
        href="/"
        className="rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 "
      >
        Logout
      </Link>
    </nav>
  );
}
