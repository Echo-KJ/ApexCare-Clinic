import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-950 text-indigo-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Clinic Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/vite.svg"
              alt="ApexCare Clinic Logo"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-lg font-semibold text-white">
              ApexCare Clinic
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            Providing ethical, compassionate, and accessible healthcare
            with a patient-first approach.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-indigo-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-indigo-300">About Us</Link></li>
            <li><Link to="/services" className="hover:text-indigo-300">Services</Link></li>
            <li><Link to="/doctors" className="hover:text-indigo-300">Doctors</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-300">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Primary Care</li>
            <li>Diagnostics</li>
            <li>Women & Child Care</li>
            <li>Specialist Consultations</li>
            <li>Emergency Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm mb-2">
            📍 123 Health Street,<br />
            City, State – 500001
          </p>

          <a
            href="tel:+916305987595"
            className="block font-semibold text-white hover:text-indigo-300 mb-2"
          >
            📞 +91 63059 87595
          </a>

          <p className="text-sm">
            🕒 Mon–Sat · 8:00 AM – 8:00 PM
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-indigo-800 text-center text-xs text-indigo-300 py-4">
        © {new Date().getFullYear()} ApexCare Clinic. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
