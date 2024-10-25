import CryptoRecovery from "../models/cryptoRecoveryInfo.model.js"; // Assuming you saved the model in models/cryptoRecoveryModel.js

// Controller to add form data
export const addCryptoRecovery = async (req, res) => {
  try {
    // Extract form data from the request body
    const {
      firstName,
      lastName,
      email,
      phone,
      cryptoName,
      amount,
      country,
      caseReport,
      countryCode,
    } = req.body;
    // Validate required fields (this is optional since we also have validation in the model)
    if (
      !firstName ||
      !countryCode ||
      !lastName ||
      !email ||
      !phone ||
      !cryptoName ||
      !amount ||
      !country ||
      !caseReport
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create new CryptoRecovery entry
    const newCryptoRecovery = new CryptoRecovery({
      firstName,
      lastName,
      email,
      phone,
      cryptoName,
      amount,
      country,
      caseReport,
      countryCode,
    });

    // Save the entry in the database
    await newCryptoRecovery.save();

    // Return success response
    return res.status(201).json({
      success: true,
      message: "Case created successfully",
      data: newCryptoRecovery,
    });
  } catch (error) {
    console.error("Error while adding case:", error.message);

    // Return error response
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating the case",
      error: error.message,
    });
  }
};

// Controller to get all form data
export const getCryptoRecoveryCases = async (req, res) => {
  try {
    // Fetch all recovery cases from the database
    const recoveryCases = await CryptoRecovery.find();

    // If no cases are found
    if (!recoveryCases || recoveryCases.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No recovery cases found",
      });
    }

    // Return success response with data
    return res.status(200).json({
      success: true,
      message: "Recovery cases fetched successfully",
      data: recoveryCases,
    });
  } catch (error) {
    console.error("Error while fetching cases:", error.message);

    // Return error response
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching recovery cases",
      error: error.message,
    });
  }
};

// Controller to delete form data by ID
export const deleteCryptoRecovery = async (req, res) => {
  try {
    const { id } = req.body;

    // Check if ID is provided
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "ID is required for deletion",
      });
    }

    // Find and delete the entry from the database
    const deletedCase = await CryptoRecovery.findByIdAndDelete(id);

    // If the case doesn't exist
    if (!deletedCase) {
      return res.status(404).json({
        success: false,
        message: "Recovery case not found",
      });
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Recovery case deleted successfully",
      data: deletedCase, // You can choose to omit this if not needed
    });
  } catch (error) {
    console.error("Error while deleting case:", error.message);

    // Return error response
    return res.status(500).json({
      success: false,
      message: "An error occurred while deleting the recovery case",
      error: error.message,
    });
  }
};
