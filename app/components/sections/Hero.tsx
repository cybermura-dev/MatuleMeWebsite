'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const imageY = useTransform(scrollY, [0, 500], [0, 150]);
  const badgesY = useTransform(scrollY, [0, 500], [0, 70]);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setMousePosition({ x, y });
    }
  };

  const initialBadgeStyle = {
    opacity: 0,
    transform: 'translateX(-20px) translateY(0px)'
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-gradient-to-r from-[#48B2E7] to-[#0076B1] min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="lg:col-span-6"
            style={{ y: textY }}
          >
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
                className="group relative overflow-hidden bg-white text-primary px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 font-semibold flex items-center border border-blue-100"
              >
                <span className="relative z-10">Скачать из RuStore</span>
                <svg className="ml-2 w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-[#48B2E7]/20 to-[#0076B1]/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </Link>
              <Link 
                href="#features"
                className="group relative overflow-hidden bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:text-primary transition-colors font-semibold"
              >
                <span className="relative z-10 group-hover:text-primary transition-colors">Узнать больше</span>
                <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-6 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ y: imageY }}
          >
            <div className="relative perspective-1000">
              <motion.div 
                className="relative w-[450px] h-[450px] overflow-hidden rounded-3xl shadow-2xl"
                style={isMounted ? {
                  rotateX: mousePosition.y * -20,
                  rotateY: mousePosition.x * 20,
                  transformStyle: "preserve-3d"
                } : {}}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent z-10 rounded-3xl" />
                <div className="absolute inset-0 z-20 overflow-hidden rounded-3xl">
                  <div 
                    className="w-full h-full bg-gray-200 flex items-center justify-center transform-style-3d"
                    style={{
                      boxShadow: `
                        0 5px 15px rgba(0, 0, 0, 0.1),
                        inset 0 0 100px rgba(0, 0, 0, 0.05)
                      `
                    }}
                  >
                    <div 
                      className="transform-style-3d w-full h-full relative"
                      style={isMounted ? {
                        transform: `translateZ(40px) rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg)`
                      } : {}}
                    >
                      <Image 
                        src="/images/product1.jpg" 
                        alt="Спортивная обувь" 
                        fill
                        className="rounded-3xl object-cover"
                        sizes="(max-width: 768px) 100vw, 450px"
                        priority
                      />
                    </div>
                  </div>
                </div>
                
                <div 
                  className="absolute inset-0 z-30 rounded-3xl overflow-hidden"
                  style={{
                    background: `linear-gradient(
                      145deg,
                      rgba(255, 255, 255, 0.3) 0%,
                      rgba(255, 255, 255, 0) 50%,
                      rgba(255, 255, 255, 0) 100%
                    )`
                  }}
                ></div>
              </motion.div>
              
              {isMounted && (
                <>
                  <motion.div
                    className="absolute top-5 right-5 bg-white rounded-full shadow-lg px-4 py-2 flex items-center z-20"
                    initial={initialBadgeStyle}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    style={{ y: badgesY }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                  >
                    <svg className="w-5 h-5 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Премиум качество</span>
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-2 left-10 bg-white rounded-full shadow-lg px-4 py-2 z-20"
                    initial={initialBadgeStyle}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    style={{ y: badgesY }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                  >
                    <span className="font-medium">Быстрая доставка</span>
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-1/2 -left-10 bg-white rounded-full shadow-lg px-4 py-2 z-20"
                    initial={initialBadgeStyle}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    style={{ y: badgesY }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                  >
                    <span className="font-medium">Гарантия качества</span>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute -bottom-5 -left-5 -right-5 w-[calc(100%+40px)]"
        style={{ y: useTransform(scrollY, [0, 500], [0, 50]) }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 110" fill="#f6f8fa">
          <path d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,96C672,96,768,64,864,58.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>
      
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
} 