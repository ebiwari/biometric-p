import { NextResponse } from "next/server";
import CandidateData from "@/components/CandidateData";
import FingerBiometric from "@/components/FingerBiometri";
import { urlConfig } from "@/util/config";
import IDcardBiometric from "@/components/IDcardBiometric";
import IDCardDemo from "@/components/IDCardDemo";
import RegisterUser from "@/components/RegisterUser";
import Logo from "@/assets/bylogo.png";
import Image from "next/image";
type Id = string | number;
const ulrDomain = process.env.DOMAIN || urlConfig.urlDomain;

const CandidateRegister = async ({ params }: { params: { id: string } }) => {
  //   const data = await getCandidateById(params.id);

  return (
    <div className="flex  justify-center gap-5 ">
      <div className="ml-3 w-1/2 border-r-2 pr-3">
        <RegisterUser />
      </div>

      <div className="W-1/2">
        <Image alt="logo" src={Logo} className="align-self-center w-[20vw]" />
      </div>
    </div>
  );
};

export default CandidateRegister;
