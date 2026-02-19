
import React from 'react';
import { Product, Leadership, ProcessStep } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'rice',
    name: 'Rice (Basmati & Non-Basmati)',
    category: 'Grains',
    description: 'Premium long-grain Basmati and versatile Non-Basmati varieties sourced from the heart of the Himalayas and Indo-Gangetic plains.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'onion',
    name: 'Fresh Red & White Onions',
    category: 'Vegetables',
    description: 'World-renowned Indian onions sourced from the Nashik belt. Characterized by deep color, pungent aroma, and superior shelf life for long-distance transit.',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'garlic',
    name: 'Indian Single Clove & Multi-Clove Garlic',
    category: 'Vegetables',
    description: 'High-allicin content garlic, cured naturally and graded by size. Ideal for industrial processing and retail distribution.',
    image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wheat',
    name: 'Premium Wheat',
    category: 'Grains',
    description: 'High-protein hard wheat varieties ideal for industrial milling, bakeries, and pasta manufacturers.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pulses',
    name: 'Pulses & Legumes',
    category: 'Protein',
    description: 'A wide range of Chickpeas, Lentils, and Pigeon Peas, cleaned and graded to international phytosanitary standards.',
    image: 'https://images.unsplash.com/photo-1516711435534-03bc97245aed?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'spices',
    name: 'Whole & Ground Spices',
    category: 'Spices',
    description: 'Export-grade Turmeric, Cumin, Black Pepper, and Chili, curated for high essential oil content and purity.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'oilseeds',
    name: 'Oilseeds',
    category: 'Oilseeds',
    description: 'Natural and Hulled Sesame seeds, Soybeans, and Groundnuts with high oil yield and low moisture content.',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800'
  }
];

export const LEADERSHIP: Leadership[] = [
  {
    name: 'Raj Ranawat',
    role: 'CEO & Founder',
    bio: 'A visionary leader in global commodity trading, Raj Ranawat has institutionalized quality benchmarks across India\'s agricultural export landscape. His strategic oversight ensures DK Exporting remains a preferred partner for multi-million dollar portfolios in North America and Europe.',
    image: 'https://api.a0.dev/assets/image?text=professional%20headshot%20of%20a%20man%20in%20a%20light%20blue%20suit%20and%20black%20shirt%20clean%20shaven%20short%20hair%20professional%20look%20corporate%20portrait&aspect=3:4',
    socials: { linkedin: '#', email: 'dkexporting@gmail.com' }
  },
  {
    name: 'Adyant Prakash',
    role: 'Business Strategist',
    bio: 'An architect of cross-border trade optimization and institutional risk management. Adyant leverages sophisticated market intelligence to navigate complex global supply chain dynamics, ensuring DK Exporting maintains a structural competitive advantage for its high-volume B2B partners.',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400',
    socials: { linkedin: '#', email: 'dkexporting@gmail.com' }
  },
  {
    name: 'Amritanshu Monarch',
    role: 'Product Manager',
    bio: 'The custodian of quality and supply chain excellence. Amritanshu oversees the end-to-end integration of our sourcing nodes, ensuring that every shipment exceeds international phytosanitary and grading standards.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    socials: { linkedin: '#', email: 'dkexporting@gmail.com' }
  },
  {
    name: 'Rakesh Patidar',
    role: 'Sales Head',
    bio: 'A specialist in multi-million dollar B2B relationship management and global logistics. Rakesh leads our international sales division, focusing on large-scale procurement contracts for distributors and wholesalers worldwide.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    socials: { linkedin: '#', email: 'dkexporting@gmail.com' }
  }
];

export const PROCESS: ProcessStep[] = [
  {
    title: 'Ethical Sourcing',
    description: 'Direct procurement from audited farms across India to ensure traceability and fair trade practices.',
    icon: '🌾'
  },
  {
    title: 'Quality Testing',
    description: 'Rigorous multi-stage laboratory testing for moisture, purity, and pesticide residues.',
    icon: '🔬'
  },
  {
    title: 'Cleaning & Grading',
    description: 'Advanced processing facilities using Sortex and gravity separators for consistent uniformity.',
    icon: '⚙️'
  },
  {
    title: 'Packaging',
    description: 'Custom bulk packaging solutions (Jute, HDPE, Vacuum) tailored for long-haul sea freight.',
    icon: '📦'
  },
  {
    title: 'Documentation',
    description: 'Seamless management of Phyto certificates, COO, Inspection reports, and Bill of Lading.',
    icon: '📄'
  },
  {
    title: 'Global Shipping',
    description: 'Strategic logistics network ensuring timely delivery to USA and global major ports.',
    icon: '🚢'
  }
];
