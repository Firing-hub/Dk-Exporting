
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
    { role: 'ai', content: 'Welcome to the DK Exporting Trade Desk. How may I assist you with your international procurement or compliance inquiries today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are the DK Exporting Virtual Trade Assistant. Your goal is to provide expert, institutional-grade information on Indian agricultural exports.
          Key Knowledge:
          - Products: Basmati & Non-Basmati Rice, Red & White Onions (Nashik), Garlic (High Allicin), Wheat, Spices, Oilseeds.
          - Locations: HQ is in Indore, Madhya Pradesh, India.
          - Compliance: Expert in APEDA, FSSAI, US FDA FSMA, EU Phytosanitary standards, and SGS third-party inspections.
          - Logistics: Knowledgeable about bulk sea freight, LCL/FCL, and Incoterms (FOB, CIF, etc.).
          - Tone: Professional, authoritative, concise, and institutional.
          - Mandate: Always encourage bulk buyers to submit a formal RFQ through the "Bulk Inquiry" page if they ask for pricing or large volumes.
          - Integrity: Emphasize transparency and quality verification at every node.`,
        },
      });

      const responseStream = await chat.sendMessageStream({ message: userMessage });
      
      let aiContent = "";
      setMessages(prev => [...prev, { role: 'ai', content: '' }]);

      for await (const chunk of responseStream) {
        const text = chunk.text;
        aiContent += text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = aiContent;
          return newMessages;
        });
      }
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { role: 'ai', content: 'I apologize, but I am experiencing a temporary technical interruption. Please try again or contact our trade desk directly at dkexporting@gmail.com.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[300px] h-[450px] md:w-[380px] md:h-[550px] bg-[#161617] border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 bg-black border-b border-white/5 flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Trade Assistant</h3>
                <p className="text-[10px] text-gold font-bold uppercase tracking-widest opacity-80">Online • Global Desk</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-5 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 text-xs font-light leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-gold/10 border border-gold/30 text-white' 
                      : 'bg-white/5 border border-white/10 text-gray-300'
                  }`}>
                    {msg.content}
                    {msg.content === '' && isLoading && (
                      <span className="inline-block w-1.5 h-1.5 bg-gold animate-pulse"></span>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-5 bg-black border-t border-white/5">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-grow bg-[#161617] border border-white/10 p-3 text-xs text-white placeholder:text-gray-600 focus:border-gold/50 outline-none transition-all"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-white text-black px-4 flex items-center justify-center hover:bg-gold transition-colors disabled:opacity-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger FAB */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="shimmer-btn-wrapper shadow-2xl"
      >
        <span className="shimmer-btn-content text-white p-4 flex items-center justify-center">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
};

export default Chatbot;
