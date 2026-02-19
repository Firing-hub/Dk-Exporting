
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ExportProcess from './pages/ExportProcess';
import Compliance from './pages/Compliance';
import Contact from './pages/Contact';
import Chatbot from './Chatbot';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/70 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-extrabold text-gold-gradient tracking-tighter">DK</span>
              <span className="text-xs font-medium text-gray-400 uppercase tracking-[0.3em] border-l border-white/20 pl-2">Exporting</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-1">
            {[
              { path: '/', label: 'Home' },
              { path: '/products', label: 'Portfolio' },
              { path: '/process', label: 'Mechanism' },
              { path: '/compliance', label: 'Standards' },
              { path: '/about', label: 'Integrity' }
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-5 py-2 group flex items-center justify-center"
              >
                <span className={`text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                  isActive(link.path) ? 'text-white' : 'text-gray-500 group-hover:text-gray-200'
                }`}>
                  {link.label}
                </span>
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-5 right-5 h-[1px] bg-gold"
                  />
                )}
              </Link>
            ))}
          </div>

          <div>
            <Link to="/contact" className="shimmer-btn-wrapper">
              <span className="shimmer-btn-content text-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest">
                Bulk Inquiry
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-[#161617] text-white pt-24 pb-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-6 flex items-baseline gap-2">
             <span className="text-3xl font-black text-gold-gradient tracking-tighter">DK</span>
             <span className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">Exporting</span>
          </div>
          <p className="text-gray-500 max-w-sm text-sm font-light leading-relaxed">
            The global standard for Indian agricultural exports. Built on integrity, precision, and a commitment to global food security.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold text-white mb-6 uppercase tracking-widest">Platform</h4>
          <ul className="space-y-3">
            <li><Link to="/products" className="text-gray-500 hover:text-white transition-colors text-xs font-light">Asset Portfolio</Link></li>
            <li><Link to="/process" className="text-gray-500 hover:text-white transition-colors text-xs font-light">The Mechanism</Link></li>
            <li><Link to="/compliance" className="text-gray-500 hover:text-white transition-colors text-xs font-light">Compliance Vault</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold text-white mb-6 uppercase tracking-widest">Global Relations</h4>
          <address className="not-italic text-xs text-gray-500 space-y-3 font-light">
            <p>Strategic Trade Hub, Indore<br />Madhya Pradesh, India</p>
            <p className="text-white hover:text-gold transition-colors cursor-pointer">trade@dkexporting.com</p>
          </address>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6">
        <p className="text-[10px] text-gray-600 uppercase tracking-widest">© 2024 DK Exporting Group. All Trade Standards Reserved.</p>
        <div className="flex gap-8">
          <span className="text-[10px] text-gray-600 uppercase tracking-widest hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="text-[10px] text-gray-600 uppercase tracking-widest hover:text-white cursor-pointer transition-colors">Compliance Terms</span>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => (
  <Router>
    <div className="min-h-screen flex flex-col selection:bg-gold selection:text-black">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
            <Route path="/process" element={<PageWrapper><ExportProcess /></PageWrapper>} />
            <Route path="/compliance" element={<PageWrapper><Compliance /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <Chatbot />
    </div>
  </Router>
);

export default App;
