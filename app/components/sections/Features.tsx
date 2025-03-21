'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const features = [
    {
      title: 'Широкий выбор',
      description: 'Более 1000 моделей спортивной обуви от лучших мировых брендов для любых видов спорта и активного отдыха.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      title: 'Быстрая доставка',
      description: 'Доставляем заказы в любую точку России. Экспресс-доставка в крупных городах, курьером или в пункты выдачи.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      title: 'Удобная примерка',
      description: 'Примерьте обувь перед покупкой. Если размер не подходит, мы бесплатно заменим на нужный или вернем деньги.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: 'Поддержка 24/7',
      description: 'Наша служба поддержки клиентов работает круглосуточно. Ответим на любые вопросы и поможем с выбором.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  const tabVariants = {
    inactive: { opacity: 0.7, scale: 0.9 },
    active: { opacity: 1, scale: 1 }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Наши преимущества
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Почему тысячи покупателей выбирают Matule Me для покупки спортивной обуви
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ref={ref}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setActiveTab(i)}
            >
              <div className="mb-4 rounded-full w-14 h-14 flex items-center justify-center bg-gradient-to-r from-[#48B2E7] to-[#0076B1] text-white">
                {feature.icon}
              </div>
              <motion.div
                variants={tabVariants}
                animate={activeTab === i ? "active" : "inactive"}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{features[activeTab].title}</h3>
              <p className="text-lg text-gray-600 mb-6">{features[activeTab].description}</p>
              <div className="flex gap-2">
                {features.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`w-3 h-3 rounded-full ${activeTab === i ? 'bg-[#0076B1]' : 'bg-gray-300'}`}
                    aria-label={`Switch to ${features[i].title}`}
                  />
                ))}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="p-8 rounded-3xl bg-gradient-to-r from-[#48B2E7]/10 to-[#0076B1]/10 w-full h-64 flex items-center justify-center">
                <div className="text-8xl text-[#0076B1]/50">
                  {features[activeTab].icon}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 