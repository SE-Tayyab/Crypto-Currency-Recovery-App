import express from "express";
import {
  addCryptoRecovery,
  getCryptoRecoveryCases,
  deleteCryptoRecovery,
} from "../controllers/cryptoRecoveryInfo.controller.js"; // Import the controllers

// Create a new router instance
const router = express.Router();

// Route to add a new crypto recovery case
router.post("/add", addCryptoRecovery);

// Route to get all crypto recovery cases
router.get("/cases", getCryptoRecoveryCases);

// Route to delete a specific crypto recovery case by ID
router.post("/delete", deleteCryptoRecovery);

export default router;
