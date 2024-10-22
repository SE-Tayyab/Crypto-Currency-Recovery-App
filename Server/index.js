import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongooseConnector from "./mongoDb/mongooseConnector.js";
import cryptoRecoveryRoutes from "./routes/cryptoRecoveryInfo.route.js";

dotenv.config();

const app = express();

// const whitelist = [
//   "http://localhost:5173",
//   "https://crypto-currency-recovery-app-dxux.vercel.app/",
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions));

app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET"],
    credentials: true,
  })
);

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
