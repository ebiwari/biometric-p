export const configRegistionOld = {
  clientKey: "90F578D73237485596B73902C1E6386D",
  sequneceNo: "string",
  registrationID: "string",
  images: {
    fingerprint: [
      {
        position: 0,
        base64Image: "string11111112223",
      },
    ],
    iris: [
      {
        position: 0,
        base64Image: "string",
      },
    ],
    face: [
      {
        position: 0,
        base64Image: "string",
      },
    ],
  },
  templateBase64: "string",
};

export const configRegistion = {
  clientKey: "4AAB94F06AD341A2A6CB3DFBF986C5F0",
  sequenceNo: "c407a9cf-812f-497b",
  registrationID: "c407a9cf-812f-497b-908b-be77837caa05",
  images: {
    fingerprint: [
      {
        position: 1,
        base64Image: "BASE 64 WSQ IMAGE FINGER DATA",
      },
      {
        position: 2,
        base64Image: "BASE 64 WSQ IMAGE FINGER DATA",
      },
    ],
  },
};

export const configRegistionN = {
  clientKey: "90F578D73237485596B73902C1E6386D",
  registrationID: "c407a9cf-812f-497b-908b-be77837caa05",
  images: {
    fingerprint: [
      {
        position: 1,
        base64Image: "BASE 64 WSQ IMAGE FINGER DATA",
      },
      {
        position: 2,
        base64Image: "BASE 64 WSQ IMAGE FINGER DATA",
      },
    ],
  },
};

export const configToken = {
  API_URL: "https://bioplugin.cloudabis.com/v12",
  CLIENT_API_KEY: "e24b936c67ce4b89aa33208870ad0f45",

  CLIENT_KEY: "90F578D73237485596B73902C1E6386D",
};

export const configCapture = {
  CaptureType: "DoubleCapture",
  SingleCaptureMode: "LeftFingerCapture",
  QuickScan: "Enable",
  CaptureOperationName: "IDENTIFY",
  DeviceName: "DigitalPersona",
  TenPrint: "Enable",
  DualFingerPosition: "LeftIndexMiddle",
  CaptureTimeOut: 120,
  LeftFingerPosition: "LeftThumb",
  RightFingerPosition: "LeftThumb",
  BioMetricImageFormat: "BMP",
  IsFourFourTwoEnabled: "Enable",
  TemplateExtraction: true,
  CheckAllTogether: true,
  TenPrintCaptureMode: "Two_Fingers",
  ShowInTaskbar: "Disable",
  HideCaptureUI: "Disable",
  IncludeSlapFingers: true,
  IncludeFingerExceptionExemptions: true,
  EnabledRolledFingerCapture: true,
};

export const urlConfig = {
  urlCapture: "http://localhost:15896/api/CloudABISV12Captures/Fingerprint",

  urlDomain: "http://localhost:3000",
};

export const token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjkwRjU3OEQ3MzIzNzQ4NTU5NkI3MzkwMkMxRTYzODZEIiwiZ2l2ZW5fbmFtZSI6IkJZU1BFTkJPQVJEIiwiZW1haWwiOiJtaWNoYWVsb2Rpa2VtZUBnbWFpbC5jb20iLCJyb2xlIjoiR2VuZXJhbEN1c3RvbWVyIiwibmJmIjoxNzE3NzUwMTQ1LCJleHAiOjE3MTc3NzE3NDUsImlhdCI6MTcxNzc1MDE0NX0.-gj1924DtGwHOB7Ixd13taTJcZimv4Eh-IkTCADk_F0"