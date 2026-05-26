import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Cpu } from 'lucide-react';

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
      {/* Main App Page Content with snappy, professional fade-in */}
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0.95 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};
