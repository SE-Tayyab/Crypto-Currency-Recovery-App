import mongoose from "mongoose";

const mongooseConnector = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("mongooDb is conneted"))
    .catch((e) => {
      console.log(e, "while connecting mongooDb database");
    });
};

export default mongooseConnector;
