'use client';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import placeholderImg from '../../public/images/placeholder/shoe_placeholder_medium.jpg';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

type ProductsCollection = Record<string, Product[]>;

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<string>("tennis");

  const placeholderUrl = "/images/placeholder/shoe_placeholder.jpg";

  const categories: Category[] = [
    {
      id: "tennis",
      name: "Теннис",
      description: "Легкие и удобные кроссовки для игры в теннис",
      image: "/images/categories/tennis.jpg",
      href: "/categories/tennis"
    },
    {
      id: "basketball",
      name: "Баскетбол",
      description: "Кроссовки с хорошей амортизацией для игры в баскетбол",
      image: "/images/categories/basketball.jpg",
      href: "/categories/basketball"
    },
    {
      id: "women",
      name: "Для женщин",
      description: "Стильная и удобная обувь для женщин",
      image: "/images/categories/women.jpg",
      href: "/categories/women"
    },
    {
      id: "men",
      name: "Для мужчин",
      description: "Практичная и комфортная обувь для мужчин",
      image: "/images/categories/men.jpg",
      href: "/categories/men"
    },
    {
      id: "street",
      name: "Уличные",
      description: "Прочная обувь для уличного стиля и активного отдыха",
      image: "/images/categories/street.jpg",
      href: "/categories/street"
    }
  ];

  const products: ProductsCollection = {
    tennis: [
      { id: "t1", name: "Tennis Pro Light", price: 9990, image: placeholderUrl, rating: 4.5, category: "tennis" },
      { id: "t2", name: "Court Master", price: 8790, image: placeholderUrl, rating: 4.2, category: "tennis" },
      { id: "t3", name: "Speed Ace", price: 10990, image: placeholderUrl, rating: 4.7, category: "tennis" },
      { id: "t4", name: "Match Point", price: 7990, image: placeholderUrl, rating: 4.0, category: "tennis" },
      { id: "t5", name: "Grand Slam", price: 12490, image: placeholderUrl, rating: 4.8, category: "tennis" }
    ],
    basketball: [
      { id: "b1", name: "Slam Dunk Pro", price: 11990, image: placeholderUrl, rating: 4.6, category: "basketball" },
      { id: "b2", name: "Air Jump Max", price: 10790, image: placeholderUrl, rating: 4.3, category: "basketball" },
      { id: "b3", name: "Court Dominator", price: 13490, image: placeholderUrl, rating: 4.7, category: "basketball" },
      { id: "b4", name: "Rebound Elite", price: 9990, image: placeholderUrl, rating: 4.2, category: "basketball" },
      { id: "b5", name: "Pivot Master", price: 12990, image: placeholderUrl, rating: 4.5, category: "basketball" }
    ],
    women: [
      { id: "w1", name: "Elegance Step", price: 8990, image: placeholderUrl, rating: 4.4, category: "women" },
      { id: "w2", name: "Comfort Glide", price: 7490, image: placeholderUrl, rating: 4.1, category: "women" },
      { id: "w3", name: "Style Walker", price: 9490, image: placeholderUrl, rating: 4.6, category: "women" },
      { id: "w4", name: "Urban Chic", price: 10990, image: placeholderUrl, rating: 4.3, category: "women" },
      { id: "w5", name: "Soft Step", price: 8290, image: placeholderUrl, rating: 4.2, category: "women" }
    ],
    men: [
      { id: "m1", name: "Classic Comfort", price: 8990, image: placeholderUrl, rating: 4.3, category: "men" },
      { id: "m2", name: "Urban Walker", price: 7990, image: placeholderUrl, rating: 4.1, category: "men" },
      { id: "m3", name: "Business Step", price: 11990, image: placeholderUrl, rating: 4.5, category: "men" },
      { id: "m4", name: "Daily Runner", price: 9490, image: placeholderUrl, rating: 4.2, category: "men" },
      { id: "m5", name: "Modern Move", price: 10490, image: placeholderUrl, rating: 4.4, category: "men" }
    ],
    street: [
      { id: "s1", name: "Street Cruiser", price: 9990, image: placeholderUrl, rating: 4.5, category: "street" },
      { id: "s2", name: "Urban Stepper", price: 8790, image: placeholderUrl, rating: 4.2, category: "street" },
      { id: "s3", name: "Metro Glider", price: 10990, image: placeholderUrl, rating: 4.7, category: "street" },
      { id: "s4", name: "City Rush", price: 7990, image: placeholderUrl, rating: 4.0, category: "street" },
      { id: "s5", name: "Concrete Walker", price: 11490, image: placeholderUrl, rating: 4.4, category: "street" }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.15)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`star-${i}`} className="text-yellow-500">★</span>);
    }
    
    if (halfStar) {
      stars.push(<span key="half-star" className="text-yellow-500">☆</span>);
    }
    
    return stars;
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gray-50"
    >
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Категории обуви</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#48B2E7] to-[#0076B1] mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
              Выберите категорию, чтобы увидеть подходящую обувь
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm md:text-base transition-all mb-2 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-[#48B2E7] to-[#0076B1] text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            key={activeCategory}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {products[activeCategory].map((product: Product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="h-36 md:h-48 lg:h-40 relative overflow-hidden">
                  <Image
                    src={product.image || placeholderImg}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full transition-transform hover:scale-110 duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = placeholderImg.src;
                    }}
                  />
                  <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-800">
                    {product.price} ₽
                  </div>
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-medium text-sm md:text-base text-gray-800 mb-1 truncate">{product.name}</h3>
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center mb-2 sm:mb-0">
                      {renderStars(product.rating)}
                      <span className="ml-1 text-sm text-gray-500">({product.rating})</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#48B2E7] to-[#0076B1] text-white rounded-full shadow-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-10"
          >
            <Link href={categories.find(c => c.id === activeCategory)?.href || ""}>
              <motion.div
                className="inline-flex flex-wrap justify-center items-center px-6 py-3 bg-gradient-to-r from-[#48B2E7] to-[#0076B1] text-white font-medium rounded-full shadow-md cursor-pointer text-center"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 118, 177, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">Все товары в категории</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
} 