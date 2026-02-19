
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export interface Leadership {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}