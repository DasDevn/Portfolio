import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Hero from "./components/Hero";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col h-screen font-mono bg-white text-black">
      <Header />
      <main
        className={`flex-grow ${isHome ? "" : "overflow-y-auto pt-20 pb-16"}`}
      >
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
