import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";

export const GET = async () => {
  const route = useRouter();
  try {
    const resp = await NextResponse.json({ msg: "logout" }, { status: 200 });
    resp.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    route.push("/");
  } catch (err: any) {
    console.log(err);

    return NextResponse.json({ msg: "Error Login out" }, { status: 200 });
  }
};
