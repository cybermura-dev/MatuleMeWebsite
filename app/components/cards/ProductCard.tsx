'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  category: string;
  description: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

export default function ProductCard({ 
  id,
  title, 
  price, 
  oldPrice, 
  image, 
  rating, 
  category,
  description,
  isNew = false,
  isFeatured = false
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`half-star-gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path fill={`url(#half-star-gradient-${id})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-3 h-3 md:w-4 md:h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    
    return stars;
  };
  
  return (
    <motion.div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={() => setIsTouched(true)} 
      onTouchEnd={() => setTimeout(() => setIsTouched(false), 1000)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="absolute top-2 md:top-4 left-2 md:left-4 z-10 flex flex-col gap-1 md:gap-2">
        {isNew && (
          <motion.div 
            className="bg-blue-500 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-semibold"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Новинка
          </motion.div>
        )}
        
        {isFeatured && (
          <motion.div 
            className="bg-purple-500 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-semibold"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Хит продаж
          </motion.div>
        )}
        
        {oldPrice && (
          <motion.div 
            className="bg-red-500 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-semibold"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Скидка {Math.round((1 - price / oldPrice) * 100)}%
          </motion.div>
        )}
      </div>
      
      <div className="relative h-52 sm:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10" />
        <motion.div
          className="relative w-full h-full"
          animate={{ 
            scale: isHovered || isTouched ? 1.1 : 1,
          }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={image} 
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-500"
          />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 flex justify-center p-3 md:p-4 bg-gradient-to-t from-black/60 to-transparent z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: isHovered || isTouched ? 1 : 0, 
            y: isHovered || isTouched ? 0 : 50 
          }}
          transition={{ duration: 0.3 }}
        >
          <Link href={`/products/${id}`}>
            <motion.button 
              className="px-4 md:px-6 py-2 md:py-2.5 bg-white rounded-full text-gray-800 hover:bg-[#0076B1] hover:text-white transition-colors shadow-md text-xs md:text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Подробнее
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
      
      <div className="p-3 sm:p-5">
        <div className="text-xs sm:text-sm text-gray-500 mb-1">{category}</div>
        <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-800 line-clamp-1">{title}</h3>
        
        <div className="flex items-center mb-2 md:mb-3">
          <div className="flex mr-2">
            {renderStars()}
          </div>
          <span className="text-xs sm:text-sm text-gray-500">({rating.toFixed(1)})</span>
        </div>
        
        <p className="text-xs sm:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-lg md:text-xl font-bold text-[#0076B1]">{price.toLocaleString('ru-RU')} ₽</span>
            {oldPrice && (
              <span className="text-xs md:text-sm text-gray-500 line-through ml-2">{oldPrice.toLocaleString('ru-RU')} ₽</span>
            )}
          </div>
          
          <div 
            className="relative w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden cursor-pointer"
            style={{ 
              background: `conic-gradient(#48B2E7 ${rating / 5 * 100}%, #f3f4f6 0)` 
            }}
          >
            <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center text-[10px] md:text-xs font-semibold text-gray-800">
              {Math.round(rating / 5 * 10)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 