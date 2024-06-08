import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema(
  {
    pensionerID: {
      type: String,
      unique: true,
      required: [true, "--Provide Pension Number--"],
    },
    pensionN: {
      type: String,
      unique: true,
      required: [true, "--Provide Pension Number--"],
    },

    Surname: {
      type: String,
      required: [true, "Provide Pension Surname---"],
    },

    OtherName: {
      type: String,
      required: [true, "Provide Pension Surname---"],
    },

    DateOfBirth: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },

    StateOfOrigin: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },

    LGAOfOrigin: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },

    HomeTown: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },

    ResidentialAddress: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },

    PhoneNumber: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },

    RetirementMDA: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },

    MDATYPE: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },

    RetirementRank: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },

    RetirementGL: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },

    FirstApptDate: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },

    RetirementDate: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },
    BankName: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },

    AccountNumber: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },

    BVNNumber: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },
    PensionAuthNo: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },
    MonthlyPension: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },
    PensionerStatus: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },
    TrackingID: {
      type: String,
      required: [true, "Provide Pension Surname"],
    },
  },
  { timestamps: true },
);

export default mongoose.models.Pension ||
  mongoose.model("Pension", candidateSchema);
