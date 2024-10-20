import { useState } from "react";
import Header from "./componenets/header";
import CryptoRecoveryForm from "./componenets/Home/CryptoRecoveryForm";
import CryptoTracingInfo from "./componenets/Home/CryptoTracingInfo";
import LastSection from "./componenets/Home/LastSection";
import Footer from "./componenets/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <CryptoRecoveryForm />
        <CryptoTracingInfo />
        <LastSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
