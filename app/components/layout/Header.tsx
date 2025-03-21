'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToElement = (elementId: string) => {
    setIsOpen(false);
    
    if (pathname === '/') {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Главная', href: '/' },
    { name: 'Категории', href: '/categories' },
    { name: 'Возможности', href: '/#features', isAnchor: true, section: 'features' },
    { name: 'Преимущества', href: '/#why-us', isAnchor: true, section: 'why-us' },
    { name: 'Приложение', href: '/#app-showcase', isAnchor: true, section: 'app-showcase' },
    { name: 'Отзывы', href: '/#reviews', isAnchor: true, section: 'reviews' },
    { name: 'Скачать', href: '/download' }
  ];

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: { 
        duration: 0.2,
        staggerChildren: 0.05, 
        staggerDirection: -1 
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.08, 
        delayChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      )
    },
    { 
      name: 'Telegram', 
      href: 'https://t.me/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      )
    }
  ];

  const footerLinks = [
    { name: 'Доставка и возврат', href: '/shipping' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Политика конфиденциальности', href: '/privacy' },
    { name: 'Условия использования', href: '/terms' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <motion.div 
              className={`font-bold text-2xl ${isScrolled ? 'text-[#0076B1]' : 'text-white'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Matule<span className="text-[#48B2E7]">Me</span>
            </motion.div>
          </Link>
          
          <motion.nav 
            className="hidden md:flex space-x-1 lg:space-x-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.isAnchor ? (
                  <button
                    onClick={() => scrollToElement(link.section)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      pathname === '/' && isScrolled
                        ? 'text-gray-700 hover:text-[#0076B1]'
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      pathname === link.href
                        ? isScrolled
                          ? 'text-[#0076B1] font-semibold'
                          : 'text-white font-semibold'
                        : isScrolled
                        ? 'text-gray-700 hover:text-[#0076B1]'
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
                {pathname === link.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#48B2E7]"
                    layoutId="underline"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
              </div>
            ))}
          </motion.nav>
          
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all ${
                  isScrolled ? 'text-gray-600 hover:text-[#0076B1]' : 'text-white/80 hover:text-white'
                }`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
          
          <motion.button
            className="md:hidden text-white z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Меню навигации"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="relative w-6 h-5">
              <motion.span
                className={`absolute left-0 w-full h-0.5 rounded-full transition-colors ${
                  isOpen ? 'bg-white' : isScrolled ? 'bg-gray-800' : 'bg-white'
                }`}
                animate={{ 
                  top: isOpen ? '10px' : '0px', 
                  rotate: isOpen ? '45deg' : '0deg' 
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className={`absolute left-0 w-full h-0.5 rounded-full top-2 transition-colors ${
                  isOpen ? 'bg-white' : isScrolled ? 'bg-gray-800' : 'bg-white'
                }`}
                animate={{ 
                  opacity: isOpen ? 0 : 1
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className={`absolute left-0 w-full h-0.5 rounded-full transition-colors ${
                  isOpen ? 'bg-white' : isScrolled ? 'bg-gray-800' : 'bg-white'
                }`}
                animate={{ 
                  top: isOpen ? '10px' : '20px', 
                  rotate: isOpen ? '-45deg' : '0deg' 
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-gradient-to-br from-[#0076B1] to-[#48B2E7] z-40 flex flex-col justify-center items-center md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <motion.nav className="flex flex-col items-center space-y-6 mt-20">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  {link.isAnchor ? (
                    <button
                      onClick={() => scrollToElement(link.section)}
                      className="px-4 py-2 text-xl font-medium text-white hover:text-white/80 transition-all"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2 text-xl font-medium text-white hover:text-white/80 transition-all ${
                        pathname === link.href ? 'border-b-2 border-white' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.nav>
            
            <motion.div 
              className="flex flex-col items-center space-y-4 mt-10"
              variants={itemVariants}
            >
              <p className="text-white/80 text-sm mb-2">Дополнительно</p>
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex space-x-6 mt-10"
              variants={itemVariants}
            >
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-all"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 