import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/public/home";
import About from "./pages/public/about";
import Services from "./pages/public/services";
import Doctors from "./pages/public/doctors";
import Contact from "./pages/public/contact";

function App() {
  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* Navbar stays full width */}
      <Navbar />

      {/* Main Content: This keeps your text readable in the middle */}
      {/* flex-grow: 1 pushes the footer down if the page is empty */}
      <main style={{ 
        width: "100%", 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "40px 20px",
        flexGrow: 1 
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer stays full width */}
      <Footer />
    </div>
  );
}

export default App;