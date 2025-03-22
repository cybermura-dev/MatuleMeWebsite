'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SizeSelectorProps {
  sizes: number[];
  className?: string;
  onSelect?: (size: number) => void;
}

export default function SizeSelector({ sizes, className = '', onSelect }: SizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [hoveredSize, setHoveredSize] = useState<number | null>(null);
  
  const handleSelect = (size: number) => {
    setSelectedSize(size);
    if (onSelect) onSelect(size);
  };
  
  const sizeVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: (i: number) => ({ 
      scale: 1, 
      opacity: 1,
      transition: { 
        delay: i * 0.05,
        duration: 0.3
      }
    }),
    hover: { 
      scale: 1.1,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      y: -5
    },
    tap: { scale: 0.95 }
  };
  
  return (
    <div className={`${className}`}>
      <AnimatePresence>
        <motion.div 
          className="mb-2 flex items-center justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-base md:text-lg font-medium text-gray-800">Выберите размер</h3>
          
          {hoveredSize && (
            <motion.div 
              className="text-xs md:text-sm text-gray-600"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              EU {hoveredSize}
            </motion.div>
          )}
        </motion.div>
        
        <div className="flex flex-wrap gap-1 md:gap-2">
          {sizes.map((size, index) => (
            <motion.button
              key={size}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-medium transition-colors relative ${
                selectedSize === size 
                  ? 'bg-[#0076B1] text-white' 
                  : 'bg-white border border-gray-200 text-gray-800 hover:border-[#48B2E7]'
              }`}
              variants={sizeVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              custom={index}
              onHoverStart={() => setHoveredSize(size)}
              onHoverEnd={() => setHoveredSize(null)}
              onClick={() => handleSelect(size)}
            >
              <span className="text-sm md:text-base">{size}</span>
              
              {selectedSize === size && (
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-[#0076B1]"
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
        
        {selectedSize && (
          <motion.div 
            className="mt-3 md:mt-4 text-xs md:text-sm text-gray-600 flex items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Вы выбрали размер: {selectedSize} EU
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 