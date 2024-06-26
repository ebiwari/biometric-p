import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    // console.log(reqBody);
    const { email, password } = reqBody;

    const user = await User.findOne({ email: email });

    if (!user) {
      return NextResponse.json({ msg: "Invalid Credentials" }, { status: 200 });
    }
    const passwordCompared = await bcryptjs.compare(password, user.password);

    //  (!passwordCompared) {
    //   return NextResponse.json({ msg: "Invalid Credentials" }, { status: 200 });
    // }

    const token = await jwt.sign(
      { id: user._id, firstName: user.firstName },
      process.env.TOKEN_KEY!,
    );

    const resp = await NextResponse.json({ msg: "success" }, { status: 200 });
    resp.cookies.set("token", token);
    return resp;
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: "Login Error" }, { status: 500 });
  }
};
