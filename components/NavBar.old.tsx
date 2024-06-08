"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [input, setInput] = useState("");

  const route = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    route.push(`/candidate/${input}`);
  };

  return (
    <nav className="flex items-center justify-between border-b-2 px-1 py-2 text-xl">
      <div className=" flex size-12 items-center justify-center rounded bg-yellow-400 p-1 text-white">
        Logo
      </div>
      <form onSubmit={handleSubmit}>
        <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div>
        <Link href="/">Dashboard</Link>

        <Link href="/">Candidate</Link>
      </div>

      <button>Logout</button>
    </nav>
  );
}
