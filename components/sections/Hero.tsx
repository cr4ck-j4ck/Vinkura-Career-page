"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

function ScrambleText({ text, trigger, delay = 0 }: { text: string, trigger: boolean, delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    if (!trigger) {
      setDisplayText(text);
      return;
    }
    
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    
    timeout = setTimeout(() => {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayText((prev) => {
          return text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (char === " ") return " ";
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("");
        });
        
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 2.5; // speed
      }, 30);
    }, delay * 1000);
    
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, trigger, delay]);

  return <>{displayText}</>;
}

export default function Hero() {
  const [phase, setPhase] = useState<"phase1" | "phase2">("phase1");
  const PREMIUM_EASE = [0.6, 0.05, 0.01, 0.9] as [number, number, number, number];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const runCycle = () => {
      setPhase("phase1");
      timeout = setTimeout(() => {
        setPhase("phase2");
      }, 4500); // Wait 4.5s before transitioning to phase 2
      
      timeout = setTimeout(() => {
        runCycle();
      }, 9000); // Full cycle duration
    };
    runCycle();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="w-full flex flex-col justify-center items-start bg-[#ffffff]" style={{ minHeight: '85vh', paddingTop: '8vh' }}>
      <div className="container relative z-10 w-full h-full flex flex-col justify-center">
        
        <div className="font-hero text-[clamp(3.5rem,7vw,7rem)] leading-[1.05] font-semibold tracking-tight text-black flex flex-col">
          
          {/* Line 1 */}
          <div className="flex items-center overflow-visible h-[1.2em]">
            <AnimatePresence>
              {phase === "phase2" && (
                <motion.div
                  initial={{ width: 0, opacity: 0, x: -50 }}
                  animate={{ width: "auto", opacity: 1, x: 0 }}
                  exit={{ width: 0, opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, ease: PREMIUM_EASE }}
                  className="whitespace-nowrap pr-[0.25em]"
                >
                  NEED
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div layout transition={{ duration: 0.8, ease: PREMIUM_EASE }}>
              <ScrambleText text="THE WORLD'S" trigger={phase === "phase1"} delay={0} />
            </motion.div>
          </div>

          {/* Line 2 */}
          <div className="relative h-[1.2em] flex items-center overflow-visible">
            <AnimatePresence>
              {phase === "phase1" && (
                <motion.div
                  key="hardest"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 150 }}
                  transition={{ duration: 0.8, ease: PREMIUM_EASE }}
                  className="absolute left-0 text-gray-400"
                >
                  <ScrambleText text="HARDEST" trigger={phase === "phase1"} delay={0.3} />
                </motion.div>
              )}
              {phase === "phase2" && (
                <motion.div
                  key="smartest"
                  initial={{ opacity: 0, x: -150 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -150 }}
                  transition={{ duration: 0.8, ease: PREMIUM_EASE }}
                  className="absolute left-0"
                >
                  SMARTEST
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Line 3 */}
          <div className="relative h-[1.2em] flex items-center overflow-visible">
            <AnimatePresence>
              {phase === "phase1" && (
                <motion.div
                  key="problems"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 150 }}
                  transition={{ duration: 0.8, ease: PREMIUM_EASE }}
                  className="absolute left-0 text-gray-400"
                >
                  <ScrambleText text="PROBLEMS" trigger={phase === "phase1"} delay={0.6} />
                </motion.div>
              )}
              {phase === "phase2" && (
                <motion.div
                  key="people"
                  initial={{ opacity: 0, x: -150 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -150 }}
                  transition={{ duration: 0.8, ease: PREMIUM_EASE }}
                  className="absolute left-0 flex items-center"
                >
                  PEOPLE. <span className="inline-block ml-4 text-[0.8em]">→</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Supporting text below hero */}
        <div className="mt-16 max-w-3xl">
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-body">
            A moment of reckoning has arrived. Tech culture has fallen into shallow consumerism, lacking a greater purpose. Too few in Silicon Valley have asked what ought to be built — and why. <span className="italic">We did.</span> We built Vinkura to ensure the future of India, not to tinker at the margins. On the factory floor. In the operating room. Across the battlefield. We build with consequence.
          </p>
        </div>

      </div>
    </section>
  );
}
