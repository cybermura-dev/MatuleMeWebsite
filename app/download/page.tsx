'use client';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import WhyUs from '../components/sections/WhyUs';

export default function Download() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150
      }
    }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible"
      variants={containerVariants}
    >
      <Header />
      <main className="pt-24 pb-20 overflow-hidden">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={childVariants}>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Matule Me в RuStore</h2>
                <p className="text-gray-600 mb-8">
                  Скачайте наше приложение из RuStore и получите доступ к тысячам моделей спортивной обуви. Наслаждайтесь интуитивным интерфейсом и быстрыми покупками на российской платформе.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://apps.rustore.ru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all hover:shadow-xl"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 2C3.11929 2 2 3.11929 2 4.5V19.5C2 20.8807 3.11929 22 4.5 22H19.5C20.8807 22 22 20.8807 22 19.5V4.5C22 3.11929 20.8807 2 19.5 2H4.5ZM11.4402 11.6163H7.67988V10.1163H11.4403L11.4402 6.35596H12.9402V10.1163L16.7006 10.1162V11.6163L12.9402 11.6164L12.9402 15.3767H11.4403L11.4402 11.6163Z"/>
                    </svg>
                    <span>
                      <span className="block text-xs">Доступно в</span>
                      <span className="block font-semibold">RuStore</span>
                    </span>
                  </motion.a>
                  <motion.a
                    href="#qr-code" 
                    className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all hover:shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Сканировать QR-код
                  </motion.a>
                </div>
              </motion.div>
              <motion.div variants={childVariants} className="flex justify-center">
                <motion.div 
                  className="relative w-[280px] h-[560px]"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="absolute inset-0 bg-[#0076B1] rounded-[40px] shadow-xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-[40px]"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-black rounded-b-[40px]"></div>
                    <div className="p-2 pt-8 pb-8 h-full w-full">
                      <div className="bg-white h-full w-full rounded-3xl flex items-center justify-center">
                        <div className="text-center p-6">
                          <motion.div 
                            className="w-24 h-24 bg-gradient-to-r from-[#48B2E7] to-[#0076B1] rounded-2xl mx-auto mb-4 flex items-center justify-center"
                            animate={{ rotate: [0, 10, 0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                          >
                            <span className="text-2xl font-bold text-white">MM</span>
                          </motion.div>
                          <h3 className="text-xl font-bold mb-2 text-[#0076B1]">Matule Me</h3>
                          <p className="text-gray-600 mb-4">Версия 1.0.0</p>
                          <motion.div 
                            className="bg-[#0076B1] text-white py-2 px-4 rounded-full inline-block"
                            whileHover={{ scale: 1.1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
                            whileTap={{ scale: 0.9 }}
                          >
                            Установить
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <WhyUs />

        <section id="qr-code" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div variants={childVariants}>
              <h2 className="text-3xl font-bold mb-16 text-gray-900">
                QR-код для скачивания
              </h2>
            </motion.div>
            
            <div className="max-w-md mx-auto">
              <motion.div variants={childVariants}>
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-lg"
                  whileHover={{ 
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    y: -10
                  }}
                >
                  <h3 className="text-xl font-bold mb-4">RuStore</h3>
                  <motion.div 
                    className="relative bg-gradient-to-br from-[#48B2E7] to-[#0076B1] w-56 h-56 mx-auto mb-4 p-3 rounded-xl"
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="bg-white w-full h-full flex items-center justify-center">
                      <div className="w-3/4 h-3/4 bg-gray-200 relative">
                        <div className="absolute top-4 left-4 w-10 h-10 bg-[#0076B1] rounded-lg"></div>
                        <div className="absolute top-4 right-4 w-10 h-10 bg-[#0076B1] rounded-lg"></div>
                        <div className="absolute bottom-4 left-4 w-10 h-10 bg-[#0076B1] rounded-lg"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-[#0076B1] w-10 h-10 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <p className="text-gray-600">
                    Отсканируйте QR-код для скачивания приложения из RuStore
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
} 