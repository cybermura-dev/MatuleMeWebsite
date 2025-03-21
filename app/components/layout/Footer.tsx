'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const footerLinks = [
    {
      title: "Компания",
      links: [
        { name: "О нас", href: "/#why-us" },
        { name: "Контакты", href: "/faq#contact" }
      ]
    },
    {
      title: "Обувь",
      links: [
        { name: "Теннис", href: "/categories/tennis" },
        { name: "Баскетбол", href: "/categories/basketball" },
        { name: "Уличные", href: "/categories/street" },
        { name: "Для мужчин", href: "/categories/men" },
        { name: "Для женщин", href: "/categories/women" },
      ]
    },
    {
      title: "Информация",
      links: [
        { name: "Доставка и возврат", href: "/shipping" },
        { name: "FAQ", href: "/faq" },
        { name: "Скачать приложение", href: "/download" }
      ]
    },
    {
      title: "Правовая информация",
      links: [
        { name: "Политика конфиденциальности", href: "/privacy" },
        { name: "Условия использования", href: "/terms" }
      ]
    }
  ];

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/takeshikodev",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      )
    },
    { 
      name: "Telegram", 
      href: "https://t.me/takeshikodev",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      )
    }
  ];

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pathname = usePathname();
  const isHomePage = pathname === '/' || pathname === '';

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-bold mb-4">Matule<span className="text-[#48B2E7]">Me</span></h2>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Ваш идеальный выбор для спортивной обуви. Мы предлагаем широкий ассортимент качественной обуви для различных видов спорта и активного отдыха.
            </p>
            
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Свяжитесь с нами</h3>
              <p className="text-gray-400">support@matuleme.com</p>
            </div>
          </motion.div>
          
          {footerLinks.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-medium mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/#') && isHomePage ? (
                      <button
                        onClick={() => scrollToSection(link.href.substring(2))}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Matule Me. Все права защищены.</p>
        </motion.div>
      </div>
    </footer>
  );
} 