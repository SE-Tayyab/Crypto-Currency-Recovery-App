import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componenets/header";
import Footer from "./componenets/Footer";
import AdminLogin from "./pages/deshboard/AdminLogin";
import Home from "./pages/Home";
import Requests from "./pages/deshboard/Requests";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <>
          <header>
            <Header />
          </header>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/deshboard" element={<AdminLogin />} />
              <Route path="/requests" element={<Requests />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      </Router>
    </div>
  );
}

export default App;
