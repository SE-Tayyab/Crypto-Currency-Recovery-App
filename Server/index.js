import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongooseConnector from "./mongoDb/mongooseConnector.js";
import cryptoRecoveryRoutes from "./routes/cryptoRecoveryInfo.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("hello from backend");
});

// Use the routes for the crypto recovery cases
app.use("/api/v1/crypto-recovery", cryptoRecoveryRoutes);

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await mongooseConnector(process.env.MONGOO_URL);
  } catch (e) {
    console.log(e, "while calling mongooseConnector() in index.js");
    return; // Exit if there's a connection error
  }

  app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);
  });
};

startServer();
