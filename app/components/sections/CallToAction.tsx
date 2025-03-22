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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative mx-auto w-[280px] h-[560px]">
              <div className="absolute inset-0 bg-black rounded-[40px] shadow-xl overflow-hidden border-[10px] border-black">
                <div className="w-full h-full bg-gray-200 rounded-[30px] flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-medium">Скриншот приложения</span>
                </div>
                
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80px] h-[25px] bg-black rounded-b-xl"></div>
              </div>
              
              <motion.div 
                className="absolute top-[30%] left-[20%] w-[100px] h-[180px] bg-white/10 rounded-full rotate-45 filter blur-md"
                animate={{ opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
          
          <div className="order-1 md:order-2 text-left md:text-left">
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
                href="/download" 
                className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 font-semibold"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 7.27h1.78c.57 0 1.03.468 1.03 1.044v7.372c0 .576-.46 1.044-1.03 1.044h-1.78c-.57 0-1.03-.468-1.03-1.044V8.314c0-.576.46-1.044 1.03-1.044zm-5.852 0h1.78c.57 0 1.03.468 1.03 1.044v7.372c0 .576-.46 1.044-1.03 1.044h-1.78c-.57 0-1.03-.468-1.03-1.044V8.314c0-.576.46-1.044 1.03-1.044zm-5.851 0h1.78c.57 0 1.03.468 1.03 1.044v7.372c0 .576-.46 1.044-1.03 1.044h-1.78c-.57 0-1.03-.468-1.03-1.044V8.314c0-.576.46-1.044 1.03-1.044z" />
                </svg>
                Скачать из RuStore
              </Link>
            </motion.div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                className="flex items-center text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Быстрая оплата</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Безопасные покупки</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 110" fill="#f6f8fa">
          <path d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,96C672,96,768,64,864,58.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
} 