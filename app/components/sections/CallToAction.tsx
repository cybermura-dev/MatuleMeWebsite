'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-[#48B2E7] to-[#0076B1] py-24 relative overflow-hidden">
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-10 right-20 w-24 h-24 bg-white opacity-10 rounded-full"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, 20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Скачайте наше приложение прямо сейчас!
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white opacity-90 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Доступно в RuStore. Удобный каталог спортивной обуви в вашем телефоне.
            Покупайте с персональными скидками и получайте уведомления о новых поступлениях.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link 
              href="https://apps.rustore.ru" 
              target="_blank"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 font-semibold"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 7.27h1.78c.57 0 1.03.468 1.03 1.044v7.372c0 .576-.46 1.044-1.03 1.044h-1.78c-.57 0-1.03-.468-1.03-1.044V8.314c0-.576.46-1.044 1.03-1.044zm-5.852 0h1.78c.57 0 1.03.468 1.03 1.044v7.372c0 .576-.46 1.044-1.03 1.044h-1.78c-.57 0-1.03-.468-1.03-1.044V8.314c0-.576.46-1.044 1.03-1.044zm-5.851 0h1.78c.57 0 1.03.468 1.03 1.044v7.372c0 .576-.46 1.044-1.03 1.044h-1.78c-.57 0-1.03-.468-1.03-1.044V8.314c0-.576.46-1.044 1.03-1.044z" />
              </svg>
              Скачать из RuStore
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 110" fill="white">
          <path d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,96C672,96,768,64,864,58.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
} 