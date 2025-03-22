'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function MiniNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  const navItems = useMemo(() => [
    { id: 'features', name: 'Возможности', icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ) },
    { id: 'why-us', name: 'Преимущества', icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ) },
    { id: 'app-showcase', name: 'Приложение', icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ) },
    { id: 'reviews', name: 'Отзывы', icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ) },
  ], []);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
      
      let current = null;
      let minDistance = Infinity;
      
      navItems.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          
          if (distance < minDistance) {
            minDistance = distance;
            current = item.id;
          }
        }
      });
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);
  
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
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
          className="fixed left-1/2 transform -translate-x-1/2 top-0 z-[60] px-2 sm:px-4 py-2 bg-white/90 backdrop-blur-lg rounded-b-xl shadow-lg w-[95%] sm:w-auto"
        >
          <div className="flex items-center justify-between sm:justify-start sm:space-x-4 space-x-2">
            <Link href="/" className="group">
              <div className="p-1.5 sm:p-2 rounded-full bg-gradient-to-r from-[#48B2E7] to-[#0076B1] text-white transition-transform transform group-hover:scale-110">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
            </Link>
            
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group"
              >
                <div className={`
                  flex items-center justify-center p-1.5 sm:p-2 rounded-full transition-all duration-300
                  ${activeSection === item.id 
                    ? 'bg-[#0076B1] text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-[#48B2E7] hover:text-white'}
                `}>
                  {item.icon}
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.name}
                </div>
              </button>
            ))}
            
            <Link 
              href="#cta" 
              className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-[#0076B1] to-[#48B2E7] text-white text-xs sm:text-sm font-medium transition-transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="hidden xs:inline">Скачать</span>
              <span className="xs:hidden inline">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </Link>
          </div>
          
          <div className="absolute -bottom-1 left-0 w-full h-1 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#48B2E7] to-[#0076B1]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 