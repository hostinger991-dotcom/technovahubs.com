export interface InfographicPanel {
  title: string;
  metric: string;
  description: string;
  techHighlight: string;
}

export interface InfographicConfig {
  title: string;
  subtitle: string;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    bgGradient: string;
  };
  themeBackground: 'metallic' | 'soundwave' | 'circuit' | 'circular_power' | 'blueprint' | 'neural_mesh' | 'isometric' | 'topographical' | 'lab' | 'data_tunnel' | 'shield' | 'gauge' | 'vault' | 'footprint' | 'smart_home' | 'crosshair' | 'exploded_pc' | 'travel_workspace' | 'eco_energy';
  panels: [
    InfographicPanel,
    InfographicPanel,
    InfographicPanel,
    InfographicPanel,
    InfographicPanel,
    InfographicPanel
  ];
}

export interface BenchmarkRow {
  testName: string;
  categoryWinner: string;
  runnerUp: string;
  performanceDelta: string;
  metricUnit: string;
}

export interface ArticleSection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  calloutBox?: {
    title: string;
    text: string;
  };
  specsTable?: {
    headers: string[];
    rows: string[][];
  };
}

export interface Article {
  id: string;
  slug: string;
  keyword: string;
  category: 'Consumer Electronics & Gadgets' | 'AI & Future Tech' | 'Cybersecurity & Software' | 'Smart Home & Computing Hardware';
  title: string;
  subtitle: string;
  deck: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    credentials: string;
  };
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  wordCount: number;
  approvedPromptText: string;
  imageUrl: string;
  infographic: InfographicConfig;
  benchmarks: BenchmarkRow[];
  pros: string[];
  cons: string[];
  keyTakeaways: string[];
  sections: ArticleSection[];
}
