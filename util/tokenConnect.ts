import { configToken } from "@/util/config";

("https://bioplugin.cloudabis.com/v12/api/Authorizations/Token");

export const tokenConnect = async () => {
  console.log(configToken.CLIENT_API_KEY);
  console.log(configToken.CLIENT_KEY);
  try {
    const resp = await fetch(
      `${configToken.API_URL}/api/Authorizations/Token`,
      {
        method: "POST",
        headers: {
          Accept: "text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientAPIKey: configToken.CLIENT_API_KEY,
          clientKey: configToken.CLIENT_KEY,
        }),
      },
    );

    if (!resp.ok) {
      throw new Error("Error Sending Data");
    }

    return resp;
  } catch (err: any) {
    console.log(err);
  }
};
