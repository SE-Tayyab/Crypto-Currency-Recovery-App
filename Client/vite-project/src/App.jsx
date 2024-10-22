import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AdminLogin from "./pages/deshboard/AdminLogin.jsx";
import Home from "./pages/Home.jsx";
import Requests from "./pages/deshboard/Requests.jsx";

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
