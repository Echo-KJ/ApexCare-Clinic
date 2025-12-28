import React, { useState } from 'react';

const Home = () => {
  const [expandedService, setExpandedService] = useState(null);

  // Data Configuration
  const hospitalData = {
    hero: {
      headline: "Expert Medical Care When You Need It Most",
      subtext: "Comprehensive healthcare services with compassion and expertise. We're here for you and your family.",
      stats: [
        { value: "200+", label: "Expert Doctors" },
        { value: "50+", label: "Specialties" },
        { value: "24/7", label: "Emergency Care" },
      ]
    },

    quickActions: [
      {
        id: 1,
        title: "Find a Doctor",
        description: "Search our specialists by name, specialty, or location",
        icon: "doctor",
        link: "#doctors",
        color: "blue"
      },
      {
        id: 2,
        title: "Our Services",
        description: "Explore our comprehensive medical services and treatments",
        icon: "services",
        link: "#services",
        color: "green"
      },
      {
        id: 3,
        title: "Book Appointment",
        description: "Schedule in-person or virtual consultation",
        icon: "calendar",
        link: "#appointments",
        color: "purple"
      },
      {
        id: 4,
        title: "Emergency Care",
        description: "Immediate medical attention available 24/7",
        icon: "emergency",
        link: "#emergency",
        color: "red"
      }
    ],

    services: [
      {
        id: 1,
        category: "Primary Care",
        description: "Routine checkups, preventive care, and chronic disease management",
        icon: "stethoscope"
      },
      {
        id: 2,
        category: "Emergency & Trauma",
        description: "24/7 emergency services and trauma center for critical care",
        icon: "emergency"
      },
      {
        id: 3,
        category: "Diagnostics",
        description: "Advanced imaging, lab tests, and comprehensive diagnostics",
        icon: "scan"
      },
      {
        id: 4,
        category: "Women & Child Care",
        description: "OB/GYN, pediatrics, and family-centered care services",
        icon: "family"
      },
      {
        id: 5,
        category: "Surgery & Specialties",
        description: "Advanced surgical procedures and specialized medical treatments",
        icon: "surgery"
      }
    ],

    doctors: [
      {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Cardiology",
        experience: "15 years",
        photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
        languages: ["English", "Spanish"],
        available: true
      },
      {
        id: 2,
        name: "Dr. Michael Chen",
        specialty: "Neurology",
        experience: "12 years",
        photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w-400",
        languages: ["English", "Mandarin"],
        available: true
      },
      {
        id: 3,
        name: "Dr. Maria Rodriguez",
        specialty: "Pediatrics",
        experience: "18 years",
        photo: "https://images.unsplash.com/photo-1594824434340-7e7dfc37cabb?auto=format&fit=crop&q=80&w=400",
        languages: ["English", "Spanish", "French"],
        available: false
      }
    ],

    testimonials: [
      {
        id: 1,
        text: "The care I received during my surgery was exceptional. The entire team was professional and compassionate.",
        author: "James Wilson",
        condition: "Cardiac Surgery"
      },
      {
        id: 2,
        text: "As a new mother, I felt completely supported by the maternity and pediatric teams. Thank you.",
        author: "Lisa Thompson",
        condition: "Maternity Care"
      }
    ],

    location: {
      address: "123 Medical Center Drive, Springfield, ST 12345",
      hours: "Mon-Fri: 7:00 AM - 9:00 PM | Sat: 8:00 AM - 5:00 PM | Sun: Emergency Only",
      parking: "Free parking available in designated hospital lots",
      phone: "(800) 123-4567"
    }
  };

  // Icon Component
  const Icon = ({ name, className = "w-6 h-6" }) => {
    const icons = {
      doctor: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      services: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      calendar: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      emergency: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stethoscope: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      scan: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      family: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 3.75V21m0 0h-6m6 0h6" />
        </svg>
      ),
      surgery: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      check: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
      phone: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      location: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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

  // Accessibility: Skip to content link
  const handleSkipToContent = (e) => {
    e.preventDefault();
    document.querySelector('#main-content').focus();
    document.querySelector('#main-content').scrollIntoView();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to Content Link (Accessibility) */}
      <a
        href="#main-content"
        onClick={handleSkipToContent}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      {/* ===== HERO SECTION ===== */}
      <section 
        id="main-content"
        className="relative bg-gradient-to-b from-blue-950 to-blue-900 text-white pt-12 pb-24 md:pt-20 md:pb-32"
        role="main"
        aria-label="Hospital introduction"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="inline-block bg-blue-800/50 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Trusted Healthcare Since 1985
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                {hospitalData.hero.headline}
              </h1>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl">
                {hospitalData.hero.subtext}
              </p>
            </div>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#appointments"
                className="bg-white text-blue-950 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg text-center"
              >
                Book Appointment
              </a>
              <a
                href="tel:+18001234567"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors text-center"
              >
                Call Now: (800) 123-4567
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl">
              {hospitalData.hero.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Image - Real Medical Setting */}
        <div className="absolute right-0 top-1/4 bottom-0 w-1/2 hidden lg:block">
          <div className="relative h-full">
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=1200"
              alt="Modern hospital facility with medical professionals"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ===== QUICK ACTIONS ===== */}
      <section className="py-12 md:py-20 bg-white -mt-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              What brings you here today?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hospitalData.quickActions.map((action) => (
                <a
                  key={action.id}
                  href={action.link}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 rounded-xl bg-${action.color}-50 text-${action.color}-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={action.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {action.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {action.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section id="services" className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Our Medical Services
            </h2>
            <p className="text-slate-600">
              Comprehensive healthcare across all major specialties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {hospitalData.services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
                onMouseEnter={() => setExpandedService(service.id)}
                onMouseLeave={() => setExpandedService(null)}
                onFocus={() => setExpandedService(service.id)}
                onBlur={() => setExpandedService(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Icon name={service.icon} className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {service.category}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {service.description}
                    </p>
                    <a
                      href={`/services#${service.category.toLowerCase().replace(/ & /g, '-')}`}
                      className="inline-block mt-4 text-blue-600 font-medium text-sm hover:underline"
                      aria-label={`Learn more about ${service.category}`}
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DOCTORS & TRUST ===== */}
      <section id="doctors" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Meet Our Specialists
            </h2>
            <p className="text-slate-600">
              Board-certified physicians dedicated to your care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {hospitalData.doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={doctor.photo}
                    alt={`Dr. ${doctor.name}, ${doctor.specialty}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {!doctor.available && (
                    <div className="absolute top-4 right-4 bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold">
                      On Leave
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {doctor.specialty}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Icon name="check" className="w-4 h-4 text-green-500" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {doctor.languages.map((lang) => (
                        <span
                          key={lang}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {doctor.available && (
                    <a
                      href={`#appointments?doctor=${doctor.id}`}
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Book Consultation
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {hospitalData.testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
                >
                  <div className="flex items-center gap-2 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-600">{testimonial.condition}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== APPOINTMENT CTA ===== */}
      <section id="appointments" className="py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              We accept most major insurance plans. Same-day appointments available for urgent care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#appointments-form"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-md text-center"
              >
                Book Online Now
              </a>
              <div className="flex flex-col items-center">
                <p className="text-slate-600 mb-2">Or call us directly:</p>
                <a
                  href="tel:+18001234567"
                  className="text-blue-600 font-bold text-xl hover:text-blue-700"
                >
                  <Icon name="phone" className="inline-block w-5 h-5 mr-2" />
                  (800) 123-4567
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="font-bold text-slate-900 mb-4">Office Hours</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <p className="font-medium text-slate-900">Monday - Friday</p>
                  <p className="text-slate-600">7:00 AM - 9:00 PM</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Saturday</p>
                  <p className="text-slate-600">8:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Sunday</p>
                  <p className="text-slate-600">Emergency Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATION & ACCESSIBILITY ===== */}
      <section id="locations" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Location Info */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  Our Location
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="location" className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Address</h3>
                      <p className="text-slate-600">{hospitalData.location.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="clock" className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Visiting Hours</h3>
                      <p className="text-slate-600">{hospitalData.location.hours}</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-2xl p-6">
                    <h3 className="font-bold text-slate-900 mb-3">Accessibility Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <Icon name="check" className="w-5 h-5 text-green-500" />
                        <span>Wheelchair accessible entrances</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="check" className="w-5 h-5 text-green-500" />
                        <span>Free parking with disability spots</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="check" className="w-5 h-5 text-green-500" />
                        <span>Sign language interpreters available</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="check" className="w-5 h-5 text-green-500" />
                        <span>Braille signage throughout facility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="bg-slate-100 rounded-2xl p-6">
                <div className="aspect-video rounded-xl bg-slate-200 flex items-center justify-center mb-4">
                  <p className="text-slate-600">Interactive map would appear here</p>
                </div>
                <p className="text-slate-600 text-sm">
                  {hospitalData.location.parking}
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                >
                  Get directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EMERGENCY INFO (Repeated) ===== */}
      <section id="emergency" className="py-12 md:py-16 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Emergency Medical Care
              </h2>
              <p className="text-slate-600 mb-6">
                If you are experiencing a medical emergency, please call 911 or come directly to our Emergency Department.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 rounded-xl p-6">
                  <div className="text-red-600 font-bold text-2xl mb-2">911</div>
                  <p className="text-slate-700">For life-threatening emergencies</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="text-blue-600 font-bold text-2xl mb-2">
                    (800) 123-4567
                  </div>
                  <p className="text-slate-700">Hospital Emergency Department</p>
                </div>
              </div>
              
              <div className="text-left bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">When to Come to Emergency:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Chest pain or difficulty breathing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Severe bleeding or head injury</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Stroke symptoms (sudden weakness, speech difficulty)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Severe allergic reactions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Floating Emergency Button (Mobile) */}
      <a
        href="tel:911"
        className="fixed bottom-6 right-6 lg:hidden bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-colors z-50"
        aria-label="Emergency call 911"
      >
        <span className="font-bold">911</span>
      </a>
    </div>
  );
};

export default Home;