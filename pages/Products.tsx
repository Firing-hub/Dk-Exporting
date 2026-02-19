
import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <div className="bg-black pt-32 pb-32 selection:bg-gold selection:text-black">
      <div className="max-w-7xl mx-auto px-4 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="text-gold font-black uppercase tracking-[0.6em] text-[10px] mb-6 block border-l-2 border-gold pl-4">
            Strategic Assets
          </span>
          <h1 className="serif text-6xl md:text-8xl text-white mb-8">The <span className="text-gold-gradient italic">Collection.</span></h1>
          <p className="text-xl text-gray-500 max-w-3xl leading-relaxed font-light">
            Each commodity in our portfolio is selected for its superior genetic profile and export-grade purity. We manage large-scale inventories with institutional precision.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-40">
          {PRODUCTS.map((product, index) => (
            <motion.div 
              key={product.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-square md:aspect-video overflow-hidden border border-white/10 shadow-[0_30px_60px_-12px_rgba(212,175,55,0.1)] rounded-none"
                >
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-all duration-1000 brightness-95 hover:brightness-110" />
                  <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-md text-gold border border-gold/20 px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] rounded-none">
                    {product.category}
                  </div>
                </motion.div>
              </div>
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-gold uppercase tracking-[0.5em]">Inventory Code: {product.id.toUpperCase()}</span>
                  <h2 className="serif text-4xl md:text-5xl text-white leading-tight">{product.name}</h2>
                </div>
                <p className="text-lg text-gray-400 leading-relaxed font-light italic">
                  "{product.description}"
                </p>
                <div className="space-y-4">
                   {['Global Phyto-Compliance', 'Sortex-A1 Purity Level', 'Custom Humidity Packaging'].map(feat => (
                     <div key={feat} className="flex items-center gap-4 group">
                       <div className="w-8 h-[1px] bg-gold group-hover:w-12 transition-all duration-500"></div>
                       <span className="text-xs font-black uppercase tracking-widest text-gray-300">{feat}</span>
                     </div>
                   ))}
                </div>
                <div className="pt-10">
                  <div className="shimmer-btn-wrapper cursor-pointer">
                    <span className="shimmer-btn-content text-white px-10 py-4 font-black uppercase tracking-[0.3em] text-[10px]">
                      Request Bulk Quote
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
