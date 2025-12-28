import React, { useState, useMemo } from 'react';

const Doctors = () => {
  // Doctors Data - Realistic, human, balanced
  const doctorsData = [
    {
      id: 1,
      name: "Dr. Anil Kumar",
      specialty: "General Physician & Internal Medicine",
      experience: "12 years",
      education: "MBBS, MD - General Medicine",
      languages: ["English", "Telugu", "Hindi"],
      availability: "Mon-Fri: 9AM-6PM, Sat: 9AM-1PM",
      consultation: ["In-person", "Telemedicine"],
      focus: ["Preventive Care", "Chronic Disease Management", "Geriatric Care"],
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
      alt: "Dr. Anil Kumar, General Physician"
    },
    {
      id: 2,
      name: "Dr. Sravani Reddy",
      specialty: "Gynecology & Obstetrics",
      experience: "10 years",
      education: "MBBS, DGO, DNB - Obstetrics & Gynecology",
      languages: ["English", "Telugu", "Tamil"],
      availability: "Tue-Sat: 10AM-7PM",
      consultation: ["In-person", "Prenatal Teleconsultation"],
      focus: ["Pregnancy Care", "Women's Health", "Minimally Invasive Surgery"],
      photo: "https://images.unsplash.com/photo-1594824434340-7e7dfc37cabb?auto=format&fit=crop&q=80&w=400",
      alt: "Dr. Sravani Reddy, Gynecologist"
    },
    {
      id: 3,
      name: "Dr. Ravi Teja",
      specialty: "Pediatrics & Neonatology",
      experience: "8 years",
      education: "MBBS, DCH, DNB - Pediatrics",
      languages: ["English", "Telugu"],
      availability: "Mon-Sun: 9AM-8PM (Emergency on-call)",
      consultation: ["In-person", "Pediatric Teleconsultation"],
      focus: ["Childhood Vaccination", "Growth Monitoring", "Neonatal Care"],
      photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
      alt: "Dr. Ravi Teja, Pediatrician"
    },
    {
      id: 4,
      name: "Dr. Priya Sharma",
      specialty: "Cardiology",
      experience: "15 years",
      education: "MBBS, DM - Cardiology",
      languages: ["English", "Hindi", "Telugu"],
      availability: "Mon, Wed, Fri: 11AM-4PM",
      consultation: ["In-person", "Cardiac Consultation"],
      focus: ["Heart Disease Prevention", "Echocardiography", "Hypertension"],
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
      alt: "Dr. Priya Sharma, Cardiologist"
    },
    {
      id: 5,
      name: "Dr. Arjun Patel",
      specialty: "Orthopedics & Joint Replacement",
      experience: "18 years",
      education: "MBBS, MS - Orthopedics, Fellowship - Joint Replacement",
      languages: ["English", "Gujarati", "Telugu"],
      availability: "Tue, Thu, Sat: 9AM-5PM",
      consultation: ["In-person", "Post-op Follow-up"],
      focus: ["Arthroscopy", "Joint Replacement", "Sports Injuries"],
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
      alt: "Dr. Arjun Patel, Orthopedic Surgeon"
    },
    {
      id: 6,
      name: "Dr. Meera Nair",
      specialty: "Dermatology",
      experience: "9 years",
      education: "MBBS, MD - Dermatology",
      languages: ["English", "Malayalam", "Telugu"],
      availability: "Mon-Fri: 10AM-6PM",
      consultation: ["In-person", "Skin Consultation"],
      focus: ["Acne Treatment", "Skin Cancer Screening", "Cosmetic Dermatology"],
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
      alt: "Dr. Meera Nair, Dermatologist"
    }
  ];

  // Specialties for filtering
  const specialties = useMemo(() => {
    return [...new Set(doctorsData.map(doctor => doctor.specialty.split('&')[0].trim()))];
  }, []);

  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDoctor, setExpandedDoctor] = useState(null);

  // Filter doctors based on search and specialty
  const filteredDoctors = useMemo(() => {
    return doctorsData.filter(doctor => {
      const matchesSpecialty = selectedSpecialty === 'All' || 
        doctor.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase());
      
      const matchesSearch = searchQuery === '' ||
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.languages.some(lang => lang.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesSpecialty && matchesSearch;
    });
  }, [selectedSpecialty, searchQuery]);

  // Icon component
  const Icon = ({ name, className = "w-5 h-5" }) => {
    const icons = {
      user: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      medical: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      calendar: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      language: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      phone: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      video: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      chevronDown: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      ),
      check: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
      clock: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    };

    return icons[name] || null;
  };

  const toggleDoctorDetails = (doctorId) => {
    setExpandedDoctor(expandedDoctor === doctorId ? null : doctorId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ===== PAGE HEADER ===== */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-4">
              Our Medical Team
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
              Board-certified physicians dedicated to compassionate, evidence-based care. 
              Each member of our team brings expertise, experience, and a commitment to patient well-being.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SEARCH & FILTERS ===== */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by doctor name, specialty, or language..."
                    className="w-full px-4 py-3 pl-12 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search doctors"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Specialty Filter */}
              <div className="w-full md:w-auto">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium text-slate-700">Specialty:</label>
                  <select
                    className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 bg-white"
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    aria-label="Filter by specialty"
                  >
                    <option value="All">All Specialties</option>
                    {specialties.map((specialty, index) => (
                      <option key={index} value={specialty}>{specialty}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOCTORS GRID ===== */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Icon name="medical" className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No doctors found</h3>
              <p className="text-slate-600 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSpecialty('All');
                }}
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8 flex justify-between items-center">
                <p className="text-slate-600">
                  Showing <span className="font-semibold">{filteredDoctors.length}</span> doctor{filteredDoctors.length !== 1 ? 's' : ''}
                  {selectedSpecialty !== 'All' && ` in ${selectedSpecialty}`}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDoctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Doctor Header */}
                    <div className="p-6">
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Photo */}
                        <div className="sm:w-1/3">
                          <img
                            src={doctor.photo}
                            alt={doctor.alt}
                            className="w-32 h-32 mx-auto sm:mx-0 rounded-full object-cover border-4 border-white shadow-md"
                            loading="lazy"
                          />
                        </div>

                        {/* Basic Info */}
                        <div className="sm:w-2/3">
                          <h3 className="text-xl font-bold text-blue-950 mb-1">
                            {doctor.name}
                          </h3>
                          <p className="text-blue-600 font-medium mb-2">
                            {doctor.specialty}
                          </p>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Icon name="medical" className="w-4 h-4 text-blue-500" />
                              <span>{doctor.experience} experience</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Icon name="language" className="w-4 h-4 text-blue-500" />
                              <span>{doctor.languages.join(', ')}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Icon name="clock" className="w-4 h-4 text-blue-500" />
                              <span>{doctor.availability.split(':')[0]}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Consultation Types */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {doctor.consultation.includes('Telemedicine') && (
                          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                            <Icon name="video" className="w-3 h-3" />
                            Telemedicine
                          </span>
                        )}
                        {doctor.consultation.includes('In-person') && (
                          <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                            <Icon name="user" className="w-3 h-3" />
                            In-person
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <div className="border-t border-slate-200">
                      <button
                        onClick={() => toggleDoctorDetails(doctor.id)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                        aria-expanded={expandedDoctor === doctor.id}
                        aria-label={`Show details for ${doctor.name}`}
                      >
                        <span className="font-medium text-slate-700">
                          {expandedDoctor === doctor.id ? 'Show Less' : 'View Details'}
                        </span>
                        <Icon 
                          name="chevronDown" 
                          className={`w-5 h-5 text-slate-500 transition-transform ${expandedDoctor === doctor.id ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {/* Detailed Information */}
                      <div className={`overflow-hidden transition-all duration-300 ${expandedDoctor === doctor.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 pb-6 space-y-6">
                          {/* Education */}
                          <div>
                            <h4 className="font-medium text-slate-900 mb-2">Education & Credentials</h4>
                            <p className="text-slate-600 text-sm">{doctor.education}</p>
                          </div>

                          {/* Clinical Focus */}
                          <div>
                            <h4 className="font-medium text-slate-900 mb-2">Clinical Focus</h4>
                            <div className="flex flex-wrap gap-2">
                              {doctor.focus.map((area, index) => (
                                <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs">
                                  {area}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Full Availability */}
                          <div>
                            <h4 className="font-medium text-slate-900 mb-2">Availability</h4>
                            <p className="text-slate-600 text-sm">{doctor.availability}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="p-6 pt-0 border-t border-slate-200">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={`/appointments?doctor=${doctor.id}`}
                          className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                          Book Appointment
                        </a>
                        <a
                          href="tel:+18001234567"
                          className="flex-1 bg-white border border-blue-600 text-blue-600 text-center py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                        >
                          Call Clinic
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Need Help Choosing a Doctor?
              </h2>
              
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Our patient coordinators can help match you with the right specialist 
                based on your specific health needs and preferences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+18001234567"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-3"
                >
                  <Icon name="phone" className="w-5 h-5" />
                  Speak with a Coordinator
                </a>
                
                <a
                  href="/contact"
                  className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
                >
                  Send a Message
                </a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-3">
                      <Icon name="calendar" className="w-6 h-6" />
                    </div>
                    <p className="text-sm text-slate-700">Same-day appointments available</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-3">
                      <Icon name="video" className="w-6 h-6" />
                    </div>
                    <p className="text-sm text-slate-700">Virtual consultations offered</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-3">
                      <Icon name="check" className="w-6 h-6" />
                    </div>
                    <p className="text-sm text-slate-700">Most insurance accepted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACCESSIBILITY NOTE ===== */}
      <section className="py-8 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-600 text-sm leading-relaxed">
              All our physicians are licensed and board-certified. Professional interpreter services 
              are available for all appointments. Need special accommodations? Please contact us in advance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;