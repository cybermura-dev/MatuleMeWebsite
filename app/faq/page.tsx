'use client';

import { useState, useRef } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const categories = [
    {
      title: "Покупка и оплата",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      questions: [
        {
          question: "Как оформить заказ?",
          answer: "Для оформления заказа выберите нужный товар, укажите размер и добавьте его в корзину. Перейдите в корзину, проверьте заказ и нажмите 'Оформить заказ'. Заполните необходимые данные для доставки и выберите способ оплаты. После подтверждения заказа вы получите уведомление на указанный email."
        },
        {
          question: "Какие способы оплаты доступны?",
          answer: "Мы принимаем оплату банковскими картами (Visa, MasterCard, МИР), через систему быстрых платежей, электронными кошельками (ЮMoney, QIWI) и наличными при получении (для определенных способов доставки)."
        },
        {
          question: "Могу ли я изменить или отменить заказ?",
          answer: "Вы можете изменить или отменить заказ до момента его отправки. Для этого свяжитесь с нашей службой поддержки клиентов как можно скорее, указав номер заказа."
        },
        {
          question: "Можно ли получить чек на покупку?",
          answer: "Да, электронный чек будет отправлен на вашу электронную почту после оформления заказа. При доставке курьером вы также получите бумажный чек."
        }
      ]
    },
    {
      title: "Доставка",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      questions: [
        {
          question: "Сколько времени занимает доставка?",
          answer: "Сроки доставки зависят от выбранного способа: стандартная доставка – 3-7 рабочих дней, экспресс-доставка – 1-2 рабочих дня, доставка в пункты выдачи – 3-5 рабочих дней, международная доставка – 7-14 рабочих дней."
        },
        {
          question: "В какие регионы осуществляется доставка?",
          answer: "Мы осуществляем доставку по всей России. Курьерская доставка доступна в большинстве крупных городов, в остальные населенные пункты доставка осуществляется Почтой России или через пункты выдачи."
        },
        {
          question: "Как отследить мой заказ?",
          answer: "После отправки заказа вы получите уведомление с трек-номером и ссылкой для отслеживания. Также вы можете проверить статус заказа в личном кабинете на нашем сайте."
        },
        {
          question: "Осуществляется ли доставка в выходные дни?",
          answer: "Курьерская доставка осуществляется в рабочие дни с 9:00 до 18:00. В некоторых городах возможна доставка в выходные дни, уточняйте при оформлении заказа."
        }
      ]
    },
    {
      title: "Возврат и обмен",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
        </svg>
      ),
      questions: [
        {
          question: "Какие условия возврата товара?",
          answer: "Вы можете вернуть товар в течение 14 дней с момента получения, если сохранены товарный вид, ярлыки и бирки. Товар не должен иметь следов использования. Бракованный товар можно вернуть в течение гарантийного срока (30 дней)."
        },
        {
          question: "Как оформить возврат?",
          answer: "Для оформления возврата свяжитесь с нашей службой поддержки. Вам предоставят инструкции и форму возврата. После получения и проверки товара мы произведем возмещение тем же способом, которым была произведена оплата."
        },
        {
          question: "Могу ли я обменять товар на другой размер?",
          answer: "Да, вы можете обменять товар на другой размер при наличии его в ассортименте. Для этого свяжитесь с нашей службой поддержки и следуйте инструкциям по возврату и оформлению нового заказа."
        },
        {
          question: "Кто оплачивает доставку при возврате?",
          answer: "Если товар возвращается из-за брака или ошибки с нашей стороны, мы компенсируем расходы на доставку. Если возврат осуществляется по инициативе покупателя (не подошел размер, не понравился и т.д.), расходы на доставку несет покупатель."
        }
      ]
    },
    {
      title: "Товары и размеры",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      questions: [
        {
          question: "Как выбрать правильный размер обуви?",
          answer: "На странице каждого товара есть таблица размеров с соответствием российских и международных систем. Рекомендуем измерить длину стопы в сантиметрах и сверить с таблицей. Для более точного подбора учитывайте особенности модели и бренда."
        },
        {
          question: "Все товары оригинальные?",
          answer: "Да, мы продаем только оригинальную продукцию от официальных представителей брендов. Каждый товар имеет сертификат подлинности и гарантийный талон."
        },
        {
          question: "Есть ли гарантия на обувь?",
          answer: "Да, гарантийный срок на обувь составляет 30 дней с момента покупки. Гарантия распространяется на производственные дефекты и не распространяется на повреждения, возникшие в результате неправильной эксплуатации."
        },
        {
          question: "Могу ли я заказать модель, которой нет в наличии?",
          answer: "Вы можете подписаться на уведомление о поступлении товара. Также вы можете связаться с нами для уточнения возможности индивидуального заказа интересующей вас модели."
        }
      ]
    },
    {
      title: "Приложение и аккаунт",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      questions: [
        {
          question: "Как установить приложение Matule Me?",
          answer: "Наше приложение доступно для скачивания из RuStore для устройств на базе Android. Перейдите в магазин приложений, найдите 'Matule Me' и нажмите 'Установить'."
        },
        {
          question: "Какие преимущества дает регистрация аккаунта?",
          answer: "Регистрация аккаунта позволяет отслеживать статус заказов, сохранять избранные товары, получать персональные рекомендации, участвовать в программе лояльности и быстрее оформлять заказы."
        },
        {
          question: "Забыл пароль от аккаунта. Что делать?",
          answer: "На странице входа нажмите 'Забыли пароль?', введите email, указанный при регистрации, и следуйте инструкциям в письме, которое будет отправлено на вашу почту."
        },
        {
          question: "Как удалить аккаунт?",
          answer: "Для удаления аккаунта перейдите в раздел 'Настройки' личного кабинета, выберите 'Управление аккаунтом' и нажмите 'Удалить аккаунт'. Обратите внимание, что эта операция необратима."
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    questions: category.questions.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const itemVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    })
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const decorElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 15 + Math.random() * 20
  }));

  return (
    <motion.div 
      initial="hidden" 
      animate="visible"
      variants={containerVariants}
      className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] to-white"
    >
      <Header />

      {decorElements.map((elem) => (
        <motion.div
          key={elem.id}
          className="absolute hidden md:block opacity-30"
          style={{ 
            left: `${elem.x}%`, 
            top: `${elem.y}%`, 
            background: 'linear-gradient(120deg, #48B2E7, #0076B1)',
            borderRadius: '50%',
            width: Math.random() * 40 + 20,
            height: Math.random() * 40 + 20,
            filter: 'blur(20px)'
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: elem.duration,
            delay: elem.delay,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      ))}

      <main className="pt-24 pb-20 overflow-hidden relative z-10">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div variants={childVariants} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Часто задаваемые вопросы</h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#48B2E7] to-[#0076B1] mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ответы на самые популярные вопросы о нашем сервисе, процессе заказа и возврате товаров
              </p>

              <motion.div 
                className="max-w-2xl mx-auto mt-8 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    ref={searchInputRef}
                    type="text"
                    className="block w-full pl-12 pr-10 py-3 border border-gray-300 rounded-full bg-white/70 backdrop-blur-sm shadow-md focus:outline-none focus:ring-2 focus:ring-[#48B2E7] focus:border-transparent"
                    placeholder="Поиск по вопросам..."
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  {searchQuery && (
                    <button
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                      onClick={clearSearch}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
                
                {searchQuery && (
                  <div className="absolute top-full left-0 right-0 mt-2 text-left">
                    <div className="bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-lg">
                      <p className="text-gray-500 text-sm px-2 py-1">
                        {filteredCategories.reduce((acc, cat) => acc + cat.questions.length, 0)} результатов поиска
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {filteredCategories.map((category, categoryIndex) => (
                <motion.div 
                  key={categoryIndex} 
                  variants={categoryVariants}
                  custom={categoryIndex}
                  className="mb-12"
                >
                  <motion.div
                    className="flex items-center mb-6 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="p-2 mr-4 rounded-full bg-gradient-to-r from-[#48B2E7]/20 to-[#0076B1]/20 text-[#0076B1]">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
                  </motion.div>
                  
                  <div className="space-y-4">
                    {category.questions.map((item, index) => {
                      const globalIndex = categoryIndex * 10 + index;
                      return (
                        <motion.div 
                          key={globalIndex}
                          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
                          whileHover={{ y: -5 }}
                          variants={childVariants}
                          transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        >
                          <motion.button
                            className="flex justify-between items-center w-full p-5 text-left"
                            onClick={() => toggleItem(globalIndex)}
                            aria-expanded={openItem === globalIndex}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="text-lg font-medium text-gray-800">{item.question}</span>
                            <motion.div
                              className={`text-white p-2 rounded-full ${openItem === globalIndex ? 'bg-[#0076B1]' : 'bg-gray-400'}`}
                              animate={{ rotate: openItem === globalIndex ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </motion.div>
                          </motion.button>
                          
                          <AnimatePresence>
                            {openItem === globalIndex && (
                              <motion.div
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={itemVariants}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="p-5 pt-0 border-t border-gray-100 bg-gradient-to-r from-white to-blue-50/30">
                                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}

              <motion.div 
                variants={childVariants}
                className="mt-16 bg-gradient-to-r from-[#48B2E7]/10 to-[#0076B1]/10 p-8 rounded-2xl text-center shadow-xl"
                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-gradient-to-r from-[#48B2E7] to-[#0076B1] rounded-full mx-auto mb-6 flex items-center justify-center text-white shadow-lg"
                >
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Не нашли ответ на свой вопрос?</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Свяжитесь с нашей службой поддержки клиентов, и мы с радостью поможем вам решить любой вопрос в кратчайшие сроки.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
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
                  <motion.a
                    href="tel:+78001234567"
                    className="inline-flex items-center px-6 py-3 bg-white border border-[#0076B1] text-[#0076B1] rounded-full font-medium shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Позвонить нам
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
} 