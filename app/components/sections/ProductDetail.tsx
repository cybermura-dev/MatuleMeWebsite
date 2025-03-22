'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const productImages = [
  '/images/product1.jpg',
  '/images/product2.jpg',
  '/images/product3.jpg',
  '/images/product4.jpg'
];

const productSizes = [39, 40, 41, 42, 43, 44, 45, 46];

const productFeatures = [
  "Легкий воздухопроницаемый верх из сетчатого материала",
  "Амортизирующая подошва с технологией Air Max",
  "Усиленная пятка для стабильности и поддержки",
  "Резиновая подметка с оптимальным рисунком протектора",
  "Съемная стелька с технологией антибактериальной пропитки"
];

const productSpecs = {
  "Бренд": "Nike",
  "Модель": "Air Max 270",
  "Материал верха": "Текстиль, синтетика",
  "Материал подошвы": "Резина, EVA, Air Max",
  "Сезон": "Весна/Лето/Осень",
  "Страна производства": "Вьетнам"
};

export default function ProductDetail() {
  const [activeImage, setActiveImage] = useState(productImages[0]);
  const [activeTab, setActiveTab] = useState('description');
  
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-3 md:space-y-4">
            <motion.div 
              className="relative h-[350px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 z-10 rounded-2xl" />
              <motion.div
                className="h-full w-full"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <Image 
                  src={activeImage} 
                  alt="Nike Air Max 270" 
                  layout="fill" 
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </motion.div>
              
              <motion.div
                className="absolute bottom-4 left-4 px-3 md:px-4 py-1 md:py-2 bg-white/80 backdrop-blur-sm rounded-xl z-20 flex items-center shadow-md"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="font-medium text-sm md:text-base">4.7/5 - 128 отзывов</span>
              </motion.div>
            </motion.div>
            
            <div className="flex space-x-2 md:space-x-3 overflow-x-auto no-scrollbar pb-2">
              {productImages.map((image, index) => (
                <motion.button
                  key={image}
                  onClick={() => setActiveImage(image)}
                  className={`relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-lg overflow-hidden flex-shrink-0 ${
                    activeImage === image ? 'ring-2 ring-[#0076B1]' : 'ring-1 ring-gray-200'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image 
                    src={image} 
                    alt={`Product view ${index + 1}`} 
                    layout="fill" 
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.button>
              ))}
            </div>
          </div>
          
          <div>
            <motion.div
              className="mb-5 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-wrap items-center mb-2 gap-2">
                <span className="text-xs sm:text-sm text-white bg-[#0076B1] px-3 py-1 rounded-full">
                  Новинка
                </span>
                <span className="text-xs sm:text-sm text-white bg-red-500 px-3 py-1 rounded-full">
                  -20%
                </span>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Nike Air Max 270</h1>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                Легкие и удобные кроссовки для бега с амортизацией Air Max.
                Идеально подходят для длительных тренировок и повседневной носки.
              </p>
              
              <div className="flex items-center mb-5 md:mb-6">
                <span className="text-2xl md:text-3xl font-bold text-[#0076B1] mr-3">12 990 ₽</span>
                <span className="text-lg md:text-xl text-gray-500 line-through">15 990 ₽</span>
              </div>
            </motion.div>
            
            <motion.div
              className="mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-base md:text-lg font-medium text-gray-800 mb-3">Доступные размеры</h3>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {productSizes.map((size, index) => (
                  <motion.div
                    key={size}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-medium bg-white border border-gray-200 text-gray-800"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <span className="text-sm md:text-base">{size}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="border border-gray-200 rounded-xl overflow-hidden mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex border-b border-gray-200">
                <button 
                  className={`flex-1 py-3 md:py-4 text-sm md:text-base font-medium ${activeTab === 'description' ? 'bg-[#f6f8fa] text-[#0076B1]' : 'bg-white text-gray-700'}`}
                  onClick={() => setActiveTab('description')}
                >
                  Описание
                </button>
                <button 
                  className={`flex-1 py-3 md:py-4 text-sm md:text-base font-medium ${activeTab === 'specs' ? 'bg-[#f6f8fa] text-[#0076B1]' : 'bg-white text-gray-700'}`}
                  onClick={() => setActiveTab('specs')}
                >
                  Характеристики
                </button>
              </div>
              
              <div className="p-4 md:p-5 bg-[#f6f8fa]">
                {activeTab === 'description' ? (
                  <ul className="space-y-2 text-sm md:text-base text-gray-600">
                    {productFeatures.map((feature, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#0076B1] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-sm md:text-base">
                    {Object.entries(productSpecs).map(([key, value], index) => (
                      <motion.div 
                        key={key}
                        className="flex flex-col"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="text-gray-500">{key}</span>
                        <span className="font-medium text-gray-800">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
            
            {/* Контактная информация */}
            <motion.div
              className="bg-[#f6f8fa] p-4 md:p-5 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h3 className="text-base md:text-lg font-medium text-gray-800 mb-3">Где купить</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                Этот товар доступен в магазинах нашей сети. Для получения подробной информации о наличии и цене, пожалуйста, свяжитесь с нами.
              </p>
              
              <Link href="/contacts">
                <motion.button
                  className="w-full py-3 md:py-4 rounded-full bg-[#0076B1] text-white text-sm md:text-base font-semibold hover:bg-[#48B2E7] transition-colors shadow-md flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Связаться с нами
                </motion.button>
              </Link>
            </motion.div>
            
            {/* Информация о наличии и доставке */}
            <motion.div
              className="mt-6 md:mt-8 grid grid-cols-2 gap-3 md:gap-4 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                В наличии
              </div>
              
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Доставка за 1-3 дня
              </div>
              
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Гарантия 30 дней
              </div>
              
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                3 года на рынке
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 