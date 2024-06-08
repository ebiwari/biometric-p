"use client";
const CandidateData = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      <div className="flex p-2">
        <h1 className="text-2xl">Pension ID:</h1>
        <h1 className="text-2xl">{data.PensionerID}</h1>
      </div>

      <div className="flex p-2">
        <h1 className="text-2xl">Name:</h1>
        <h1 className="text-2xl">
          {data.Surname} {data.OtherNames}
        </h1>
      </div>
    </div>
  );
};

export default CandidateData;
