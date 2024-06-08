"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import Logo from "@/assets/bylogo.png";
import { urlConfig } from "@/util/config";
import { useRouter } from "next/navigation";

interface IUser {
  email: string;
  password: string;
}
const ulrDomain = process.env.DOMAIN || urlConfig.urlDomain;
console.log(process.env.DOMAIN);

const LoginRoute = () => {
  const [users, setUsers] = useState<IUser>({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);

  const [button, setButton] = useState(false);
  const route = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setButton(true);
    if (users.email === " " && users.password === " ") {
      setFlag(true);
      setError("Please Fill Email and Password");
      return;
    }
    try {
      const resp = await fetch(`${ulrDomain}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
      });

      if (!resp.ok) {
        throw new Error("Registration is not posible @ this moment");
      }

      route.push("/candidate");
    } catch (err: any) {
      console.log(err);
      setError("Error Occour while adding data to database");
      setFlag(true);
    } finally {
      setFlag(false);
      setButton(false);
    }
  };

  return (
    <div className="flex  min-h-[90vh] min-w-full items-center justify-center ">
      <div className="mx-auto flex h-[90%] min-h-[80vh] w-[80%] flex-row rounded-2xl bg-emerald-50 p-4 shadow-lg">
        <div className="m-0 flex min-h-full w-1/2 items-center justify-center border-r-2">
          <Image alt="logo" src={Logo} className="align-self-center w-[20vw]" />
        </div>
        <div className=" flex min-h-full w-1/2 items-center justify-center p-4">
          <form
            onSubmit={handleSubmit}
            className=" h-3/4 w-full rounded-2xl px-4 py-8"
          >
            <div className="mb-5 flex flex-col items-center justify-center">
              <h1 className="my-6 text-center text-xl font-semibold">
                Login Portal
              </h1>

              {flag && (
                <h1 className="my-6 text-center text-xl font-semibold text-red-400">
                  {error}
                </h1>
              )}

              <input
                type="text"
                onChange={(e) => setUsers({ ...users, email: e.target.value })}
                className="block w-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 "
                placeholder="E-mail"
                required
              />
            </div>

            <div className="mb-5 flex flex-col items-center justify-center">
              <input
                type="password"
                onChange={(e) =>
                  setUsers({ ...users, password: e.target.value })
                }
                className="block w-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 "
                placeholder="password"
                required
              />
            </div>

            <div className="mb-5 flex flex-col items-center justify-center">
              {button ? (
                <button
                  disabled
                  type="button"
                  className="me-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="me-3 inline h-4 w-4 animate-spin text-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Processing...
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex w-full flex-col items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRoute;
