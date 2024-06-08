"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import Logo from "@/assets/bylogo.png";
import { urlConfig } from "@/util/config";
import { useRouter } from "next/navigation";

interface IUser {
  firstName: string;
  otherName: string;
  email: string;
  password: string;
}

const Register = () => {
  const [users, setUsers] = useState<IUser>({
    firstName: "",
    otherName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);

  const route = useRouter();
  const ulrDomain = process.env.DOMAIN || urlConfig.urlDomain;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (users.email === " " && users.password === " ") {
      setFlag(true);
      setError("Please Fill Email and Password");
      return;
    }

    try {
      const resp = await fetch(`${ulrDomain}/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
      });

      if (!resp.ok) {
        throw new Error("Registration is not posible @ this moment");
      }

      route.push("/login");
    } catch (err: any) {
      console.log(err);
      setFlag(true);
    } finally {
      setFlag(false);
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
                Register Admin
              </h1>

              {flag && (
                <h1 className="my-6 text-center text-xl font-semibold text-red-400">
                  {error}
                </h1>
              )}

              <input
                type="text"
                onChange={(e) =>
                  setUsers({ ...users, firstName: e.target.value })
                }
                className="block w-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500  "
                placeholder="First Name"
                required
              />
            </div>
            <div className="mb-5 flex flex-col items-center justify-center">
              <input
                type="text"
                onChange={(e) =>
                  setUsers({ ...users, otherName: e.target.value })
                }
                className="block w-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 "
                placeholder="Other Name"
                required
              />
            </div>

            <div className="mb-5 flex flex-col items-center justify-center">
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
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-5 flex flex-col items-center justify-center">
              <button
                type="submit"
                className="flex w-full flex-col items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
