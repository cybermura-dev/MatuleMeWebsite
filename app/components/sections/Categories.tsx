'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../cards/ProductCard';

const products = [
  {
    id: 'p1',
    title: 'Nike Air Max 270',
    price: 12990,
    oldPrice: 15990,
    image: '/images/product1.jpg',
    rating: 4.7,
    category: 'Беговые кроссовки',
    description: 'Легкие и удобные кроссовки для бега с амортизацией Air Max.',
    isNew: true
  },
  {
    id: 'p2',
    title: 'Adidas Ultraboost 22',
    price: 14990,
    image: '/images/product2.jpg',
    rating: 4.9,
    category: 'Беговые кроссовки',
    description: 'Революционная технология Boost для максимального возврата энергии при беге.',
    isFeatured: true
  },
  {
    id: 'p3',
    title: 'Under Armour HOVR',
    price: 9990,
    oldPrice: 11990,
    image: '/images/product3.jpg',
    rating: 4.5,
    category: 'Тренировочные кроссовки',
    description: 'Идеально подходят для интенсивных тренировок в зале.'
  },
  {
    id: 'p4',
    title: 'New Balance 990v5',
    price: 16990,
    image: '/images/product4.jpg',
    rating: 4.8,
    category: 'Повседневные кроссовки',
    description: 'Культовая модель, сочетающая стиль и комфорт для повседневной носки.'
  },
  {
    id: 'p5',
    title: 'Puma RS-X',
    price: 8990,
    oldPrice: 10990,
    image: '/images/product5.jpg',
    rating: 4.3,
    category: 'Повседневные кроссовки',
    description: 'Массивные кроссовки с ретро-дизайном для создания стильного образа.'
  },
  {
    id: 'p6',
    title: 'ASICS Gel-Kayano 28',
    price: 13990,
    image: '/images/product6.jpg',
    rating: 4.6,
    category: 'Беговые кроссовки',
    description: 'Стабильность и комфорт для длительных пробежек.'
  },
  {
    id: 'p7',
    title: 'Nike LeBron 19',
    price: 15990,
    oldPrice: 18990,
    image: '/images/product7.jpg',
    rating: 4.8,
    category: 'Баскетбольные кроссовки',
    description: 'Профессиональные баскетбольные кроссовки с амортизацией Nike Air.'
  },
  {
    id: 'p8',
    title: 'Jordan XXXVI',
    price: 17990,
    image: '/images/product8.jpg',
    rating: 4.9,
    category: 'Баскетбольные кроссовки',
    description: 'Высокотехнологичные кроссовки для игры на высоком уровне.',
    isNew: true
  }
];

const categories = [
  { id: 'all', name: 'Все' },
  { id: 'running', name: 'Беговые' },
  { id: 'training', name: 'Тренировочные' },
  { id: 'casual', name: 'Повседневные' },
  { id: 'basketball', name: 'Баскетбольные' }
];

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => {
        if (activeCategory === 'running') return product.category.includes('Беговые');
        if (activeCategory === 'training') return product.category.includes('Тренировочные');
        if (activeCategory === 'casual') return product.category.includes('Повседневные');
        if (activeCategory === 'basketball') return product.category.includes('Баскетбольные');
        return true;
      });
  
  return (
    <section id="categories" className="py-12 md:py-20 bg-gradient-to-b from-white to-[#f6f8fa]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Выберите свой стиль</h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Широкий ассортимент качественной спортивной обуви для любых целей и активностей
          </p>
        </motion.div>
        
        <div className="mb-6 md:mb-10">
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 md:hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`h-9 px-1 sm:px-2 py-0 flex items-center justify-center rounded-lg text-[10px] xs:text-xs font-medium transition-all duration-300 truncate overflow-hidden ${
                  activeCategory === category.id 
                  ? 'bg-[#0076B1] text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="truncate overflow-hidden">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
          
          <motion.div 
            className="hidden md:flex md:flex-wrap md:justify-center md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                  ? 'bg-[#0076B1] text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
                whileHover={{ scale: activeCategory === category.id ? 1.03 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          className="mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm md:text-base text-gray-600">
            Найдено товаров: <span className="font-semibold">{filteredProducts.length}</span>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="col-span-full text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500 text-lg">Товары не найдены</p>
              <button 
                onClick={() => setActiveCategory('all')} 
                className="mt-4 underline text-[#0076B1] hover:text-[#48B2E7]"
              >
                Показать все товары
              </button>
            </motion.div>
          )}
        </div>
        
        {filteredProducts.length > 0 && (
          <motion.div 
            className="mt-10 md:mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-[#0076B1] text-[#0076B1] rounded-full text-base md:text-lg font-semibold hover:bg-[#0076B1] hover:text-white transition-colors duration-300 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Показать все модели
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
} 