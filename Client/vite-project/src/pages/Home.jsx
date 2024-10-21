import React from "react";
import CryptoRecoveryForm from "../componenets/Home/CryptoRecoveryForm";
import CryptoTracingInfo from "../componenets/Home/CryptoTracingInfo";
import LastSection from "../componenets/Home/LastSection";

function Home() {
  return (
    <>
      <section id="Tracing-section">
        <CryptoRecoveryForm />
      </section>

      <section id="crypto-tracing">
        <CryptoTracingInfo />
      </section>

      <section >
        <LastSection />
      </section>
    </>
  );
}

export default Home;
