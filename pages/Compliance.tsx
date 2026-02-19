
import React from 'react';
import { motion } from 'framer-motion';

const Compliance: React.FC = () => {
  const certifications = [
    {
      name: "APEDA",
      fullName: "Agricultural & Processed Food Products Export Development Authority",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/29/APEDA_Logo.png",
      description: "Mandatory certification for agricultural exports from India, ensuring adherence to global hygiene and quality standards."
    },
    {
      name: "FSSAI",
      fullName: "Food Safety and Standards Authority of India",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/FSSAI_logo.svg/1200px-FSSAI_logo.svg.png",
      description: "Highest level of food safety licensure in India, covering our entire processing and storage infrastructure."
    },
    {
      name: "FIEO",
      fullName: "Federation of Indian Export Organisations",
      logo: "https://www.fieo.org/images/logo.png",
      description: "Apex body of the export promotion councils in India, facilitating global trade intelligence and ethical practices."
    }
  ];

  return (
    <div className="bg-black pt-32 pb-24 selection:bg-gold selection:text-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl text-left"
        >
          <span className="text-gold font-black uppercase tracking-[0.6em] text-[10px] mb-6 block border-l-2 border-gold pl-4">
            Quality Assurance Ecosystem
          </span>
          <h1 className="serif text-6xl md:text-8xl text-white mt-4 mb-10 leading-tight">
            Certified <span className="text-gold-gradient italic">Excellence.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-light">
            DK Exporting operates under rigorous international benchmarks. Our compliance framework is designed to satisfy the most stringent requirements of US and European customs.
          </p>
        </motion.div>
      </div>

      {/* Primary Certifications Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {certifications.map((cert, idx) => (
            <motion.div 
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-black p-12 group hover:bg-charcoal transition-colors duration-500"
            >
              <div className="h-24 flex items-center mb-10 overflow-hidden">
                <img 
                  src={cert.logo} 
                  alt={cert.name} 
                  className="max-h-full max-w-full object-contain transition-all duration-700"
                />
              </div>
              <h3 className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4">
                {cert.name} Registered
              </h3>
              <h4 className="serif text-xl text-white mb-6 leading-tight">
                {cert.fullName}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SGS Featured Section */}
      <section className="bg-charcoal py-40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <span className="text-gold font-black uppercase tracking-[0.6em] text-[10px] mb-6 block">
              Third-Party Validation
            </span>
            <h2 className="serif text-5xl text-white mb-8">SGS Quality <br /><span className="text-gold-gradient italic">Endorsement.</span></h2>
            <p className="text-gray-400 font-light leading-relaxed text-lg mb-10">
              For every bulk shipment, we offer the industry's gold standard in verification. Our partnership with SGS ensures that every metric ton leaving our facility matches the precise chemical and physical profile required by the importer.
            </p>
            <div className="space-y-6">
              {[
                "Physical & Chemical Inspection",
                "Phytosanitary Certification Support",
                "Traceability & Identity Preservation",
                "Pre-shipment Weight Verification"
              ].map(item => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-none bg-gold shadow-[0_0_10px_#d4af37]"></div>
                  <span className="text-[10px] uppercase tracking-widest text-white font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative p-12 bg-black border border-white/10 overflow-hidden group rounded-none"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-gradient opacity-10 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
              
              <div className="relative z-10 flex flex-col md:row gap-12 items-center">
                <div className="w-48 flex-shrink-0">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/SGS_Logo.svg/2560px-SGS_Logo.svg.png" 
                    alt="SGS Logo" 
                    className="w-full object-contain brightness-125" 
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="serif text-2xl text-white mb-4">Master Compliance Certificate</h4>
                  <p className="text-gray-500 text-sm font-light mb-6">
                    Available upon request for bulk importers: Our detailed facility inspection report and current batch analysis documentation verified by SGS global laboratories.
                  </p>
                  <button className="bg-white/5 border border-white/10 text-gold px-8 py-4 text-[9px] font-black uppercase tracking-[0.3em] hover:bg-gold hover:text-black transition-all rounded-none">
                    Verify SGS Status
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USA FDA Readiness */}
      <section className="py-40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-gold font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">
            US Market Strategy
          </span>
          <h2 className="serif text-4xl md:text-6xl text-white mb-10">
            FSMA & FDA <span className="text-gold-gradient italic">Compliance Ready.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
            We provide full transparency for US-based FSVP (Foreign Supplier Verification Programs) importers. Our documentation vault includes Hazard Analysis, Risk-Based Preventive Controls, and 24/7 traceability data.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white/5 border border-white/5 rounded-none">
               <span className="block text-white font-bold text-xs mb-1">CBP Ready</span>
               <span className="text-[9px] text-gray-500 uppercase tracking-widest">Customs Protocol</span>
            </div>
            <div className="p-6 bg-white/5 border border-white/5 rounded-none">
               <span className="block text-white font-bold text-xs mb-1">ISO 22000</span>
               <span className="text-[9px] text-gray-500 uppercase tracking-widest">Food Safety Mgmt</span>
            </div>
            <div className="p-6 bg-white/5 border border-white/5 rounded-none">
               <span className="block text-white font-bold text-xs mb-1">USDA Support</span>
               <span className="text-[9px] text-gray-500 uppercase tracking-widest">Grading Standards</span>
            </div>
            <div className="p-6 bg-white/5 border border-white/5 rounded-none">
               <span className="block text-white font-bold text-xs mb-1">HACCP</span>
               <span className="text-[9px] text-gray-500 uppercase tracking-widest">Hazard Control</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-gold-gradient p-[1px]">
          <div className="bg-black py-20 px-4 text-center">
            <h3 className="serif text-3xl text-white mb-8 italic">Review our detailed compliance documentation.</h3>
            <button className="bg-gold-gradient text-black px-12 py-5 font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl hover:scale-105 transition-transform rounded-none">
              Request Compliance Vault Access
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
