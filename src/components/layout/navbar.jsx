import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    // Added 'relative' here so the absolute menu positions itself relative to this nav
    <nav className="relative bg-blue-950 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/vite.svg"
            alt="ApexCare Clinic Logo"
            className="w-10 h-10 object-contain"
          />
          <div className="leading-tight">
            <h1 className="text-lg font-semibold tracking-wide">
              ApexCare Clinic
            </h1>
            <p className="text-xs text-indigo-200">
              Compassion. Precision. Care.
            </p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-indigo-300 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-indigo-300 transition-colors">About</Link>
          <Link to="/services" className="hover:text-indigo-300 transition-colors">Services</Link>
          <Link to="/doctors" className="hover:text-indigo-300 transition-colors">Doctors</Link>
          <Link to="/contact" className="hover:text-indigo-300 transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Popup */}
      {/* 1. absolute: Takes it out of the flow (floats on top)
          2. top-full: Starts exactly at the bottom of the navbar
          3. left-0 w-full: Spans the full width
          4. z-50: Ensures it sits on top of everything else
      */}
      <div 
        className={`${
          open ? "block" : "hidden"
        } md:hidden absolute top-full left-0 w-full bg-blue-950 border-t border-indigo-800 shadow-xl z-50`}
      >
        <div className="flex flex-col p-6 gap-4 text-sm font-medium">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-indigo-300 py-2 border-b border-indigo-900">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="hover:text-indigo-300 py-2 border-b border-indigo-900">About</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="hover:text-indigo-300 py-2 border-b border-indigo-900">Services</Link>
          <Link to="/doctors" onClick={() => setOpen(false)} className="hover:text-indigo-300 py-2 border-b border-indigo-900">Doctors</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-indigo-300 py-2 border-b border-indigo-900">Contact</Link>

           <div className="pt-4 text-xs text-indigo-200">
               {/* The 'tel:' link triggers the phone app */}
                 <a 
                    href="tel:+916305987595" 
                   className="block font-bold text-white mb-1 hover:text-indigo-300 transition-colors">              📞 +91 63059 87595
                 </a>
                   <p>Mon–Sat · 8:00 AM – 8:00 PM</p>
                     </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;