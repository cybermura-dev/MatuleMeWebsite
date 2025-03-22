'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDate: Date;
  title?: string;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ 
  targetDate, 
  title = "До конца акции осталось:", 
  className = '' 
}: CountdownTimerProps) {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [targetDate]);
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isActive, setIsActive] = useState<boolean>(true);
  
  useEffect(() => {
    if (!isActive) return;
  
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && 
          newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        setIsActive(false);
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [timeLeft, isActive, calculateTimeLeft]);
  
  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div 
        className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#0076B1] to-[#48B2E7] text-white rounded-lg flex items-center justify-center text-xl md:text-2xl font-bold mb-1 relative overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {value < 10 ? `0${value}` : value}
        </motion.span>
        
        <div className="absolute h-px w-full bg-white/20 top-1/2 transform -translate-y-1/2"></div>
      </motion.div>
      <motion.span 
        className="text-[10px] md:text-xs font-medium text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {label}
      </motion.span>
    </div>
  );
  
  return (
    <div className={`${className}`}>
      <motion.h3 
        className="text-base md:text-lg font-medium text-gray-800 mb-3 md:mb-4 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h3>
      
      <div className="flex justify-center space-x-2 md:space-x-5">
        <TimeBlock value={timeLeft.days} label="Дней" />
        <TimeBlock value={timeLeft.hours} label="Часов" />
        <TimeBlock value={timeLeft.minutes} label="Минут" />
        <TimeBlock value={timeLeft.seconds} label="Секунд" />
      </div>
      
      {!isActive && (
        <motion.div 
          className="mt-4 md:mt-6 text-center text-sm md:text-base text-red-500 font-medium"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          Акция завершилась! 
        </motion.div>
      )}
    </div>
  );
} 