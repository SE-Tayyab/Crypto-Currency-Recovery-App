import React from "react";
import CryptoRecoveryForm from "../components/Home/CryptoRecoveryForm";
import CryptoTracingInfo from "../components/Home/CryptoTracingInfo";
import LastSection from "../components/Home/LastSection";

function Home() {
  return (
    <>
      <section id="Tracing-section">
        <CryptoRecoveryForm />
      </section>

      <section id="crypto-tracing">
        <CryptoTracingInfo />
      </section>

      <section>
        <LastSection />
      </section>
    </>
  );
}

export default Home;
