
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LEADERSHIP } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-black pt-32 pb-24">
      {/* Intro Header */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-8">
            Our <span className="text-gold-gradient italic serif font-medium">Mandate.</span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
            DK Exporting was founded to bring institutional grade quality to the Indian agricultural export market. We believe transparency is the most critical asset in global trade.
          </p>
        </motion.div>
      </div>

      {/* Mandate Card Section - Apple Style */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="apple-card p-12 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[100px] -z-10"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-block px-4 py-1.5 rounded-none border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-widest">
                The Pillar of Integrity
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                A System Built on <br />Absolute Verification.
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                In an industry often lacking transparency, our sourcing mechanism uses data-driven traceability to ensure that the grade promised is exactly the grade delivered. We bridge the gap between Indian soil and global B2B standards.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="text-white font-bold mb-2">Verified Sourcing</h4>
                  <p className="text-sm text-gray-500 font-light">Every node is audited at the farm-gate level.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">SGS Validation</h4>
                  <p className="text-sm text-gray-500 font-light">Third-party chemical and physical analysis on every MT.</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="apple-card p-2 border-white/10 group-hover:border-gold/30 transition-all overflow-hidden rounded-none">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-1000"
                  alt="Integrity visual"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership - Structured Grid */}
      <section className="bg-black py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter">Strategic Council.</h2>
            <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">The architects behind our global compliance and supply chain systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERSHIP.map((leader, idx) => (
              <LeaderCard key={leader.name} leader={leader} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 text-center">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="apple-card p-12 text-left">
              <h3 className="text-xl font-bold text-white mb-4">Strategic Vision</h3>
              <p className="text-gray-500 font-light leading-relaxed">To redefine the standard of Indian exports by institutionalizing quality at the farm-gate level through absolute transparency.</p>
           </div>
           <div className="apple-card p-12 text-left">
              <h3 className="text-xl font-bold text-white mb-4">Global Values</h3>
              <p className="text-gray-500 font-light leading-relaxed">Uncompromising phytosanitary compliance, absolute financial transparency, and multi-generational B2B partnerships.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

const LeaderCard: React.FC<{ leader: any; delay: number }> = ({ leader, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="apple-card group relative flex flex-col overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 border-b border-white/5">
        <motion.img 
          src={leader.image} 
          alt={leader.name} 
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            filter: isHovered ? 'brightness(1.1)' : 'brightness(0.9)'
          }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="w-full h-full object-cover"
        />
        
        {/* Social Links Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center gap-6"
            >
              {leader.socials?.linkedin && (
                <motion.a 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  href={leader.socials.linkedin} 
                  className="w-12 h-12 rounded-none bg-white/10 border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </motion.a>
              )}
              {leader.socials?.email && (
                <motion.a 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  href={`mailto:${leader.socials.email}`} 
                  className="w-12 h-12 rounded-none bg-white/10 border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099l3.83-3.104 5.612 8.818h-18.893l5.627-8.813zm11.201 0.741l4.623-3.746v9.458l-4.623-5.712z"/></svg>
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-8 space-y-4 relative z-10 bg-[#161617] flex-grow flex flex-col">
        <div className="space-y-1">
          <span className="text-gold font-bold uppercase tracking-[0.2em] text-[10px]">
            {leader.role}
          </span>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {leader.name}
          </h3>
        </div>
        
        {/* Bio Expansion Logic */}
        <div className="relative overflow-hidden flex-grow">
          <motion.p 
            animate={{ 
              color: isHovered ? '#d1d5db' : '#6b7280',
              height: isHovered ? 'auto' : '80px'
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-sm leading-relaxed font-light overflow-hidden"
          >
            {leader.bio}
          </motion.p>
          
          {/* Gradient overlay for truncated text */}
          <motion.div 
            animate={{ opacity: isHovered ? 0 : 1 }}
            className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#161617] to-transparent pointer-events-none"
          />
        </div>

        {/* Action indicator for B2B trust */}
        <div className="pt-4 mt-auto">
          <motion.div 
            animate={{ x: isHovered ? 5 : 0, opacity: isHovered ? 1 : 0.5 }}
            className="flex items-center gap-2 text-gold text-[9px] font-black uppercase tracking-widest"
          >
            <span>Verified Principal</span>
            <div className="w-4 h-[1px] bg-gold"></div>
          </motion.div>
        </div>
      </div>

      {/* Subtle highlight bar at bottom */}
      <motion.div 
        animate={{ scaleX: isHovered ? 1 : 0 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-gradient origin-left"
      />
    </motion.div>
  );
};

export default About;
