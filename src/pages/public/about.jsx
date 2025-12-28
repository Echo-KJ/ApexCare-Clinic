import React from 'react';

// Reusing the simple Icon component pattern for consistency without external dependencies
const Icon = ({ name, className = "w-6 h-6" }) => {
  const icons = {
    mission: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    vision: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
    values: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    shield: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    users: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 3.75V21m0 0h-6m6 0h6" /></svg>,
    microscope: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  };
  return icons[name] || null;
};

const About = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      
      {/* A. INTRO / IDENTITY */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            ApexCare Clinic
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
            We are a community-focused healthcare provider committed to safe, ethical, and accessible medical care. 
            Since 1985, our sole purpose has been to earn your trust, one patient at a time.
          </p>
          <div className="h-1 w-24 bg-blue-600 mx-auto mt-10 rounded-full"></div>
        </div>
      </section>

      {/* B. MISSION, VISION, VALUES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Mission */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                <Icon name="mission" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide high-quality medical services that are accessible, affordable, and centered around the dignity of every individual who walks through our doors.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                <Icon name="vision" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                A healthier community where expert medical care is a standard right, not a privilege, supported by modern science and human compassion.
              </p>
            </div>

            {/* Values */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                <Icon name="values" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Values</h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>Integrity:</strong> Honest communication.<br />
                <strong>Safety:</strong> Zero compromise on hygiene.<br />
                <strong>Empathy:</strong> Treating the person, not just the ailment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* C. WHY CHOOSE US (Proof of Standards) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why patients trust us</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We believe trust is built through consistency. Here is what you can expect from every visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-5 items-start">
              <div className="flex-shrink-0 mt-1 text-blue-600">
                <Icon name="shield" className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Patient-First Ethics</h4>
                <p className="text-slate-600 leading-relaxed">
                  We never recommend unnecessary tests or procedures. Your health plan is decided based on clinical evidence and your best interest alone.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="flex-shrink-0 mt-1 text-blue-600">
                <Icon name="users" className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Qualified Professionals</h4>
                <p className="text-slate-600 leading-relaxed">
                  Every doctor at ApexCare is board-certified with verifiable credentials. We prioritize continuous medical education to stay current.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="flex-shrink-0 mt-1 text-blue-600">
                <Icon name="microscope" className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Clinical Safety</h4>
                <p className="text-slate-600 leading-relaxed">
                  We follow rigorous sterilization protocols and international safety standards to ensure a risk-free environment for you and your family.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="flex-shrink-0 mt-1 text-blue-600">
                <Icon name="vision" className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Transparent Pricing</h4>
                <p className="text-slate-600 leading-relaxed">
                  No hidden costs. We provide clear billing and financial counseling before major procedures so you can make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. LEADERSHIP (Humanizing the Institution) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden border-4 border-slate-100 shadow-lg bg-slate-200">
              {/* Placeholder for Medical Director Image */}
              <img 
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400" 
                alt="Dr. Sarah Johnson" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Dr. Sarah Johnson, MD</h2>
              <p className="text-blue-600 font-medium mb-6 uppercase tracking-wide text-sm">Medical Director & Chief Cardiologist</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                "I founded ApexCare with a simple belief: that a hospital should feel like a place of healing, not just a place of business. For over 15 years, I have dedicated my practice to building a team that listens first and treats second."
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• MD, Cardiology - Stanford University</li>
                <li>• 20+ Years Clinical Experience</li>
                <li>• Member, American College of Cardiology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* F. COMMUNITY & ETHICS (The "Quiet" Section) */}
      <section className="py-16 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Part of the Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-2">Preventive Care</h4>
              <p className="text-sm leading-relaxed opacity-80">
                Regular free health camps to detect diabetes and hypertension early in underserved neighborhoods.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Patient Privacy</h4>
              <p className="text-sm leading-relaxed opacity-80">
                We strictly adhere to HIPAA guidelines. Your medical data is yours alone and is secured with enterprise-grade encryption.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Accessibility</h4>
              <p className="text-sm leading-relaxed opacity-80">
                Our facility is fully wheelchair accessible, and we offer interpretation services for 4+ languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* G. CLOSING CTA (Gentle) */}
      <section className="py-24 bg-blue-50 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">We are here when you need us.</h2>
          <p className="text-slate-600 mb-10 text-lg">
            Whether for a routine checkup or an urgent concern, our doors are open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Contact Us
            </a>
            <a 
              href="/doctors" 
              className="bg-white text-blue-600 border border-blue-200 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;