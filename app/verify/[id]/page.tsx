import { NextResponse } from "next/server";
import CandidateData from "@/components/CandidateData";
import FingerBiometric from "@/components/FingerBiometri";

type Id = string | number;

const getCandidateById = async (id: Id) => {
  try {
    const resp = await fetch(`http://localhost:3000/api/candidate/?id=${id}`, {
      next: { revalidate: 0 },
    });
    return await resp.json();
  } catch (err: any) {
    console.log(err);
  }
};

const Verify = async ({ params }: { params: { id: string } }) => {
  console.log(params);
  const data = await getCandidateById(params.id);

  return (
    <div className="flex h-screen w-screen justify-center gap-5 ">
      <div className="bg-red-200">{data && <CandidateData data={data} />}</div>

      {/* <div className="bg-green-400">
        <FingerBiometric pensionId={params.id} />
      </div>  */}

      <h1>Working With Javascript</h1>
    </div>
  );
};

export default Verify;
