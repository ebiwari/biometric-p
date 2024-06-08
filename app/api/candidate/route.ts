import { connectDb } from "@/util/connectDb";

import { NextRequest, NextResponse } from "next/server";
import Candidate from "@/models/candidateModel";

export const POST = async (request: NextRequest) => {
  await connectDb();

  try {
    const reqBody = await request.json();

    const { pensionN, surname, otherName } = reqBody;

    await Candidate.create({ pensionN, surname, otherName });
    return NextResponse.json(
      { msg: "Candidate Added Successfully" },
      { status: 200 },
    );
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ err: err }, { status: 500 });
  }
};

export const GET = async (request: NextRequest) => {
  await connectDb();

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const candidate = await Candidate.findOne({ PensionN: id });
    console.log(candidate);
    return NextResponse.json(candidate, { status: 200 });
  } catch (err: any) {
    console.log(err);

    return NextResponse.json({ err: err }, { status: 500 });
  }
};

export const PUT = async (request: NextResponse) => {
  await connectDb();

  try {
    const { searchParams } = new URL(request.url);
    const pensionN = searchParams.get("pensionId");

    const reqBody = await request.json();
    const { regStatus } = reqBody;

    let doc = await Candidate.findOneAndUpdate(
      { pensionN: pensionN },
      { regStatus: regStatus },
      {
        new: true,
      },
    );
    return NextResponse.json(doc, { status: 200 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ err: err }, { status: 500 });
  }
};
