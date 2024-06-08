"use client";
import {
  configRegistion,
  configToken,
  configCapture,
  urlConfig,
  token,
} from "@/util/config";

import { tokenConnect } from "@/util/tokenConnect";
import { useEffect, useState } from "react";

const FingerBiometric = (props: any) => {
  // useEffect(() => {
  //   const connectToken = async () => {
  //     try {
  //       const respData = await tokenConnect();
  //       console.log(respData);
  //       // const respDataConect = await respData.json();
  //       //token = respDataConect.responseData.accessToken;
  //       //console.log(token);
  //     } catch (err: any) {
  //       console.log(err);
  //     }
  //   };  //   connectToken();
  // }, []);
  const [flag, setFlag] = useState(false);
  const register = async (Images: any, _id: string, pensionN: string) => {
    const newImage = {
      clientKey: "",
      sequneceNo: "",
      registrationID: "",
      images: {
        fingerprint: [],
      },
    };

    newImage.clientKey = configToken.CLIENT_KEY;
    newImage.registrationID = pensionN;
    newImage.sequneceNo = _id;

    newImage.images.fingerprint.push(Images?.Fingerprint[0]);

    console.log(newImage);

    try {
      const resp = await fetch(
        `${configToken.API_URL}/api/Biometrics/Register`,
        {
          method: "POST",

          headers: {
            Accept: " text/plain",
            Authorization: `bearer ${token}`,
            "Content-Type": "application/json",
          },

          body: JSON.stringify(newImage),
        },
      );

      if (!resp.ok) {
        throw new Error("Error Sending Data");
      }
      const respData = await resp.json();
      console.log(respData);
    } catch (err: any) {
      console.log(err);
    }
  };

  const getCapture = async () => {
    setFlag(true);
    try {
      const resp = await fetch(urlConfig.urlCapture, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(configCapture),
      });
      if (!resp.ok) {
        throw new Error("Error Sending Data");
      }
      const respData = await resp.json();
      const { CaptureID, Images } = respData;

      await register(Images, props.data._id, props.data.pensionN);

      await updateSatus(
        props.data.pensionN!,
        props.data._id,
        props.data.regStatus,
      );
    } catch (err: any) {
      console.log(err);
    } finally {
      setFlag(false);
    }
  };

  const updateSatus = async (
    pensionN: string,
    _id: string,
    regStatus: boolean,
  ) => {
    try {
      const resp = await fetch(
        `${urlConfig.urlDomain}/api/candidate/${pensionN}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ regStatus }),
        },
      );

      if (!resp.ok) {
        throw new Error("Error Sending Data");
      }

      const respData = await resp.json();
      console.log(respData);
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center">
      {flag ? (
        <button
          disabled
          type="button"
          className="me-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="me-3 inline h-4 w-4 animate-spin text-white"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Loading...
        </button>
      ) : (
        <button
          onClick={getCapture}
          type="button"
          className=" mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Capture Biometric
        </button>
      )}
    </div>
  );
};

export default FingerBiometric;
