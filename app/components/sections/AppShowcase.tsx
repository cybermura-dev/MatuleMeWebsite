'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function AppShowcase() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const screens = [
    {
      title: 'Удобный каталог',
      description: 'Просматривайте тысячи моделей спортивной обуви с удобной фильтрацией и поиском. Находите идеальную пару за считанные секунды.'
    },
    {
      title: 'Детальные описания',
      description: 'Изучайте подробную информацию о каждой модели: материалы, технологии, отзывы покупателей и рекомендации по подбору размера.'
    },
    {
      title: 'Быстрый заказ',
      description: 'Оформляйте заказы в несколько кликов. Выбирайте удобный способ оплаты и доставки. Отслеживайте свои заказы в режиме реального времени.'
    },
    {
      title: 'Персональные рекомендации',
      description: 'Получайте предложения, подобранные специально для вас на основе ваших предпочтений и истории покупок.'
    }
  ];

  useEffect(() => {
    if (!autoplayEnabled) return;
    
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplayEnabled, screens.length]);

  const handleScreenChange = (index: number) => {
    setActiveScreen(index);
    setAutoplayEnabled(false);
    
    const timeout = setTimeout(() => {
      setAutoplayEnabled(true);
    }, 10000);
    
    return () => clearTimeout(timeout);
  };

  return (
    <section id="app" className="py-20 bg-[#f6f8fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Наше приложение
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Скачайте наше приложение для удобного выбора и заказа спортивной обуви
          </motion.p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 flex justify-center">
            <motion.div 
              className="relative w-[300px] h-[600px] bg-black rounded-[40px] p-3 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex justify-center">
                  <div className="w-36 h-5 bg-black rounded-b-xl"></div>
                </div>
                
                <div className="w-full h-full pt-6">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeScreen}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full bg-gradient-to-b from-[#48B2E7]/10 to-[#0076B1]/10 flex flex-col"
                    >
                      <div className="py-4 px-6 bg-gradient-to-r from-[#48B2E7] to-[#0076B1] text-white">
                        <div className="text-lg font-semibold">Matule Me</div>
                        <div className="text-sm opacity-80">{screens[activeScreen].title}</div>
                      </div>
                      
                      <div className="flex-1 p-4 flex flex-col justify-between">
                        {activeScreen === 0 && (
                          <div className="space-y-4">
                            <div className="h-10 bg-white rounded-lg shadow-sm flex items-center px-4">
                              <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                              <span className="text-gray-400 text-sm">Поиск обуви...</span>
                            </div>
                            
                            <div className="flex gap-2 overflow-x-auto pb-2">
                              {['Все', 'Беговые', 'Для зала', 'Повседневные', 'Баскетбол'].map((cat, i) => (
                                <div key={i} className={`px-3 py-1 rounded-full text-xs whitespace-nowrap ${i === 0 ? 'bg-[#0076B1] text-white' : 'bg-white'}`}>
                                  {cat}
                                </div>
                              ))}
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3">
                              {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="bg-white rounded-lg p-2 shadow-sm">
                                  <div className="w-full h-24 mb-2 bg-gray-100 rounded-md"></div>
                                  <div className="h-3 w-full bg-gray-200 rounded mb-1"></div>
                                  <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {activeScreen === 1 && (
                          <div className="space-y-4">
                            <div className="w-full h-40 bg-white rounded-lg shadow-sm"></div>
                            
                            <div className="space-y-2">
                              <div className="h-5 bg-white rounded w-3/4"></div>
                              <div className="h-4 bg-white rounded w-1/2"></div>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="h-3 bg-white rounded"></div>
                              <div className="h-3 bg-white rounded"></div>
                              <div className="h-3 bg-white rounded w-3/4"></div>
                            </div>
                            
                            <div className="flex gap-2">
                              <div className="h-8 bg-white rounded flex-1"></div>
                              <div className="h-8 bg-[#0076B1] rounded flex-1"></div>
                            </div>
                          </div>
                        )}
                        
                        {activeScreen === 2 && (
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="h-4 bg-white rounded w-1/3"></div>
                              <div className="h-10 bg-white rounded"></div>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="h-4 bg-white rounded w-1/3"></div>
                              <div className="h-10 bg-white rounded"></div>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="h-4 bg-white rounded w-1/3"></div>
                              <div className="flex gap-2">
                                <div className="h-12 bg-white rounded flex-1"></div>
                                <div className="h-12 bg-white rounded flex-1"></div>
                              </div>
                            </div>
                            
                            <div className="mt-auto">
                              <div className="h-12 bg-[#0076B1] rounded flex items-center justify-center">
                                <div className="h-3 w-1/2 bg-white rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {activeScreen === 3 && (
                          <div className="space-y-4">
                            <div className="h-6 bg-white rounded-lg w-2/3"></div>
                            
                            <div className="grid grid-cols-2 gap-3">
                              {[1, 2].map((item) => (
                                <div key={item} className="bg-white rounded-lg p-2 shadow-sm">
                                  <div className="w-full h-24 mb-2 bg-gray-100 rounded-md"></div>
                                  <div className="h-3 w-full bg-gray-200 rounded mb-1"></div>
                                  <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
                                </div>
                              ))}
                            </div>
                            
                            <div className="h-6 bg-white rounded-lg w-1/2"></div>
                            
                            <div className="space-y-2">
                              {[1, 2, 3].map((item) => (
                                <div key={item} className="h-16 bg-white rounded-lg shadow-sm p-2 flex">
                                  <div className="w-12 h-12 bg-gray-100 rounded-md mr-2"></div>
                                  <div className="flex-1">
                                    <div className="h-3 w-2/3 bg-gray-200 rounded mb-1"></div>
                                    <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="mt-4 text-xs text-gray-500 italic text-center">
                          {screens[activeScreen].description}
                        </div>
                      </div>
                      
                      <div className="h-16 border-t border-gray-200 flex justify-between items-center px-6">
                        {['Главная', 'Каталог', 'Корзина', 'Профиль'].map((item, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <div className={`w-6 h-6 rounded-full ${i === (activeScreen % 4) ? 'bg-[#0076B1]' : 'bg-gray-300'}`}></div>
                            <div className="text-xs mt-1">{item}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Все возможности в вашем кармане
            </motion.h3>
            
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-lg text-gray-600">
                Наше мобильное приложение делает выбор и покупку спортивной обуви максимально 
                удобными и быстрыми. Скачайте прямо сейчас и оцените все преимущества:
              </p>
            </motion.div>
            
            <div className="space-y-4 mb-8">
              {screens.map((screen, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    activeScreen === index 
                      ? 'bg-gradient-to-r from-[#48B2E7] to-[#0076B1] text-white shadow-md' 
                      : 'bg-white hover:bg-gray-100'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  onClick={() => handleScreenChange(index)}
                >
                  <h4 className={`text-xl font-semibold mb-1 ${activeScreen === index ? 'text-white' : 'text-gray-800'}`}>
                    {screen.title}
                  </h4>
                  <p className={activeScreen === index ? 'text-white/90' : 'text-gray-600'}>
                    {screen.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center"
            >
              <Link
                href="https://apps.rustore.ru"
                target="_blank"
                className="inline-flex items-center bg-gradient-to-r from-[#48B2E7] to-[#0076B1] text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 7.27h1.78c.57 0 1.03.468 1.03 1.044v7.372c0 .576-.46 1.044-1.03 1.044h-1.78c-.57 0-1.03-.468-1.03-1.044V8.314c0-.576.46-1.044 1.03-1.044zm-5.852 0h1.78c.57 0 1.03.468 1.03 1.044v7.372c0 .576-.46 1.044-1.03 1.044h-1.78c-.57 0-1.03-.468-1.03-1.044V8.314c0-.576.46-1.044 1.03-1.044zm-5.851 0h1.78c.57 0 1.03.468 1.03 1.044v7.372c0 .576-.46 1.044-1.03 1.044h-1.78c-.57 0-1.03-.468-1.03-1.044V8.314c0-.576.46-1.044 1.03-1.044z" />
                </svg>
                Скачать из RuStore
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 