'use client';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';

export default function Privacy() {
  const sections = [
    {
      title: "Введение",
      content: "Мы понимаем важность защиты ваших личных данных. Эта Политика конфиденциальности описывает, какую информацию мы собираем, как мы ее используем и под какими условиями мы можем раскрывать её третьим лицам. Используя наш сайт и/или наше приложение, вы соглашаетесь с условиями данной Политики конфиденциальности."
    },
    {
      title: "Какую информацию мы собираем",
      content: "Мы можем собирать личную информацию, которую вы предоставляете нам, например, ваше имя, адрес электронной почты, номер телефона, адрес доставки и информацию о платежах, когда вы регистрируетесь на нашем сайте, совершаете покупку или участвуете в акциях. Мы также собираем информацию о вашем устройстве и IP-адресе для улучшения нашего сервиса и безопасности."
    },
    {
      title: "Как мы используем вашу информацию",
      content: "Мы используем собранную информацию для обработки ваших заказов, предоставления вам доступа к нашим услугам, улучшения нашего сайта и приложения, отправки вам информации о продуктах и акциях (если вы дали на это согласие), для внутреннего анализа и статистики, а также для обеспечения безопасности и предотвращения мошенничества."
    },
    {
      title: "Раскрытие информации третьим лицам",
      content: "Мы не продаем, не обмениваем и не передаем вашу личную информацию третьим лицам без вашего согласия, за исключением случаев, когда это необходимо для предоставления запрошенных вами услуг (например, доставка заказов) или когда это требуется по закону."
    },
    {
      title: "Безопасность",
      content: "Мы принимаем разумные меры для защиты вашей личной информации от несанкционированного доступа, использования или раскрытия. Мы используем соответствующие технические и организационные меры для обеспечения безопасности вашей информации, но не можем гарантировать абсолютную безопасность данных, передаваемых через Интернет."
    },
    {
      title: "Cookies и другие технологии",
      content: "Мы используем файлы cookies и аналогичные технологии для улучшения вашего опыта использования нашего сайта, анализа трафика и персонализации контента. Вы можете настроить ваш браузер для отклонения файлов cookies, но это может привести к ограничению функциональности некоторых разделов нашего сайта."
    },
    {
      title: "Ваши права",
      content: "Вы имеете право запросить доступ к вашей личной информации, которую мы храним, исправить неточные данные, запросить удаление вашей информации или ограничить ее обработку. Вы также можете отозвать свое согласие на получение маркетинговых материалов в любое время."
    },
    {
      title: "Изменения в политике конфиденциальности",
      content: "Мы можем обновлять нашу Политику конфиденциальности время от времени. Мы будем уведомлять вас о любых существенных изменениях, публикуя новую версию на нашем сайте. Мы рекомендуем периодически проверять эту страницу для получения последней информации о нашей Политике конфиденциальности."
    },
    {
      title: "Контакты",
      content: "Если у вас есть вопросы или предложения относительно нашей Политики конфиденциальности, пожалуйста, свяжитесь с нами по адресу электронной почты: support@matulee.com."
    }
  ];

  // Анимационные варианты для начальной загрузки страницы
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Политика конфиденциальности</h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#48B2E7] to-[#0076B1] mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Мы ценим ваше доверие и стремимся обеспечить максимальную защиту ваших персональных данных
              </p>
            </motion.div>

            <motion.div 
              variants={childVariants}
              className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-8">
                <motion.p 
                  variants={childVariants}
                  className="text-gray-600 mb-8"
                >
                  Последнее обновление: 1 июня 2023 г.
                </motion.p>

                {sections.map((section, index) => (
                  <motion.div 
                    key={index}
                    variants={childVariants}
                    className="mb-8"
                    custom={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <h2 className="text-2xl font-bold mb-3 text-gray-800">{section.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{section.content}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
} 