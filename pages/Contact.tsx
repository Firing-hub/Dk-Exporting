
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    commodity: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Request Received. Our Sales Division will contact you within 12 business hours to discuss your bulk requirements.');
  };

  return (
    <div className="bg-black pt-32 pb-24 selection:bg-gold selection:text-black">
      <div className="max-w-7xl mx-auto px-4 mb-24 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-gold font-black uppercase tracking-[0.6em] text-[10px] mb-6 block border-l-2 border-gold pl-4">
            Global Trade Inquiry
          </span>
          <h1 className="serif text-6xl md:text-8xl text-white mb-8">Initiate <span className="text-gold-gradient italic">Procurement.</span></h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-light">
            DK Exporting provides direct wholesale access to India's premier agricultural assets. Connect with our trade specialists for a comprehensive RFQ.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-12">
            <div className="bg-charcoal p-12 border border-white/5 space-y-12">
              <div>
                <h3 className="text-[10px] font-black text-gold mb-6 uppercase tracking-[0.5em]">Corporate HQ</h3>
                <address className="not-italic text-white font-light text-lg leading-relaxed">
                  DK Exporting Private Ltd.<br />
                  Strategic Trade Hub, Indore<br />
                  Madhya Pradesh, India
                </address>
              </div>
              
              <div>
                <h3 className="text-[10px] font-black text-gold mb-6 uppercase tracking-[0.5em]">Global Sales</h3>
                <ul className="space-y-6">
                  <li className="flex flex-col">
                    <span className="text-[10px] uppercase text-gray-600 tracking-widest mb-1">Electronic Mail</span>
                    <span className="text-white font-medium text-lg">trade@dkexporting.com</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-[10px] uppercase text-gray-600 tracking-widest mb-1">Logistics Hotline</span>
                    <span className="text-white font-medium text-lg">+91 (731) 400-XXXX</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t border-white/5">
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
                   Authorized personnel available 24/7 for trans-atlantic and trans-pacific trade monitoring.
                 </p>
              </div>
            </div>
            
            <div className="p-12 bg-gold/5 border border-gold/10">
              <h3 className="serif text-2xl text-white mb-4">Strategic Compliance</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                All inquiries are processed with absolute confidentiality. We provide full trade transparency for US-based importers.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8 bg-charcoal p-12 md:p-20 border border-white/5 relative">
            <div className="absolute top-0 left-0 w-2 h-20 bg-gold-gradient"></div>
            <h3 className="serif text-3xl text-white mb-12 italic">Formal <span className="text-gold">RFQ</span> Submission</h3>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-focus-within:text-gold transition-colors">Client Representative</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-colors text-white font-light rounded-none"
                  placeholder="Full Name"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-focus-within:text-gold transition-colors">Corporate Entity</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-colors text-white font-light rounded-none"
                  placeholder="e.g. Global Grains LLC"
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-focus-within:text-gold transition-colors">Business Intelligence (Email)</label>
                <input 
                  type="email" 
                  required 
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-colors text-white font-light rounded-none"
                  placeholder="procurement@entity.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-focus-within:text-gold transition-colors">Asset Selection</label>
                <select 
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-colors text-white font-light appearance-none rounded-none"
                  onChange={(e) => setFormData({...formData, commodity: e.target.value})}
                >
                  <option value="" className="bg-black">Select Commodity Portfolio</option>
                  <option value="Rice" className="bg-black">Premium Rice Varieties</option>
                  <option value="Onion" className="bg-black">Bulk Onion Stocks</option>
                  <option value="Wheat" className="bg-black">Industrial Grade Wheat</option>
                  <option value="Spices" className="bg-black">Pure Spice Extraction</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-focus-within:text-gold transition-colors">Logistical & Quality Requirements</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-colors text-white font-light resize-none rounded-none"
                  placeholder="Specify destination port, bulk volume (MT), and packaging specifications..."
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-10">
                <button type="submit" className="w-full bg-gold-gradient text-black py-6 font-black uppercase tracking-[0.4em] text-[10px] hover:scale-[1.02] transition-transform shadow-2xl rounded-none">
                  Submit Institutional Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
