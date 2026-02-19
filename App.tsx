
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Products from './pages/Products.tsx';
import ExportProcess from './pages/ExportProcess.tsx';
import Compliance from './pages/Compliance.tsx';
import Contact from './pages/Contact.tsx';
import Careers from './pages/Careers.tsx';
import News from './pages/News.tsx';
import Chatbot from './Chatbot.tsx';

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Portfolio' },
  { path: '/process', label: 'Mechanism' },
  { path: '/compliance', label: 'Standards' },
  { path: '/about', label: 'Integrity' },
  { path: '/news', label: 'News' },
  { path: '/careers', label: 'Careers' }
];

const QUICK_LINKS = [
  { path: '/about', label: 'Integrity', icon: '⚖️' },
  { path: '/products', label: 'Asset Portfolio', icon: '📦' },
  { path: '/news', label: 'Trade Intelligence', icon: '📰' },
  { path: '/careers', label: 'Join Hierarchy', icon: '🤝' },
  { path: '/compliance', label: 'Compliance Vault', icon: '🛡️' }
];

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const isActive = (path: string) => pathname === path;

  // Close menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsShortcutsOpen(false);
  }, [pathname]);

  // Prevent scroll when menus are open
  useEffect(() => {
    if (isMenuOpen || isShortcutsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, isShortcutsOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/70 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-2 md:px-6">
          <div className="flex justify-between h-20 items-center">
            
            {/* Left Controls (Mobile Only) */}
            <div className="md:hidden flex items-center gap-1">
              {/* Quick Access Shortcut Button - Far left */}
              <button
                onClick={() => {
                  setIsShortcutsOpen(!isShortcutsOpen);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center gap-1.5 px-2 py-1.5 border transition-all ${
                  isShortcutsOpen ? 'bg-gold border-gold text-black' : 'bg-white/5 border-white/10 text-gold'
                }`}
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/>
                </svg>
                <span className="text-[7px] font-black uppercase tracking-widest">More</span>
              </button>

              {/* Global Menu Toggle */}
              <button 
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setIsShortcutsOpen(false);
                }}
                className="text-white p-1.5 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <div className="w-5 h-3.5 relative flex flex-col justify-between overflow-hidden">
                  <motion.span 
                    animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    className="w-full h-[1px] bg-gold block origin-left transition-all"
                  />
                  <motion.span 
                    animate={isMenuOpen ? { x: 50, opacity: 0 } : { x: 0, opacity: 1 }}
                    className="w-full h-[1px] bg-gold block transition-all"
                  />
                  <motion.span 
                    animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    className="w-full h-[1px] bg-gold block origin-left transition-all"
                  />
                </div>
              </button>
            </div>

            {/* Logo - Full Name Visible on Mobile */}
            <div className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <Link to="/" className="flex items-center gap-1.5 group">
                <span className="text-xl md:text-2xl font-extrabold text-gold-gradient tracking-tighter">DK</span>
                <span className="text-[8px] md:text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.3em] border-l border-white/20 pl-1.5">Exporting</span>
              </Link>
            </div>
            
            {/* Desktop Navigation - Optimized for 7 links */}
            <div className="hidden lg:flex space-x-0.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-3 xl:px-4 py-2 group flex items-center justify-center"
                >
                  <span className={`text-[10px] xl:text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                    isActive(link.path) ? 'text-white' : 'text-gray-500 group-hover:text-gray-200'
                  }`}>
                    {link.label}
                  </span>
                  {isActive(link.path) && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[1px] bg-gold"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center">
              <Link to="/contact" className="shimmer-btn-wrapper">
                <span className="shimmer-btn-content text-white px-2.5 md:px-5 py-2 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-center">
                  <span className="hidden xs:inline">Inquiry</span>
                  <span className="xs:hidden">RFQ</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Shortcuts Overlay */}
      <AnimatePresence>
        {isShortcutsOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl pt-32 pb-12 px-8 flex flex-col md:hidden"
          >
            <div className="mb-12">
               <span className="text-gold font-black uppercase tracking-[0.5em] text-[10px] block mb-4 border-l border-gold pl-3">More Options</span>
               <h3 className="text-3xl font-bold text-white tracking-tighter">Core Assets.</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {QUICK_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    className="flex items-center justify-between p-6 bg-white/5 border border-white/10 hover:border-gold/50 transition-all group"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-2xl">{link.icon}</span>
                      <span className="text-xl font-medium text-white group-hover:text-gold transition-colors">{link.label}</span>
                    </div>
                    <span className="text-gold opacity-30 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-black pt-32 pb-12 px-8 flex flex-col md:hidden"
          >
            <div className="space-y-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    to={link.path}
                    className={`text-3xl font-bold tracking-tighter block ${
                      isActive(link.path) ? 'text-gold-gradient' : 'text-white'
                    }`}
                  >
                    {link.label}
                    {isActive(link.path) && <span className="text-gold ml-2">.</span>}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto space-y-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-6 border-t border-white/10"
              >
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-4">Trade Desk</p>
                <p className="text-xl text-white font-light">dkexporting@gmail.com</p>
              </motion.div>
              
              <Link to="/contact" className="shimmer-btn-wrapper w-full">
                <span className="shimmer-btn-content text-white py-5 text-center text-[10px] font-black uppercase tracking-[0.4em]">
                  Request Quotation
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
            {NAV_LINKS.slice(1).map(link => (
              <li key={link.path}><Link to={link.path} className="text-gray-500 hover:text-white transition-colors text-xs font-light">{link.label}</Link></li>
            ))}
            <li><Link to="/compliance" className="text-gray-500 hover:text-white transition-colors text-xs font-light">Compliance Vault</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold text-white mb-6 uppercase tracking-widest">Global Relations</h4>
          <address className="not-italic text-xs text-gray-500 space-y-3 font-light">
            <p>12, Road Bilawali, Ganesh Nagar,<br />Near Khandwa Naka, Indore,<br />Madhya Pradesh, India - 452001</p>
            <p className="text-white hover:text-gold transition-colors cursor-pointer">dkexporting@gmail.com</p>
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

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-gold selection:text-black overflow-x-hidden">
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
              <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
              <Route path="/news" element={<PageWrapper><News /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
