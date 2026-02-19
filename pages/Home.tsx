
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import createGlobe from 'cobe';
import { PRODUCTS } from '../constants.tsx';

const ShippingVessel: React.FC = () => {
  return (
    <motion.div
      initial={{ x: '-20%', opacity: 0 }}
      animate={{ 
        x: '120%', 
        opacity: [0, 0.15, 0.15, 0],
        y: [0, -5, 0, 5, 0] 
      }}
      transition={{ 
        x: { duration: 60, repeat: Infinity, ease: "linear" },
        opacity: { duration: 60, repeat: Infinity, times: [0, 0.1, 0.9, 1] },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }}
      className="absolute bottom-[15%] left-0 w-[300px] pointer-events-none z-10"
    >
      <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-gold/40">
        <path d="M10 25 L110 25 L105 35 L15 35 Z" strokeWidth="0.5" />
        <path d="M85 15 L95 15 L95 25 L85 25 Z" strokeWidth="0.5" />
        <rect x="25" y="18" width="12" height="7" strokeWidth="0.5" />
        <rect x="38" y="18" width="12" height="7" strokeWidth="0.5" />
        <rect x="51" y="18" width="12" height="7" strokeWidth="0.5" />
        <rect x="64" y="18" width="12" height="7" strokeWidth="0.5" />
        <rect x="28" y="12" width="10" height="6" strokeWidth="0.5" opacity="0.6" />
        <rect x="40" y="12" width="10" height="6" strokeWidth="0.5" opacity="0.6" />
        <line x1="90" y1="15" x2="90" y2="10" strokeWidth="0.5" />
        <line x1="88" y1="12" x2="92" y2="12" strokeWidth="0.5" />
        <motion.path 
          d="M0 35 L10 35" 
          strokeDasharray="2 4" 
          strokeWidth="0.5" 
          opacity="0.3"
        />
      </svg>
    </motion.div>
  );
};

const Globe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 1.25;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 1.25,
      theta: 0.35,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0.83, 0.68, 0.21],
      glowColor: [0.15, 0.15, 0.15],
      markers: [
        { location: [22.7196, 75.8577], size: 0.12 },
        { location: [28.6139, 77.2090], size: 0.04 },
        { location: [19.0760, 72.8777], size: 0.04 },
        { location: [13.0827, 80.2707], size: 0.04 },
        { location: [20.0113, 73.7902], size: 0.04 },
        { location: [40.7128, -74.0060], size: 0.05 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [25.2048, 55.2708], size: 0.05 },
        { location: [1.3521, 103.8198], size: 0.05 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.002;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="globe-container">
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
      />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black pointer-events-none opacity-40"></div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-black">
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Cinematic Ship Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=2000" 
            alt="Cargo Ship background"
            className="w-full h-full object-cover opacity-20 grayscale brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/40"></div>
        </div>

        <ShippingVessel />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gold"></span>
              <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">Indore HQ • Global Reach</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-8 leading-[1.05]">
              Agricultural Assets. <br />
              <span className="text-gold-gradient italic serif font-medium">Redefined.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-xl mb-12 leading-relaxed">
              Based in the strategic heart of India, DK Exporting bridges domestic heritage with global B2B standards through absolute integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <Link to="/contact" className="shimmer-btn-wrapper">
                <span className="shimmer-btn-content text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] w-full sm:w-auto text-center">
                  Request a Master Quote
                </span>
              </Link>
              <Link to="/products" className="text-white hover:text-gold flex items-center gap-2 font-medium group transition-all text-sm uppercase tracking-widest">
                Explore the Portfolio
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="absolute -z-10 w-[500px] h-[500px] bg-gold opacity-[0.05] blur-[120px] rounded-full"></div>
            <Globe />
            <div className="absolute top-[45%] left-[55%] pointer-events-none">
              <div className="flex flex-col items-start bg-black/40 backdrop-blur-sm border-l border-gold pl-2 py-1">
                <span className="text-[9px] text-gold font-black uppercase tracking-widest">Indore HQ</span>
                <span className="text-[7px] text-gray-400 font-light uppercase tracking-widest">Strategic Logistics Hub</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none -z-10">
           <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full"></div>
           <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-gold rounded-full animate-pulse"></div>
           <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-white rounded-full"></div>
        </div>
      </section>

      <section className="py-32 bg-[#161617]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Built on Integrity.</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Operating from Indore, the commercial capital of Madhya Pradesh, we provide absolute transparency at every node.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Global Compliance', desc: 'Every shipment meets US FDA, EU Phytosanitary, and SGS standards before it leaves Indian soil.', icon: '🛡️' },
              { title: 'Direct Sourcing', desc: 'Removing middle-men to ensure farmers get fair value and you get verified origins.', icon: '🚜' },
              { title: 'Logistical Precision', desc: 'Integrated tracking and climate-controlled transit preservation for bulk assets.', icon: '🚢' }
            ].map((pillar, idx) => (
              <motion.div 
                key={pillar.title}
                whileHover={{ y: -5 }}
                className="apple-card p-10 flex flex-col items-center text-center rounded-none"
              >
                <div className="text-4xl mb-8">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Prime Inventory.</h2>
              <p className="text-gray-500 mt-4 text-lg">Strategically managed bulk commodities from Central India.</p>
            </div>
            <Link to="/products" className="text-gold font-bold hover:underline">View Full Portfolio</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTS.slice(0, 4).map((p) => (
              <motion.div 
                key={p.id} 
                whileHover={{ scale: 1.02 }}
                className="apple-card overflow-hidden h-[400px] relative group rounded-none"
              >
                <img 
                  src={p.image} 
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-700" 
                  alt={p.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                   <p className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-2">{p.category}</p>
                   <h4 className="text-xl font-bold tracking-tight text-white">{p.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 relative overflow-hidden bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold opacity-[0.02] blur-[150px] rounded-full -z-0"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-16">Ready to partner?</h2>
          <Link to="/contact" className="shimmer-btn-wrapper">
            <span className="shimmer-btn-content text-white px-16 py-6 text-sm font-black uppercase tracking-[0.4em]">
              Open Trade Inquiry
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
