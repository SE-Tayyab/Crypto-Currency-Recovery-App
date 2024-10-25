import mongoose from "mongoose";

// Define the schema for the form data
const cryptoRecoverySchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"], // Email validation
    },
    countryCode: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    cryptoName: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    caseReport: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "in progress", "failed"], // Enum for status values
      default: "pending", // Default status is pending
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set the created date
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
);

// Create the model from the schema
const CryptoRecovery = mongoose.model("CryptoRecovery", cryptoRecoverySchema);

export default CryptoRecovery;
