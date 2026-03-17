export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'user' | 'reseller';
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'bot' | 'script' | 'vps' | 'other';
  features: string[];
  inStock: boolean;
}

export interface VPSPlan {
  id: string;
  name: string;
  ram: number;
  cpu: number;
  storage: number;
  bandwidth: string;
  price: number;
  panel: boolean;
  reseller: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  tags: string[];
}
