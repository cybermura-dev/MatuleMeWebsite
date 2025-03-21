'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Review } from '../../types';

export default function Reviews() {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Алексей К.',
      avatar: '/avatars/avatar1.png',
      rating: 5,
      date: '12.04.2023',
      text: 'Отличный магазин, заказал кроссовки Nike Air Max, доставка быстрая, качество на высоте. Буду заказывать еще!',
      product: 'Nike Air Max 270'
    },
    {
      id: 2,
      name: 'Мария С.',
      avatar: '/avatars/avatar2.png',
      rating: 5,
      date: '23.05.2023',
      text: 'Спасибо Matule Me за помощь в выборе кроссовок для бега. Подобрали именно то, что нужно. Очень комфортные и легкие.',
      product: 'Adidas Ultraboost 22'
    },
    {
      id: 3,
      name: 'Дмитрий Л.',
      avatar: '/avatars/avatar3.png',
      rating: 4,
      date: '07.06.2023',
      text: 'Удобное приложение, большой выбор моделей. Единственное - хотелось бы больше фильтров для подбора.',
      product: 'Puma RS-X'
    },
    {
      id: 4,
      name: 'Екатерина В.',
      avatar: '/avatars/avatar4.png',
      rating: 5,
      date: '18.07.2023',
      text: 'Заказывала второй раз, всё как всегда на высоте. Оригинальная продукция, быстрая доставка и отличное обслуживание.',
      product: 'New Balance 574'
    },
    {
      id: 5,
      name: 'Игорь П.',
      avatar: '/avatars/avatar5.png',
      rating: 5,
      date: '30.08.2023',
      text: 'Приятно удивлен скоростью доставки и качеством обслуживания. Кроссовки соответствуют описанию, очень доволен покупкой.',
      product: 'Reebok Classic'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); 
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length, isHovered]);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }, [reviews.length]);

  const goToReview = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      scale: 0.85,
      y: direction > 0 ? 100 : -100,
      opacity: 0,
      rotateY: direction > 0 ? 10 : -10,
      filter: 'blur(10px)',
    }),
    center: {
      scale: 1,
      y: 0,
      opacity: 1,
      rotateY: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5
      }
    },
    exit: (direction: number) => ({
      scale: 0.85,
      y: direction < 0 ? 100 : -100,
      opacity: 0,
      rotateY: direction < 0 ? 10 : -10,
      filter: 'blur(10px)',
    })
  };

  const navButtonStyles = {
    base: "w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md backdrop-blur-sm",
    prev: "bg-white/90 text-gray-800 hover:bg-white hover:scale-110",
    next: "bg-gradient-to-r from-[#48B2E7] to-[#0076B1] text-white hover:scale-110"
  };

  // Генерация пузырей для фона с фиксированными размерами и позициями
  const bubbles = useMemo(() => [
    {
      id: 0,
      size: 150,
      x: 60,
      y: 65,
      speedX: 10,
      speedY: 8,
      delay: 0.2,
      isBlue: true
    },
    {
      id: 1,
      size: 180,
      x: 5,
      y: 10,
      speedX: 15,
      speedY: 12,
      delay: 0.5,
      isBlue: false
    },
    {
      id: 2,
      size: 110,
      x: 90,
      y: 75,
      speedX: 8,
      speedY: 10,
      delay: 0.8,
      isBlue: true
    },
    {
      id: 3,
      size: 200,
      x: 55,
      y: 70,
      speedX: 12,
      speedY: 9,
      delay: 1.2,
      isBlue: false
    },
    {
      id: 4,
      size: 190,
      x: 90,
      y: 20,
      speedX: 10,
      speedY: 8,
      delay: 0.7,
      isBlue: true
    },
    {
      id: 5,
      size: 185,
      x: 80,
      y: 80,
      speedX: 9,
      speedY: 11,
      delay: 1.5,
      isBlue: false
    },
    {
      id: 6,
      size: 160,
      x: 75,
      y: 35,
      speedX: 11,
      speedY: 9,
      delay: 0.9,
      isBlue: true
    },
    {
      id: 7,
      size: 290,
      x: 55,
      y: 30,
      speedX: 13,
      speedY: 7,
      delay: 0.3,
      isBlue: false
    }
  ], []);

  const renderStars = useCallback((rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <motion.svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: i * 0.1, duration: 0.3 }}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </motion.svg>
    ));
  }, []);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-[#f0f9ff] via-white to-[#f0f4f8] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full opacity-10"
            style={{
              width: bubble.size,
              height: bubble.size,
              top: `${bubble.y}%`,
              left: `${bubble.x}%`,
              background: bubble.isBlue 
                ? 'radial-gradient(circle at 30% 30%, rgba(72, 178, 231, 0.8), rgba(72, 178, 231, 0.2))' 
                : 'radial-gradient(circle at 30% 30%, rgba(0, 118, 177, 0.8), rgba(0, 118, 177, 0.2))'
            }}
            animate={{
              x: [0, bubble.speedX, 0],
              y: [0, bubble.speedY, 0],
            }}
            transition={{
              duration: 10,
              delay: bubble.delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-3 inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Что говорят <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48B2E7] to-[#0076B1]">клиенты</span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-[#48B2E7] to-[#0076B1] mx-auto mb-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto text-lg mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Отзывы наших клиентов о качестве обуви, обслуживании и удобстве использования приложения
          </motion.p>
          
          <motion.div
            className="inline-flex items-center bg-white p-3 px-5 rounded-full shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 118, 177, 0.2)" }}
          >
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#48B2E7] to-[#0076B1]">
              {reviews.length}K+
            </span>
            <span className="text-gray-600 ml-1">довольных клиентов</span>
          </motion.div>
        </div>

        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute z-10 left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:translate-x-0">
            <motion.button
              onClick={goToPrevious}
              className={`${navButtonStyles.base} ${navButtonStyles.prev}`}
              whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Предыдущий отзыв"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          </div>
          
          <div className="absolute z-10 right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-0">
            <motion.button
              onClick={goToNext}
              className={`${navButtonStyles.base} ${navButtonStyles.next}`}
              whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(0, 118, 177, 0.3)" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Следующий отзыв"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          <motion.div 
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden min-h-[500px]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 30px 60px rgba(0, 118, 177, 0.2)" }}
          >
            <div className="absolute top-3 right-3 flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-r from-[#48B2E7]/10 to-[#0076B1]/10 rounded-full blur-xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-[#48B2E7]/10 to-[#0076B1]/10 rounded-full blur-xl"></div>
            
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex flex-col items-center md:items-start">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#48B2E7] to-[#0076B1] rounded-full flex items-center justify-center p-1 shadow-lg">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                        <span className="text-2xl md:text-3xl font-bold text-[#0076B1]">
                          {reviews[currentIndex].name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mt-4 mb-1">{reviews[currentIndex].name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{reviews[currentIndex].date}</p>
                    
                    <div className="flex mb-4">
                      {renderStars(reviews[currentIndex].rating)}
                    </div>
                    
                    <div className="bg-gray-100 px-4 py-2 rounded-full text-xs font-medium text-gray-600 mb-4">
                      {reviews[currentIndex].product}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="bg-gray-50 p-6 rounded-xl relative">
                      <svg className="absolute top-4 left-4 w-8 h-8 text-[#48B2E7]/20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      
                      <p className="text-gray-700 mb-4 pl-10 italic leading-relaxed text-lg">
                        &ldquo;{reviews[currentIndex].text}&rdquo;
                      </p>
                      
                      <div className="flex items-center">
                        <motion.div 
                          className="w-8 h-1 bg-[#48B2E7]"
                          initial={{ width: 0 }}
                          animate={{ width: 32 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  aria-label={`Перейти к отзыву ${index + 1}`}
                  className="w-8 h-2 rounded-full transition-all"
                  style={{
                    backgroundColor: currentIndex === index 
                      ? 'transparent' 
                      : '#e2e8f0'
                  }}
                >
                  {currentIndex === index && (
                    <motion.div
                      className="w-full h-full rounded-full bg-gradient-to-r from-[#48B2E7] to-[#0076B1]"
                      layoutId="activeReviewIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 