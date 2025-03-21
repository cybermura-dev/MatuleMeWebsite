'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ParticlesBackground from '../animations/ParticlesBackground';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#48B2E7] to-[#0076B1] min-h-screen flex items-center">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white drop-shadow-md mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Спортивная обувь на любой вкус
            </motion.h1>
            <motion.p 
              className="text-xl text-white drop-shadow-md mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Matule Me — ваш надежный магазин качественной спортивной обуви. 
              Широкий выбор моделей для бега, тренировок и повседневной носки. 
              Доставка по всей России.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link 
                href="/download"
                className="bg-white text-primary px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 font-semibold flex items-center border border-blue-100"
              >
                <span>Скачать из RuStore</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Link>
              <Link 
                href="#features"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-colors font-semibold"
              >
                Узнать больше
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:col-span-6 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <div className="relative w-[400px] h-[400px] bg-gradient-to-br from-blue-100 to-white rounded-3xl shadow-2xl flex items-center justify-center transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <span className="text-2xl text-primary-light font-bold">Спортивная обувь</span>
                
                <motion.div 
                  className="absolute -top-8 -right-8 w-16 h-16 bg-yellow-400 rounded-full opacity-80"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-10 -left-10 w-20 h-20 bg-primary-light rounded-full opacity-70"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              
              <motion.div
                className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-white rounded-full shadow-lg px-4 py-2 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <svg className="w-5 h-5 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Премиум качество</span>
              </motion.div>
              
              <motion.div
                className="absolute bottom-10 left-0 transform -translate-x-1/4 bg-white rounded-full shadow-lg px-4 py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <span className="font-medium">Быстрая доставка</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 110" fill="white">
          <path d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,96C672,96,768,64,864,58.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
} 