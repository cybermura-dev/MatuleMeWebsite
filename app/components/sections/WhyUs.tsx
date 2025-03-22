'use client';

import { motion } from 'framer-motion';

export default function WhyUs() {
  const reasons = [
    'Премиум качество',
    'Отличная цена',
    'Лучший выбор',
    'Поддержка 24/7',
    'Доставка по всей России',
    'Гарантия возврата',
    'Удобная примерка',
    'Персональные скидки',
    'Новые модели каждую неделю',
    'Эксклюзивные модели',
    'Бонусная программа',
    'Быстрая обработка заказов'
  ];

  const stats = [
    { number: '1000+', label: 'моделей обуви' },
    { number: '50+', label: 'ведущих брендов' },
    { number: '24/7', label: 'поддержка клиентов' },
    { number: '99%', label: 'довольных клиентов' },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#f6f8fa] to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Почему выбирают нас
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Matule Me стал выбором тысяч клиентов благодаря нашему непревзойденному сервису и широкому ассортименту
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <motion.h3
              className="text-2xl font-semibold mb-6 text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Причины выбрать Matule Me
            </motion.h3>

            <div className="relative p-6 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-[400px] overflow-hidden relative">
                <div className="ticker-content absolute w-full animate-ticker">
                  {[...reasons, ...reasons].map((reason, index) => (
                    <div 
                      key={index} 
                      className="py-4 px-6 border-b border-gray-100 flex items-center"
                    >
                      <span className="w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-r from-[#48B2E7] to-[#0076B1] text-white mr-4">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-lg">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
              <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.h3
              className="text-2xl font-semibold mb-6 text-gray-800"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Наша статистика
            </motion.h3>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
                >
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#48B2E7] to-[#0076B1] text-transparent bg-clip-text">
                    {stat.number}
                  </div>
                  <div className="text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h4 className="text-xl font-semibold mb-6">Уровень удовлетворенности</h4>
              <div className="space-y-4">
                {[
                  { label: 'Качество товаров', value: 98 },
                  { label: 'Скорость доставки', value: 92 },
                  { label: 'Работа службы поддержки', value: 97 },
                  { label: 'Удобство приложения', value: 95 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{item.label}</span>
                      <span className="font-medium">{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        className="h-2.5 rounded-full bg-gradient-to-r from-[#48B2E7] to-[#0076B1]"
                        style={{ width: `${item.value}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#f6f8fa] to-transparent"></div>
      
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        .animate-ticker {
          animation: ticker 30s linear infinite;
          will-change: transform;
        }
        
        .ticker-content {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </section>
  );
} 