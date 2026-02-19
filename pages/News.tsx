
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NEWS_ITEMS } from '../constants';

const News: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleArticleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate high-level review verification process
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2500);
  };

  return (
    <div className="bg-black pt-32 pb-24 selection:bg-gold selection:text-black min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col md:flex-row justify-between items-end gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-gold font-black uppercase tracking-[0.6em] text-[10px] mb-6 block border-l-2 border-gold pl-4">
            Intelligence Bureau
          </span>
          <h1 className="serif text-6xl md:text-8xl text-white mt-4 mb-6 leading-tight">
            Trade <span className="text-gold-gradient italic">Intelligence.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-light">
            Real-time market updates, regulatory shifts, and institutional milestones from the heart of the export sector.
          </p>
        </motion.div>

        <motion.button 
          onClick={() => setShowForm(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="shimmer-btn-wrapper"
        >
          <span className="shimmer-btn-content text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em]">
            Submit Perspective
          </span>
        </motion.button>
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
                    <span className="text-gold font-black uppercase tracking-[0.4em] text-[9px] mb-2 block">Editorial Protocol</span>
                    <h2 className="serif text-3xl text-white">Institutional Contribution.</h2>
                    <p className="text-gray-500 text-sm mt-4 font-light">
                      Submissions enter a 48-hour rigorous review phase by our trade analysts before global publication.
                    </p>
                  </div>

                  <form onSubmit={handleArticleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Article Title</label>
                        <input required type="text" className="w-full bg-black border border-white/5 px-4 py-3 text-xs text-white focus:border-gold outline-none" placeholder="Market Analysis: Q4 Grains..." />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Trade Category</label>
                        <select className="w-full bg-black border border-white/5 px-4 py-3 text-xs text-white focus:border-gold outline-none appearance-none">
                          <option>Market Intelligence</option>
                          <option>Logistics Strategy</option>
                          <option>Policy Review</option>
                          <option>Agri-Tech</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Strategic Abstract</label>
                      <textarea required rows={4} className="w-full bg-black border border-white/5 p-4 text-xs text-white focus:border-gold outline-none resize-none" placeholder="Describe the core trade intelligence..."></textarea>
                    </div>
                    <div className="flex items-center gap-4 pt-4">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`flex-grow bg-gold-gradient text-black font-black uppercase tracking-[0.3em] text-[10px] py-5 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                      >
                        {isSubmitting ? 'Enciphering Intel...' : 'Submit for Peer Review'}
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
                  <h3 className="serif text-4xl text-white mb-6">Review Initiated.</h3>
                  <p className="text-gray-500 font-light max-w-sm mx-auto mb-12">
                    Your contribution has been logged into the DK Intelligence Vault. Our editorial council will contact you within two trading cycles.
                  </p>
                  <button 
                    onClick={() => {setShowForm(false); setSubmitted(false);}}
                    className="text-gold font-black uppercase tracking-widest text-[10px] border-b border-gold pb-1"
                  >
                    Return to Bureau
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* News Grid / Empty State */}
      <section className="max-w-7xl mx-auto px-6">
        {NEWS_ITEMS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {NEWS_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-8 md:p-12 group hover:bg-charcoal transition-all duration-500 flex flex-col"
              >
                <div className="aspect-video overflow-hidden mb-8 relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 px-4 py-1.5 border border-white/10">
                    <span className="text-gold text-[8px] font-black uppercase tracking-widest">{item.category}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{item.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight leading-tight group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed mb-8">
                    {item.summary}
                  </p>
                </div>
                <button className="text-[10px] font-black uppercase tracking-[0.3em] text-white flex items-center gap-4 group/btn hover:text-gold transition-colors">
                  Read Full Report
                  <span className="w-8 h-[1px] bg-gold group-hover/btn:w-12 transition-all"></span>
                </button>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h2 className="serif text-3xl text-white italic mb-4">Bureau Standby.</h2>
            <p className="text-gray-500 font-light max-w-sm mx-auto text-sm leading-relaxed mb-10">
              The Trade Intelligence database is currently undergoing a scheduled purge. Awaiting the next cycle of global market analytics.
            </p>
            <button 
              onClick={() => setShowForm(true)}
              className="text-gold font-black uppercase tracking-[0.4em] text-[10px] hover:text-white transition-colors"
            >
              Be the first to contribute →
            </button>
          </motion.div>
        )}
      </section>

      {/* Contribution Initiative Card */}
      <section className="max-w-7xl mx-auto px-6 mt-20 mb-20">
        <div className="bg-charcoal border border-white/5 p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 group hover:border-gold/20 transition-all">
          <div className="max-w-2xl">
            <span className="text-gold font-black uppercase tracking-[0.4em] text-[9px] mb-4 block">Contributor Program</span>
            <h2 className="serif text-3xl text-white italic">Do you hold unique market perspectives?</h2>
            <p className="text-gray-500 mt-4 font-light text-sm">
              We invite global trade analysts, agronomists, and logistics architects to publish their findings on our platform. All published articles are archived in the DK Global Trade Library.
            </p>
          </div>
          <button 
            onClick={() => setShowForm(true)}
            className="text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-4 group/btn"
          >
            Submit for Review
            <span className="w-10 h-[1px] bg-gold group-hover/btn:w-16 transition-all"></span>
          </button>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="max-w-7xl mx-auto px-6 mt-40 pb-20">
        <div className="apple-card p-12 md:p-24 bg-charcoal text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-[0.03] blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
          <h2 className="serif text-4xl text-white italic mb-6">Stay ahead of the market.</h2>
          <p className="text-gray-500 max-w-lg mx-auto font-light mb-12">
            Receive bi-weekly trade reports and supply chain analytics directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Trade Email Address" 
              className="flex-grow bg-black border border-white/10 px-6 py-4 text-xs font-light text-white focus:border-gold outline-none transition-all"
            />
            <button className="bg-gold-gradient text-black px-8 py-4 font-black uppercase tracking-widest text-[10px]">
              Subscribe
            </button>
          </div>
          <p className="text-[9px] text-gray-700 uppercase tracking-widest mt-8 font-bold">
            Data security verified by DK Infrastructure Protocols.
          </p>
        </div>
      </section>
    </div>
  );
};

export default News;
