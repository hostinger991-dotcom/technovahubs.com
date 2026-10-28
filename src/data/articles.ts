export type { Article } from '../types/article';
import { Article } from '../types/article';
import { category1Articles } from './category1';
import { category2Articles } from './category2';
import { category3Articles } from './category3';
import { category4Articles } from './category4';

export const allArticles: Article[] = [
  ...category1Articles,
  ...category2Articles,
  ...category3Articles,
  ...category4Articles,
];

export interface CategoryMeta {
  id: string;
  name: 'Consumer Electronics & Gadgets' | 'AI & Future Tech' | 'Cybersecurity & Software' | 'Smart Home & Computing Hardware';
  shortName: string;
  description: string;
  tagColor: string;
  count: number;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'consumer-electronics',
    name: 'Consumer Electronics & Gadgets',
    shortName: 'Consumer Electronics',
    description: 'Hardware teardowns, silicon-carbon electrochemistry, and optical ISP benchmarks across mobile devices and audio.',
    tagColor: '#5fdee7',
    count: 5,
  },
  {
    id: 'ai-future-tech',
    name: 'AI & Future Tech',
    shortName: 'AI & Future Tech',
    description: 'Diffusion transformers, agentic code execution, solid-state drone robotics, and humanoid actuator kinematics.',
    tagColor: '#38bdf8',
    count: 5,
  },
  {
    id: 'cybersecurity-software',
    name: 'Cybersecurity & Software',
    shortName: 'Cybersecurity & Software',
    description: 'WireGuard kernel tunnels, post-quantum ciphers, EDR ransomware rollbacks, and zero-knowledge privacy vaults.',
    tagColor: '#a855f7',
    count: 5,
  },
  {
    id: 'smart-home-hardware',
    name: 'Smart Home & Computing Hardware',
    shortName: 'Smart Home & Hardware',
    description: 'Matter 1.3 Thread mesh hubs, Sony Starvis 2 PoE security optics, PCIe 5.0 thermals, and inverter heat pumps.',
    tagColor: '#10b981',
    count: 5,
  },
];

export interface TickerItem {
  id: string;
  tag: string;
  headline: string;
  articleId: string;
  timestamp: string;
}

export const TICKER_HEADLINES: TickerItem[] = [
  {
    id: 'tick-1',
    tag: 'FLAGSHIP BREAKTHROUGH',
    headline: 'Silicon-Carbon Battery Anodes Break 6,200 mAh In Sub-8.5mm Smartphone Chassis',
    articleId: 'best-flagship-smartphones-2026',
    timestamp: 'JUST IN',
  },
  {
    id: 'tick-2',
    tag: 'ACOUSTIC LAB',
    headline: 'Solid-State xMEMS Silicon Transducers Achieve 0.04% Total Harmonic Distortion in ANC Earbuds',
    articleId: 'wireless-noise-canceling-earbuds',
    timestamp: '12m AGO',
  },
  {
    id: 'tick-3',
    tag: 'FOUNDATION MODELS',
    headline: 'Diffusion Transformers (DiT) Unify Video Synthesis and 4K Temporal Coherence',
    articleId: 'latest-generative-ai-tools',
    timestamp: '24m AGO',
  },
  {
    id: 'tick-4',
    tag: 'NETWORK SECURITY',
    headline: 'WireGuard Kernel Handshakes Integrated With Post-Quantum Kyber-768 Cryptography',
    articleId: 'best-vpn-for-online-privacy',
    timestamp: '41m AGO',
  },
  {
    id: 'tick-5',
    tag: 'ROBOTICS TELEMETRY',
    headline: 'Electric Planetary Roller-Screw Actuators Deliver 200Nm Torque in Commercial Humanoids',
    articleId: 'humanoid-robotics-developments',
    timestamp: '1h AGO',
  },
  {
    id: 'tick-6',
    tag: 'SMART PROTOCOLS',
    headline: 'Matter 1.3 Specification Coordinates Time-of-Use Dynamic Home Battery Inverter Peak Shaving',
    articleId: 'best-smart-home-hubs',
    timestamp: '2h AGO',
  },
  {
    id: 'tick-7',
    tag: 'PC HARDWARE',
    headline: 'Clocked Unbuffered DIMMs (CUDIMM) Hit 8,400 MT/s Stable On Standard 4-Layer Motherboards',
    articleId: 'next-gen-pc-hardware-components',
    timestamp: '3h AGO',
  },
];

export interface EditorProfile {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  specialty: string;
  articlesWritten: number;
  contactEmail: string;
}

export const EDITORS: EditorProfile[] = [
  {
    name: 'Dr. Marcus Vance',
    role: 'Principal Hardware Architect & Telemetry Lead',
    bio: 'Former senior semiconductor validation architect at Qualcomm. Marcus leads our physical hardware teardown lab, managing spectrophotometer tests and silicon wafer die analysis.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80',
    specialty: 'Semiconductor Fabrication, Silicon-Carbon Electrochemistry & Display Metrology',
    articlesWritten: 84,
    contactEmail: 'ahmadali07121@gmail.com',
  },
  {
    name: 'Dr. Aris Thorne',
    role: 'Chief AI Research Scientist',
    bio: 'Ph.D. from Stanford AI Laboratory and former OpenAI researcher. Aris specializes in distributed training scaling laws, inference compiler kernels, and foundation model safety audits.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&h=300&q=80',
    specialty: 'Diffusion Transformers, Token Economics & Distributed Neural Compilers',
    articlesWritten: 62,
    contactEmail: 'ahmadali07121@gmail.com',
  },
  {
    name: 'Julian Sterling',
    role: 'Principal Cybersecurity Analyst & Cryptographer',
    bio: 'CISSP and OSCP certified security auditor with 15 years auditing defense infrastructure and contributing to open-source cryptographic libraries like WireGuard and OpenSSL.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&h=300&q=80',
    specialty: 'Zero-Knowledge Cryptography, Linux Kernel Security & EDR Behavioral Heuristics',
    articlesWritten: 71,
    contactEmail: 'ahmadali07121@gmail.com',
  },
  {
    name: 'Elena Rostova',
    role: 'Senior Acoustic Engineer & Smart Grid Systems Lead',
    bio: 'M.Sc. in Acoustic Engineering from TU Berlin. Elena specializes in electroacoustic transducers, ITU-T speech quality models, and Matter 1.3 thermodynamic micro-grid controls.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80',
    specialty: 'xMEMS Transducers, Thread Mesh Protocols & Inverter Thermodynamics',
    articlesWritten: 53,
    contactEmail: 'ahmadali07121@gmail.com',
  },
  {
    name: 'Gareth Thorne',
    role: 'Hardware Benchmarking Director',
    bio: 'Computer engineer and veteran of 14 years in PC teardown labs. Gareth directs our thermal stress test chambers, direct-die delidding benches, and GPU excursion power telemetry.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
    specialty: 'PCIe 5.0 Thermal Throttling, High-Refresh Display Overdrive & ATX 3.1 Excursions',
    articlesWritten: 92,
    contactEmail: 'ahmadali07121@gmail.com',
  },
];
