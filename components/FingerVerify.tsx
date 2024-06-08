"use client";
import { tokenConnect } from "@/util/tokenConnect";
import {
  configRegistion,
  configToken,
  configCapture,
  urlConfig,
  token,
} from "@/util/config";
import { useEffect } from "react";

const FingerVerify = (props: any) => {
  // let token = "";

  // useEffect(() => {
  //   const connectToken = async () => {
  //     try {
  //       const respData = await tokenConnect();
  //       const respDataConect = await respData.json();
  //       token = respDataConect.responseData.accessToken;
  //       console.log(token);
  //     } catch (err: any) {
  //       console.log(err);
  //     }
  //   };

  //   connectToken();
  // }, []);

  // const verify = async (Images: any, CaptureID: string) => {
  //   // const configReg = configRegistion;
  //   // configReg.sequenceNo = pentionId;
  //   // configReg.registrationID = pentionId;
  //   // configReg.images = images;

  //   const newImage = {
  //     clientKey: "",
  //     sequneceNo: "",
  //     registrationID: "",
  //     images: {
  //       fingerprint: [],
  //     },
  //   };

  //   newImage.clientKey = configToken.CLIENT_KEY;
  //   newImage.registrationID = CaptureID;

  //   newImage.images.fingerprint.push(Images?.Fingerprint[0]);

  //   // console.log(images?.Fingerprint[0]);

  //   try {
  //     const resp = await fetch(
  //       `${configToken.API_URL}/api/Biometrics/Register`,
  //       {
  //         method: "POST",
  //         headers: {
  //           Accept: " text/plain",
  //           Authorization: `bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(newImage),
  //       },
  //     );

  //     if (!resp.ok) {
  //       throw new Error("Error Sending Data");
  //     }

  //     const respData = await resp.json();
  //     console.log(respData);
  //   } catch (err: any) {
  //     console.log(err);
  //   }
  // };

  // const getCapture = async () => {
  //   try {
  //     const resp = await fetch(urlConfig.urlCapture, {
  //       method: "POST", // or 'PUT'
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(configCapture),
  //     });

  //     if (!resp.ok) {
  //       throw new Error("Error Sending Data");
  //     }

  //     const respData = await resp.json();
  //     const { CaptureID, Images } = respData;
  //     console.log(respData);

  //     // await register(Images, CaptureID);

  //     // const respCapture = await fetch(
  //     //   `${urlConfig.urlDomain}/api/candidate/${props.pensionId}`,
  //     //   {
  //     //     method: "PUT", // or 'PUT'
  //     //     headers: {
  //     //       "Content-Type": "application/json",
  //     //     },

  //     //     body: JSON.stringify({ CaptureID, Images }),
  //     //   },
  //     // );

  //     // if (!respCapture.ok) {
  //     //   throw new Error("Error Capturing Validating");
  //     // }

  //     // const respCaptureData = await respCapture.json();
  //     // console.log(respCaptureData);
  //   } catch (err: any) {
  //     console.log(err);
  //   }
  // };

  return (
    <form>
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Registration ID
        </label>

        <input
          type="email"
          id="helper-text"
          aria-describedby="helper-text-explanation"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@flowbite.com"
        />

        <p
          id="helper-text-explanation"
          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          We’ll never share your details. Read our{" "}
          <a
            href="#"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>

      <button
        type="button"
        className=" mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Verify Candidate
      </button>
    </form>
  );
};

export default FingerVerify;
