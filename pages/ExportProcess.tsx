
import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS } from '../constants';

const ExportProcess: React.FC = () => {
  return (
    <div className="bg-black pt-32 pb-24 selection:bg-gold selection:text-black">
      <div className="max-w-7xl mx-auto px-4 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <span className="text-gold font-black uppercase tracking-[0.6em] text-[10px] mb-6 block border-l-2 border-gold pl-4">
            Supply Chain Logic
          </span>
          <h1 className="serif text-6xl md:text-8xl text-white mt-4 mb-10 leading-tight">
            The Export <span className="text-gold-gradient italic">Mechanism.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl leading-relaxed font-light">
            From farm-gate to global destination, we maintain a closed-loop supply chain that guarantees integrity, freshness, and regulatory adherence.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 relative mb-40">
          {/* Connector Line (visible on desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10"></div>
          
          {PROCESS.map((step, index) => (
            <motion.div 
              key={step.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-charcoal p-12 border border-white/5 relative group hover:border-gold/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-8">
                <span className="text-gold/10 text-6xl font-black group-hover:text-gold/20 transition-colors">0{index + 1}</span>
              </div>
              <div className="w-16 h-16 bg-black text-gold border border-gold/20 flex items-center justify-center text-3xl mb-10 shadow-2xl group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mt-1 uppercase tracking-[0.2em]">{step.title}</h3>
              </div>
              <p className="text-gray-500 leading-relaxed font-light text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-charcoal border border-white/5 p-12 lg:p-24 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-gold font-black uppercase tracking-[0.6em] text-[10px] mb-6 block">
                Administrative Mastery
              </span>
              <h2 className="serif text-4xl mb-8 italic">Global Documentation <span className="text-gold">Standards.</span></h2>
              <p className="text-gray-400 mb-10 font-light text-lg">
                Our specialized logistics council manages the multi-layered complexities of international trade compliance to ensure zero-friction clearance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-light">
                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                  <span className="uppercase tracking-widest text-[10px]">Certificate of Origin</span>
                </div>
                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                  <span className="uppercase tracking-widest text-[10px]">Bill of Lading (FCL/LCL)</span>
                </div>
                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                  <span className="uppercase tracking-widest text-[10px]">Phyto-Sanitary Certification</span>
                </div>
                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                  <span className="uppercase tracking-widest text-[10px]">SGS/Quality Verification</span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 border border-gold/10 group-hover:rotate-1 transition-transform"></div>
              <img 
                src="https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&q=80&w=800" 
                className="w-full grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000" 
                alt="Logistics Documentation" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportProcess;
