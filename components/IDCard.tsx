import Logo from "@/assets/bylogo.png";
import Pic from "@/assets/R.jpg";
import Image from "next/image";

function IDCard(props: any) {
  return (
    <div className="mx-16 my-2 min-h-[30vh] min-w-[450px] rounded-lg border-2 border-slate-400 bg-slate-50 px-8 py-2 ">
      <div className="flex flex-row items-center justify-between px-4">
        <Image src={Logo} className="w-16" alt="logo" />
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-500">
            BAYELSA STATE GOVERNMENT
          </h2>
          <h3 className="text-sm font-semibold text-blue-500">
            STATE PENSION BOARD
          </h3>
          <h4 className="text-sm font-semibold text-black">
            PENSIONER IDENTIFICATION
          </h4>
        </div>
      </div>

      <div className="my-2 flex flex-row items-center justify-between space-x-2">
        <div className="">
          <Image
            alt="pic"
            className="h-56 w-44 rounded-lg"
            width={126}
            height={224}
            src={`https://fuotuoke.edu.ng/pension/${props.data.PensionN}.jpg`}
          />
        </div>

        <div className="space-y-1">
          <div>
            <h4 className="text-xs font-semibold text-slate-500">
              Pensioner Name
            </h4>
            <h2 className="text-sm font-bold text-black">
              {props.data.Surname} {props.data.OtherNames}
            </h2>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500">
              Pensioner Number
            </h4>
            <h2 className="text-sm font-semibold text-black">
              {props.data.PensionN}
            </h2>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500">
              Pensioner Authority Number
            </h4>
            <h2 className="text-sm font-semibold text-black">
              {props.data.PensionAuthNo}
            </h2>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500">
              LGA & Home Town
            </h4>
            <h2 className="text-sm font-bold text-black">
              {props.data.LGAOfOrigin}
            </h2>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500">
              Retirement Date
            </h4>
            <h2 className="text-sm font-bold text-black">
              {props.data.RetirementDate}
            </h2>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500">
              Retirement Rank & Grade Level
            </h4>
            <h2 className="text-sm font-bold text-black">
              {props.data.RetirementRank}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IDCard;
