import { connectDb } from "@/util/connectDb";

import { NextRequest, NextResponse } from "next/server";
import Candidate from "@/models/candidateModel";

export const GET = async (request: NextRequest) => {
  await connectDb();
  try {
    const candidates = await Candidate.find();
    return NextResponse.json({ candidates: candidates }, { status: 200 });
  } catch (err: any) {
    console.log(err);
  }
};
