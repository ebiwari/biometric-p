import User from "@/models/userModel";
import { connectDb } from "@/util/connectDb";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectDb();
export const POST = async (request: NextRequest) => {
  const reqBody = await request.json();
  console.log(reqBody);

  const { firstName, otherName, email, password } = reqBody;
  try {
    const hashPassword = await bcryptjs.hash(password, 10);

    await User.create({ firstName, otherName, email, password: hashPassword });

    return NextResponse.json({ msg: "Data has being Added" }, { status: 200 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(
      { error: "Data could not be added" },
      { status: 500 },
    );
  }
};
