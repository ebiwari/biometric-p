import { NextResponse } from "next/server";
import CandidateData from "@/components/CandidateData";
import FingerBiometric from "@/components/FingerBiometri";
import { urlConfig } from "@/util/config";
import IDcardBiometric from "@/components/IDcardBiometric";
import IDCard from "@/components/IDCard";

type Id = string | number;
const ulrDomain = process.env.DOMAIN || urlConfig.urlDomain;

const getCandidateById = async (id: Id) => {
  try {
    const resp = await fetch(`${ulrDomain}/api/candidate/?id=${id}`, {
      next: { revalidate: 0 },
    });
    return await resp.json();
  } catch (err: any) {
    console.log(err);
  }
};

const Candidate = async ({ params }: { params: { id: string } }) => {
  const data = await getCandidateById(params.id);

  return (
    <div className="flex  justify-center gap-5 ">
      <div className="w-1/2 border-r-2 pr-3">
        {data && <CandidateData data={data} />}
      </div>

      <div className="W-1/2">
        {data && data && <IDCard data={data} />}
        {data && data && <FingerBiometric data={data} />}
      </div>
    </div>
  );
};

export default Candidate;
