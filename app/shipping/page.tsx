'use client';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';

export default function Shipping() {
  const shippingInfo = [
    {
      title: "Стандартная доставка",
      content: "Срок доставки: 3-7 рабочих дней. Стоимость: 300 руб. Для заказов на сумму от 5000 руб. доставка бесплатна.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      title: "Экспресс-доставка",
      content: "Срок доставки: 1-2 рабочих дня. Стоимость: 600 руб. Доступна только в крупных городах.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Пункты выдачи заказов",
      content: "Срок доставки: 3-5 рабочих дней. Стоимость: 200 руб. Для заказов на сумму от 3000 руб. доставка бесплатна.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Международная доставка",
      content: "Срок доставки: 7-14 рабочих дней. Стоимость рассчитывается индивидуально в зависимости от страны доставки.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const returnInfo = [
    {
      title: "Возврат в течение 14 дней",
      content: "Вы можете вернуть товар в течение 14 дней с момента получения, если он вам не подошел или не понравился, при условии сохранения товарного вида, ярлыков и бирок."
    },
    {
      title: "Возврат бракованного товара",
      content: "Если вы обнаружили дефект, вы можете вернуть товар в течение гарантийного срока. Гарантийный срок на обувь составляет 30 дней с момента покупки."
    },
    {
      title: "Процесс возврата",
      content: "Для инициирования возврата свяжитесь с нашей службой поддержки. Мы предоставим вам инструкции о том, как и куда отправить товар. После получения и проверки товара мы произведем возмещение."
    },
    {
      title: "Возмещение",
      content: "Возмещение производится тем же способом, которым была произведена оплата. Срок зачисления средств зависит от политики вашего банка и обычно составляет от 3 до 14 банковских дней."
    }
  ];

  // Анимационные варианты для начальной загрузки страницы
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
        <section className="py-12 bg-gradient-to-b from-[#f8fafc] to-white">
          <div className="container mx-auto px-4">
            <motion.div variants={childVariants} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Доставка и возврат</h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#48B2E7] to-[#0076B1] mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Информация о способах доставки и условиях возврата товаров
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div>
                <motion.h2 
                  variants={childVariants} 
                  className="text-3xl font-bold mb-8 text-center"
                >
                  Способы доставки
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {shippingInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={childVariants}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    >
                      <div className="flex items-center mb-4">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-r from-[#48B2E7] to-[#0076B1] rounded-full flex items-center justify-center text-white mr-4"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          {item.icon}
                        </motion.div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.content}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  variants={childVariants}
                  className="mt-12 bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-4">Дополнительная информация о доставке</h3>
                  <ul className="list-disc pl-5 space-y-3 text-gray-600">
                    <li>После оформления заказа вы получите подтверждение по электронной почте с номером заказа и предполагаемой датой доставки.</li>
                    <li>Если вы не получили заказ в установленный срок, пожалуйста, свяжитесь с нашей службой поддержки.</li>
                    <li>Доставка осуществляется в рабочие дни с 9:00 до 18:00.</li>
                    <li>При получении заказа, пожалуйста, проверьте целостность упаковки и соответствие полученного товара заказанному.</li>
                  </ul>
                </motion.div>
              </div>

              <div className="mt-20">
                <motion.h2 
                  variants={childVariants}
                  className="text-3xl font-bold mb-8 text-center"
                >
                  Условия возврата
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {returnInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={childVariants}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    >
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  variants={childVariants}
                  className="mt-12 bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-4">Что нельзя вернуть</h3>
                  <ul className="list-disc pl-5 space-y-3 text-gray-600">
                    <li>Товары, бывшие в употреблении и имеющие следы носки.</li>
                    <li>Товары без оригинальной упаковки, ярлыков и бирок.</li>
                    <li>Товары, приобретенные на распродаже со скидкой более 50% (если это не брак).</li>
                    <li>Индивидуальные заказы, изготовленные по специальным требованиям покупателя.</li>
                  </ul>
                </motion.div>
              </div>

              <motion.div 
                variants={childVariants}
                className="mt-16 bg-gradient-to-r from-[#48B2E7]/10 to-[#0076B1]/10 p-8 rounded-xl text-center"
                whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
                <p className="text-gray-600 mb-6">
                  Если у вас остались вопросы по доставке или возврату товаров, пожалуйста, свяжитесь с нашей службой поддержки клиентов.
                </p>
                <motion.a
                  href="mailto:support@matulee.com"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#48B2E7] to-[#0076B1] text-white rounded-full font-medium shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Написать в поддержку
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
} 