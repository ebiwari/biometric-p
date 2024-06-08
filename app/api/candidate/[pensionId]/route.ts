import { connectDb } from "@/util/connectDb";

import { NextRequest, NextResponse } from "next/server";
import Candidate from "@/models/candidateModel";

type pensionId = string | number;

export const PUT = async (request: NextRequest, { params }: any) => {
  await connectDb();

  try {
    const { pensionId } = params;
    const reqBody = await request.json();
    const { CaptureID } = reqBody;

    let doc = await Candidate.findOneAndUpdate(
      { pensionN: pensionId },
      { CaptureID: CaptureID },
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
