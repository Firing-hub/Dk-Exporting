
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JOB_OPENINGS } from '../constants';

const Careers: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate institutional verification and review
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2500);
  };

  return (
    <div className="bg-black pt-32 pb-24 selection:bg-gold selection:text-black min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32 flex flex-col md:flex-row justify-between items-end gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span 
            className="text-gold font-black uppercase tracking-[0.6em] text-[10px] mb-6 block border-l-2 border-gold pl-4 cursor-pointer"
            onDoubleClick={() => setIsAdminMode(!isAdminMode)}
            title="Double-click for Administrative Access"
          >
            Human Capital {isAdminMode && "— Administrative Mode"}
          </span>
          <h1 className="serif text-6xl md:text-8xl text-white mt-4 mb-10 leading-tight">
            Join the <span className="text-gold-gradient italic">Mechanism.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-light">
            We are looking for strategic thinkers and operational masters to scale India's premier agricultural export platform.
          </p>
        </motion.div>

        {isAdminMode && (
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setShowForm(true)}
            className="shimmer-btn-wrapper"
          >
            <span className="shimmer-btn-content text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em]">
              Post Job Mandate
            </span>
          </motion.button>
        )}
      </div>

      {/* Submission Protocol Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-charcoal border border-white/10 w-full max-w-2xl p-10 md:p-16 relative overflow-hidden"
            >
              <button 
                onClick={() => {setShowForm(false); setSubmitted(false);}}
                className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {!submitted ? (
                <>
                  <div className="mb-10">
                    <span className="text-gold font-black uppercase tracking-[0.4em] text-[9px] mb-2 block">HR Protocol</span>
                    <h2 className="serif text-3xl text-white">Administrative Mandate.</h2>
                    <p className="text-gray-500 text-sm mt-4 font-light">
                      Mandates enter a budgetary and operational review sequence before becoming publicly visible on the DK board.
                    </p>
                  </div>

                  <form onSubmit={handleJobSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Mandate Title</label>
                        <input required type="text" className="w-full bg-black border border-white/5 px-4 py-3 text-xs text-white focus:border-gold outline-none" placeholder="e.g. Senior Trade Analyst" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Node Location</label>
                        <input required type="text" className="w-full bg-black border border-white/5 px-4 py-3 text-xs text-white focus:border-gold outline-none" placeholder="Indore / Remote / Global" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Contract Type</label>
                        <select className="w-full bg-black border border-white/5 px-4 py-3 text-xs text-white focus:border-gold outline-none appearance-none">
                          <option>Institutional Full-Time</option>
                          <option>Contract Consultancy</option>
                          <option>Regional Representation</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Budget Code</label>
                        <input required type="text" className="w-full bg-black border border-white/5 px-4 py-3 text-xs text-white focus:border-gold outline-none" placeholder="DK-HR-XXXX" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Mandate Description</label>
                      <textarea required rows={4} className="w-full bg-black border border-white/5 p-4 text-xs text-white focus:border-gold outline-none resize-none" placeholder="Detail the strategic requirements..."></textarea>
                    </div>
                    <div className="flex items-center gap-4 pt-4">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`flex-grow bg-gold-gradient text-black font-black uppercase tracking-[0.3em] text-[10px] py-5 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                      >
                        {isSubmitting ? 'Verifying Mandate...' : 'Finalize for Review'}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-20 text-center">
                  <div className="w-20 h-20 border border-gold rounded-full flex items-center justify-center mx-auto mb-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-gold text-4xl"
                    >
                      ✓
                    </motion.div>
                  </div>
                  <h3 className="serif text-4xl text-white mb-6">Mandate Logged.</h3>
                  <p className="text-gray-500 font-light max-w-sm mx-auto mb-12">
                    The job opening has been submitted to the Executive Council. Status updates will be visible in the administrative console within 24 hours.
                  </p>
                  <button 
                    onClick={() => {setShowForm(false); setSubmitted(false);}}
                    className="text-gold font-black uppercase tracking-widest text-[10px] border-b border-gold pb-1"
                  >
                    Return to Board
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Culture Section */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Extreme Ownership', desc: 'Every member is a principal in their domain. We value results over activity.' },
            { title: 'Global Standards', desc: 'Operating from Indore with the precision expected in New York or London.' },
            { title: 'Radical Integrity', desc: 'Transparency is our competitive advantage. We seek people who uphold it.' }
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="apple-card p-10 border border-white/5"
            >
              <h3 className="text-white font-bold text-xl mb-4 tracking-tight">{v.title}</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Mandates */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="mb-16">
          <h2 className="serif text-4xl text-white">Open Mandates.</h2>
          <p className="text-gray-500 mt-2">Current strategic vacancies within our global nodes.</p>
        </div>

        {JOB_OPENINGS.length > 0 ? (
          <div className="space-y-4">
            {JOB_OPENINGS.map((job, idx) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="apple-card group p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:border-gold/30 transition-all cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-gold text-[10px] font-black uppercase tracking-widest">{job.type}</span>
                    <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                    <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{job.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors">{job.title}</h3>
                  <p className="text-gray-400 font-light text-sm max-w-xl">{job.description}</p>
                </div>
                <div className="shimmer-btn-wrapper w-full md:w-auto">
                  <span className="shimmer-btn-content text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-center">
                    Apply for Role
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border border-white/5 bg-charcoal/30 py-32 text-center"
          >
            <div className="inline-block mb-8 p-4 border border-gold/20 rounded-full">
              <svg className="w-8 h-8 text-gold opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="serif text-3xl text-white italic mb-4">Mandate Standby.</h2>
            <p className="text-gray-500 font-light max-w-sm mx-auto text-sm leading-relaxed mb-10">
              All strategic nodes are currently occupied. The Human Capital board is awaiting the next cycle of global expansion.
            </p>
            {!isAdminMode && (
              <button 
                onClick={() => setIsAdminMode(true)}
                className="text-gold font-black uppercase tracking-[0.4em] text-[10px] hover:text-white transition-colors"
              >
                Access Executive Portal →
              </button>
            )}
          </motion.div>
        )}
      </section>

      {/* General Inquiry */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-charcoal p-12 md:p-24 text-center border border-white/5">
          <h3 className="serif text-3xl text-white italic mb-6">Don't see a fit?</h3>
          <p className="text-gray-500 max-w-xl mx-auto font-light mb-10">
            If you possess exceptional skills in commodity trading, data science, or international law, send your credentials to our talent council.
          </p>
          <a href="mailto:hr@dkexporting.com" className="text-gold font-bold uppercase tracking-widest text-sm hover:underline">
            hr@dkexporting.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;
