import React, { useState, useMemo, useCallback } from 'react';

// ==================== DATA CONFIGURATION ====================
// All content is centralized here for easy updates
const PAGE_DATA = {
  // HERO SECTION
  hero: {
    title: "World-Class Care",
    highlight: "Without Compromise.",
    description: "We combine cutting-edge technology with compassionate care. From routine checkups to complex surgeries, our multi-specialty clinic is equipped to handle your health journey.",
    ctas: [
      { id: 1, text: "Book an Appointment", variant: "primary", icon: "calendar" },
      { id: 2, text: "View Specialists", variant: "secondary", icon: "users" }
    ]
  },

  // STATS
  stats: [
    { id: 1, value: "25+", label: "Years Experience", color: "green", icon: "briefcase" },
    { id: 2, value: "15k+", label: "Happy Patients", color: "green", icon: "heart" },
    { id: 3, value: "120", label: "Expert Doctors", color: "purple", icon: "user-md" },
    { id: 4, value: "24/7", label: "Emergency Support", color: "red", icon: "clock" }
  ],

  // SERVICES
  services: [
    {
      id: 1,
      title: "Cardiology & Heart Care",
      description: "Comprehensive cardiac diagnostics including ECG, Echo, and TMT. Our interventional cardiologists specialize in angiography and angioplasty.",
      icon: "heart",
      features: ["ECG", "Echo", "TMT", "Angiography"],
      waitTime: "1-2 days",
      available: true
    },
    {
      id: 2,
      title: "Neurology & Neurosurgery",
      description: "Advanced treatment for stroke, epilepsy, and spinal disorders. Equipped with state-of-the-art MRI and CT scan facilities for precision diagnosis.",
      icon: "brain",
      features: ["MRI", "CT Scan", "EEG", "EMG"],
      waitTime: "2-3 days",
      available: true
    },
    {
      id: 3,
      title: "Pediatrics & Neonatology",
      description: "Dedicated care for infants, children, and adolescents. Our Level 3 NICU ensures the best care for newborns requiring intensive support.",
      icon: "baby",
      features: ["NICU", "Vaccination", "Growth Monitoring", "Nutrition"],
      waitTime: "Same day",
      available: true
    },
    {
      id: 4,
      title: "Orthopedics & Joint Replacement",
      description: "Specialized in trauma care, arthroscopy, and total joint replacements. Rehabilitation services included for faster recovery.",
      icon: "bone",
      features: ["Arthroscopy", "Joint Replacement", "Trauma Care", "Rehab"],
      waitTime: "3-4 days",
      available: true
    },
    {
      id: 5,
      title: "Dermatology & Cosmetology",
      description: "Expert solutions for skin, hair, and nail conditions. Laser treatments, chemical peels, and anti-aging therapies available.",
      icon: "skin",
      features: ["Laser", "Chemical Peels", "Acne Treatment", "Hair Care"],
      waitTime: "1 week",
      available: true
    },
    {
      id: 6,
      title: "Dental & Maxillofacial",
      description: "From routine cleaning to complex implants and cosmetic smile design. 24/7 emergency dental trauma care available.",
      icon: "tooth",
      features: ["Implants", "Cleaning", "Braces", "Emergency"],
      waitTime: "2-3 days",
      available: true
    }
  ],

  // TECHNOLOGY
  technology: {
    title: "Precision Medicine Powered by AI & Robotics",
    description: "We believe in staying ahead of the curve. Our clinic employs the latest in Robotic Surgery Systems for minimally invasive procedures, ensuring faster recovery times and less pain.",
    features: [
      "Da Vinci Robotic Surgical System",
      "3 Tesla MRI & 128-Slice CT Scan",
      "AI-Assisted Diagnostic Pathology",
      "Telemedicine & Remote Monitoring"
    ],
    cta: "Read Technology Report"
  },

  // PRICING
  pricing: [
    {
      id: 1,
      title: "Basic Wellness",
      price: 49,
      popular: false,
      features: [
        "Complete Blood Count",
        "Blood Sugar Fasting",
        "Cholesterol Check",
        "General Physician Consult",
        "BMI & BP Check"
      ],
      color: "blue"
    },
    {
      id: 2,
      title: "Executive Premium",
      price: 129,
      popular: true,
      features: [
        "All Basic Features",
        "Liver Function Test",
        "Kidney Function Test",
        "ECG & Chest X-Ray",
        "Dietician Consultation",
        "Dental Screening"
      ],
      color: "purple"
    },
    {
      id: 3,
      title: "Whole Body Advanced",
      price: 299,
      popular: false,
      features: [
        "All Premium Features",
        "Thyroid Profile",
        "Vitamin D & B12",
        "Cardiac Stress Test (TMT)",
        "Abdominal Ultrasound",
        "Cancer Markers (PSA/CA-125)"
      ],
      color: "cyan"
    }
  ],

  // SCHEDULE
  schedule: [
    {
      id: 1,
      department: "Cardiology",
      morning: ["Mon", "Wed", "Fri"],
      evening: ["Tue", "Thu", "Sat"],
      doctors: ["Dr. Smith", "Dr. Patel"],
      availability: "High",
      emergency: true
    },
    {
      id: 2,
      department: "Orthopedics",
      morning: ["Daily"],
      evening: ["Mon", "Wed", "Fri"],
      doctors: ["Dr. James", "Dr. Rao"],
      availability: "Medium",
      emergency: true
    },
    {
      id: 3,
      department: "Gynecology",
      morning: ["Tue", "Thu", "Sat"],
      evening: ["Daily"],
      doctors: ["Dr. Sarah", "Dr. Emily"],
      availability: "High",
      emergency: true
    },
    {
      id: 4,
      department: "Pediatrics",
      morning: ["Daily"],
      evening: ["Daily"],
      doctors: ["Dr. Brown", "Dr. Lee"],
      availability: "Low",
      emergency: true
    }
  ],

  // FAQ
  faqs: [
    {
      id: 1,
      question: "Do you accept insurance?",
      answer: "Yes, we accept major insurance plans including BlueCross, Aetna, Cigna, and UnitedHealthcare. Please verify your coverage with our billing department prior to your visit.",
      category: "billing"
    },
    {
      id: 2,
      question: "Can I book a video consultation?",
      answer: "Absolutely. Telemedicine appointments are available for general consultations, follow-ups, and dermatology assessments. You can book these directly through our patient portal.",
      category: "appointments"
    },
    {
      id: 3,
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid photo ID, your insurance card, a list of current medications, and any previous medical records or test results relevant to your condition.",
      category: "preparation"
    },
    {
      id: 4,
      question: "Do you have 24/7 emergency services?",
      answer: "Yes, our Trauma and Emergency department is open 24 hours a day, 365 days a year, staffed by board-certified emergency physicians.",
      category: "emergency"
    }
  ],

  // FINAL CTA
  finalCta: {
    title: "Ready to prioritize your health?",
    description: "Don't wait for symptoms to worsen. Early detection is the key to a healthy life. Schedule your visit today.",
    buttonText: "Book Appointment Now"
  }
};

// ==================== ICON COMPONENTS ====================
const Icon = ({ name, className = "w-6 h-6" }) => {
  const icons = {
    heart: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    brain: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    baby: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bone: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    skin: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
      </svg>
    ),
    tooth: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    calendar: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    users: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 3.75V21m0 0h-6m6 0h6" />
      </svg>
    ),
    briefcase: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    'user-md': (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    clock: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    check: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    ),
    chevronDown: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    ),
    phone: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  };

  return icons[name] || <span className={className}>?</span>;
};

// ==================== REUSABLE COMPONENTS ====================

// Section wrapper with consistent spacing
const Section = ({ children, bg = "white", padding = "py-12 md:py-24", className = "" }) => (
  <section className={`${padding} bg-${bg} ${className}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

// Section title component
const SectionTitle = ({ subtitle, title, description, className = "" }) => (
  <div className={`text-center mb-10 md:mb-16 ${className}`}>
    {subtitle && (
      <span className="inline-block text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">
        {subtitle}
      </span>
    )}
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-slate-600 text-lg max-w-3xl mx-auto">
        {description}
      </p>
    )}
    <div className="w-20 h-1.5 bg-blue-500 mx-auto mt-6 rounded-full"></div>
  </div>
);

// Service Card Component
const ServiceCard = React.memo(({ service, onClick }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = useCallback(() => {
    setExpanded(!expanded);
    onClick?.(service);
  }, [expanded, service, onClick]);

  return (
    <div className={`group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full flex flex-col ${!service.available ? 'opacity-60' : ''}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
          <Icon name={service.icon} className="w-7 h-7" />
        </div>
        {service.waitTime && (
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${service.waitTime === 'Same day' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
            {service.waitTime}
          </span>
        )}
      </div>
      
      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 line-clamp-2">
        {service.title}
      </h3>
      
      <p className={`text-slate-600 text-sm leading-relaxed mb-4 flex-grow ${expanded ? '' : 'line-clamp-3'}`}>
        {service.description}
      </p>

      {expanded && service.features && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mt-2">
            {service.features.map((feature, idx) => (
              <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100">
        <button
          onClick={handleClick}
          className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1"
        >
          {expanded ? 'Show Less' : 'Learn More'} 
          <span className={`transition-transform ${expanded ? 'rotate-180' : ''}`}>→</span>
        </button>
        
        <button className="text-sm bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-lg font-medium transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
});

// Pricing Card Component
const PricingCard = React.memo(({ plan }) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  
  const displayFeatures = useMemo(() => {
    return showAllFeatures ? plan.features : plan.features.slice(0, 3);
  }, [plan.features, showAllFeatures]);

  return (
    <div className={`relative p-6 md:p-8 rounded-3xl border ${plan.popular ? 'border-blue-500 ring-4 ring-blue-500/20 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-900'} flex flex-col h-full`}>
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap">
          Most Popular
        </span>
      )}
      
      <h3 className="text-lg font-semibold opacity-80 mb-2">{plan.title}</h3>
      
      <div className="my-4">
        <span className="text-3xl md:text-4xl font-bold">${plan.price}</span>
        <span className="opacity-60 text-sm ml-2">/checkup</span>
      </div>
      
      <ul className="space-y-3 mb-6 flex-1">
        {displayFeatures.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <Icon name="check" className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-blue-400' : 'text-blue-600'}`} />
            <span>{feature}</span>
          </li>
        ))}
        
        {plan.features.length > 3 && !showAllFeatures && (
          <li className="text-sm opacity-60">
            + {plan.features.length - 3} more features
          </li>
        )}
      </ul>
      
      <div className="space-y-3">
        {plan.features.length > 3 && (
          <button
            onClick={() => setShowAllFeatures(!showAllFeatures)}
            className={`text-sm ${plan.popular ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'} font-medium`}
          >
            {showAllFeatures ? 'Show Less' : 'View All Features'}
          </button>
        )}
        
        <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-blue-500 hover:bg-blue-400 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
          Book Now
        </button>
      </div>
    </div>
  );
});

// FAQ Item Component
const FaqItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => onToggle(faq.id)}
        className="w-full flex justify-between items-center py-4 md:py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2"
      >
        <span className="text-base md:text-lg font-medium text-slate-900 pr-4">
          {faq.question}
        </span>
        <span className={`transform transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          <Icon name="chevronDown" className="w-5 h-5 text-slate-500" />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-4 md:pb-6' : 'max-h-0 opacity-0'}`}>
        <div className="px-2">
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            {faq.answer}
          </p>
          <span className="inline-block mt-3 text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            {faq.category}
          </span>
        </div>
      </div>
    </div>
  );
};

// Schedule Component (responsive table/cards)
const ScheduleDisplay = ({ schedule }) => {
  const [isTableView, setIsTableView] = useState(window.innerWidth >= 768);

  // Handle responsive view changes
  React.useEffect(() => {
    const handleResize = () => {
      setIsTableView(window.innerWidth >= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isTableView) {
    // Desktop Table View
    return (
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 font-semibold text-slate-900">Department</th>
              <th className="px-6 py-4 font-semibold text-slate-900">Morning (9AM - 1PM)</th>
              <th className="px-6 py-4 font-semibold text-slate-900">Evening (5PM - 9PM)</th>
              <th className="px-6 py-4 font-semibold text-slate-900">Doctors</th>
              <th className="px-6 py-4 font-semibold text-slate-900">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {schedule.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-bold text-slate-900">{item.department}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {item.morning.map((day, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {day}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {item.evening.map((day, idx) => (
                      <span key={idx} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                        {day}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    {item.doctors.map((doc, idx) => (
                      <span key={idx} className="text-sm text-slate-700">{doc}</span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${item.availability === 'High' ? 'bg-green-100 text-green-800' : item.availability === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    {item.availability}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Mobile Card View
  return (
    <div className="space-y-4">
      {schedule.map((item) => (
        <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h4 className="font-bold text-lg text-slate-900">{item.department}</h4>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.availability === 'High' ? 'bg-green-100 text-green-800' : item.availability === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
              {item.availability}
            </span>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-500 mb-2">Morning (9AM - 1PM)</p>
              <div className="flex flex-wrap gap-2">
                {item.morning.map((day, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {day}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-sm text-slate-500 mb-2">Evening (5PM - 9PM)</p>
              <div className="flex flex-wrap gap-2">
                {item.evening.map((day, idx) => (
                  <span key={idx} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                    {day}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-sm text-slate-500 mb-2">Doctors Available</p>
              <div className="flex flex-col gap-1">
                {item.doctors.map((doc, idx) => (
                  <span key={idx} className="text-slate-700">{doc}</span>
                ))}
              </div>
            </div>
          </div>
          
          {item.emergency && (
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-sm text-slate-600 flex items-center gap-2">
                <Icon name="phone" className="w-4 h-4 text-red-500" />
                Emergency coverage available
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// ==================== MAIN COMPONENT ====================

function Services() {
  const [expandedFaqs, setExpandedFaqs] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const toggleFaq = useCallback((id) => {
    setExpandedFaqs(prev => 
      prev.includes(id) ? prev.filter(faqId => faqId !== id) : [...prev, id]
    );
  }, []);

  const filteredServices = useMemo(() => {
    if (activeFilter === 'all') return PAGE_DATA.services;
    // Add filter logic based on category if needed
    return PAGE_DATA.services;
  }, [activeFilter]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* === HERO SECTION === */}
      <section className="bg-slate-900 text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
              {PAGE_DATA.hero.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {PAGE_DATA.hero.highlight}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8 leading-relaxed max-w-2xl">
              {PAGE_DATA.hero.description}
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {PAGE_DATA.hero.ctas.map(cta => (
                <button
                  key={cta.id}
                  className={`px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold transition-all flex items-center gap-2 ${cta.variant === 'primary' ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30' : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'}`}
                >
                  <Icon name={cta.icon} className="w-5 h-5" />
                  {cta.text}
                </button>
              ))}
            </div>
          </div>
          
          {/* STATS BAR */}
          <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-slate-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {PAGE_DATA.stats.map(stat => (
                <div key={stat.id} className="text-center">
                  <p className={`text-2xl sm:text-3xl md:text-4xl font-bold text-${stat.color}-400 mb-1`}>
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === SERVICES SECTION === */}
      <Section bg="white" padding="py-12 md:py-24">
        <SectionTitle 
          subtitle="Our Departments" 
          title="Centers of Excellence"
          description="Comprehensive medical services across all major specialties"
        />
        
        {/* Filter buttons for mobile */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center md:hidden">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
            All Services
          </button>
          <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
            Available Today
          </button>
          <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
            Specialized
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredServices.map(service => (
            <ServiceCard 
              key={service.id} 
              service={service}
              onClick={setSelectedService}
            />
          ))}
        </div>
      </Section>

      {/* === TECHNOLOGY SECTION === */}
      <Section bg="slate-50" padding="py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=400"
                className="rounded-2xl shadow-lg mt-8 w-full h-48 md:h-64 object-cover"
                alt="Robotic Surgery System"
                loading="lazy"
              />
              <img 
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=400"
                className="rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover"
                alt="Advanced Medical Imaging"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">
              Advanced Technology
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 mb-4 md:mb-6">
              {PAGE_DATA.technology.title}
            </h2>
            
            <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base">
              {PAGE_DATA.technology.description}
            </p>
            
            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {PAGE_DATA.technology.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-slate-700 font-medium text-sm md:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            
            <button className="text-blue-600 font-bold hover:text-blue-800 border-b-2 border-blue-600 pb-1 text-sm md:text-base">
              {PAGE_DATA.technology.cta} →
            </button>
          </div>
        </div>
      </Section>

      {/* === PRICING SECTION === */}
      <Section bg="white" padding="py-12 md:py-24">
        <SectionTitle 
          subtitle="Preventive Care" 
          title="Health Checkup Packages"
          description="Choose from our comprehensive health screening packages"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {PAGE_DATA.pricing.map(plan => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
        
        <div className="text-center mt-10 md:mt-16">
          <p className="text-slate-600 text-sm md:text-base">
            All packages include free physician consultation and digital report delivery.
            <br className="hidden md:block" />
            <span className="text-blue-600 font-semibold"> Corporate discounts available.</span>
          </p>
        </div>
      </Section>

      {/* === SCHEDULE SECTION === */}
      <Section bg="slate-50" padding="py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">
              OPD Schedule
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Doctor availability is subject to emergency calls. Real-time updates available.
            </p>
          </div>
          
          <ScheduleDisplay schedule={PAGE_DATA.schedule} />
          
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
            <p className="text-slate-800 text-sm md:text-base">
              For appointments call: 
              <span className="text-blue-600 font-bold ml-2">+1 (800) 123-4567</span>
              <span className="mx-2">•</span>
              Emergency: 
              <span className="text-red-600 font-bold ml-2">+1 (800) 911-4567</span>
            </p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors text-sm md:text-base">
              Book Online Now
            </button>
          </div>
        </div>
      </Section>

      {/* === FAQ SECTION === */}
      <Section bg="white" padding="py-12 md:py-24">
        <div className="max-w-3xl mx-auto">
          <SectionTitle 
            subtitle="Patient Information" 
            title="Frequently Asked Questions"
          />
          
          <div className="space-y-1">
            {PAGE_DATA.faqs.map(faq => (
              <FaqItem 
                key={faq.id}
                faq={faq}
                isOpen={expandedFaqs.includes(faq.id)}
                onToggle={toggleFaq}
              />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-slate-600 mb-4 text-sm md:text-base">
              Still have questions?
            </p>
            <button className="bg-slate-100 text-slate-800 hover:bg-slate-200 px-6 py-3 rounded-lg font-semibold transition-colors text-sm md:text-base">
              Contact Support Team
            </button>
          </div>
        </div>
      </Section>

      {/* === FINAL CTA === */}
      <Section bg="blue-600" padding="py-12 md:py-20" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            {PAGE_DATA.finalCta.title}
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-6 md:mb-8">
            {PAGE_DATA.finalCta.description}
          </p>
          <button className="bg-white text-blue-600 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold shadow-2xl hover:bg-slate-100 hover:scale-105 transition-transform text-sm md:text-base">
            {PAGE_DATA.finalCta.buttonText}
          </button>
          
          <p className="mt-8 text-blue-200 text-sm">
            Open 24/7 • No waiting for emergencies • Same-day appointments available
          </p>
        </div>
      </Section>

      {/* Mobile floating CTA */}
      <div className="fixed bottom-4 right-4 left-4 md:hidden z-50">
        <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-2xl shadow-blue-600/50 flex items-center justify-center gap-2">
          <Icon name="calendar" className="w-5 h-5" />
          Book Appointment Now
        </button>
      </div>
    </div>
  );
}

export default Services;