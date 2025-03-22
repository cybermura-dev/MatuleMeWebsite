'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  name: string;
}

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const sections: Section[] = useMemo(() => [
    { id: 'hero', name: 'Главная' },
    { id: 'features', name: 'Возможности' },
    { id: 'why-us', name: 'Преимущества' },
    { id: 'app-showcase', name: 'Приложение' },
    { id: 'reviews', name: 'Отзывы' }
  ], []);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
      
      let currentSection = null;
      let minDistance = Infinity;
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section.id;
          }
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };
  
  if (!isVisible) return null;
  
  return (
    <motion.div 
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden sm:block"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center space-y-4 p-2 bg-white/10 backdrop-blur-lg rounded-full shadow-lg">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="relative group"
            aria-label={`Перейти к секции ${section.name}`}
          >
            <div className={`
              w-3 h-3 rounded-full transition-all duration-300 
              ${activeSection === section.id ? 'bg-[#0076B1] scale-110' : 'bg-gray-300 group-hover:bg-[#48B2E7]'}
            `} />
            
            <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-white rounded text-sm font-medium text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
              {section.name}
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
} 