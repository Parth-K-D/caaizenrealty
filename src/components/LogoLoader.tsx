import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

interface LogoLoaderProps {
  onComplete: () => void;
}

export default function LogoLoader({ onComplete }: LogoLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const duration = 2200; // 2.2 seconds loader
    const intervalTime = 40;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep += 1;
      const nextProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setComplete(true);
          setTimeout(onComplete, 800); // Allow exit transition
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          id="logo-loader-container"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#131512] text-[#F3F4F1] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Subtle slow spinning environment design elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,80,50,0.15),transparent_60%)] pointer-events-none" />
          
          <div className="relative flex flex-col items-center max-w-md px-6 text-center">
            {/* Logo Emblem Icon */}
            <motion.div
              id="loader-emblem"
              className="relative flex items-center justify-center w-28 h-28 mb-8 border border-emerald-950/40 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {/* Outer pulsing ring */}
              <motion.div 
                className="absolute inset-0 border border-emerald-500/20 rounded-full"
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Geometry lines */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-emerald-950/20" />
              <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-emerald-950/20" />
              
              {/* Core Icon: The requested two "A"s (smaller version) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                className="z-10"
              >
                <Logo variant="small" className="w-12 h-9" />
              </motion.div>
            </motion.div>

            {/* Typography brand logo (Full customized version) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
              className="mb-8"
            >
              <Logo variant="full" className="w-72 h-24" />
            </motion.div>

            {/* Premium Loader Bar */}
            <div className="relative w-48 h-[2px] bg-stone-900 rounded-full overflow-hidden mb-3">
              <motion.div
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-emerald-600 to-teal-400"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Dynamic Status Counter */}
            <motion.span
              id="loader-percentage"
              className="font-mono text-[10px] tracking-widest text-stone-500 uppercase"
            >
              {Math.round(progress)}% • Aligning Ecosystem
            </motion.span>
          </div>

          {/* Luxury frame border accents */}
          <div className="absolute top-8 left-8 bottom-8 right-8 border border-neutral-900/20 pointer-events-none hidden md:block">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-emerald-900/40" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-emerald-900/40" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-emerald-900/40" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-emerald-900/40" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
