export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  product?: string;
}

export interface AppScreen {
  id: number;
  title: string;
  description: string;
}

export interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: string;
  threshold?: number;
  delay?: number;
  className?: string;
}

export interface ParticlesBackgroundProps {
  className?: string;
} 