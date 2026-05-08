"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  {
    id: "deltas",
    num: "01",
    name: "Deltas",
    title: "Deltas win.",
    content: "Your mission is to own the holistic actions we need to take to help our partners win; including, but not limited to: identifying the true problem limiting our partner's mission, decomposing that problem into its component workflows, aligning stakeholders from the CIO to the nurse, solving backwards from a user's workflow, building the technical software and/or AI solution, and ultimately moving Western institutions forward. Deltas are part product manager, part data scientist, part operational commander.",
  },
  {
    id: "echos",
    num: "02",
    name: "Echos",
    title: "Echos win.",
    content: "Your mission is to own the holistic actions we need to take to help our partners win; including, but not limited to: identifying the true problem limiting our partner's mission, decomposing that problem into its component workflows, aligning stakeholders from the CIO to the nurse, solving backwards from a user's workflow, building the technical software and/or AI solution, and ultimately moving Western institutions forward. Echos are facilitators, complementing acute technicality with steady leadership.",
  },
  {
    id: "devs",
    num: "03",
    name: "Devs",
    title: "Devs win.",
    content: "Your mission is to own the holistic actions we need to take to help our partners win; including, but not limited to: identifying the true problem limiting our partner's mission, decomposing that problem into its component workflows, aligning stakeholders from the CIO to the nurse, solving backwards from a user's workflow, building the technical software and/or AI solution, and ultimately moving Western institutions forward. Devs build the technical foundation of our platform.",
  }
];

export default function RoleTypes() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section bg-[#ffffff] pt-24 pb-32">
      <div className="container max-w-7xl">
        
        {/* Intro text */}
        <div className="mb-24 max-w-4xl ml-auto">
          <p className="text-3xl md:text-4xl text-gray-900 leading-tight font-body">
            Vinkura is built around three unique roles: Echos, Deltas, and Devs. While each role is distinct, they are intentionally designed to overlap, enabling teams to pursue outcomes from complementary — and often times contradictory perspectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          
          {/* Left Vertical Tabs */}
          <div className="md:col-span-4 flex flex-col">
            {roles.map((role, idx) => (
              <button
                key={role.id}
                onClick={() => setActiveTab(idx)}
                className={`text-left border-b border-gray-300 py-6 flex justify-between items-center group relative transition-colors ${
                  activeTab === idx ? "border-black" : "hover:border-gray-500"
                }`}
              >
                <span className={`text-2xl transition-colors ${
                  activeTab === idx ? "text-black" : "text-gray-500 group-hover:text-black"
                }`}>
                  {role.name} <sup className="text-xs ml-1 font-mono">{role.num}</sup>
                </span>
                {activeTab === idx && (
                  <motion.div 
                    layoutId="active-dot"
                    className="w-2 h-2 rounded-full bg-black absolute right-0 top-1/2 -translate-y-1/2" 
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="md:col-span-8 pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col"
              >
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
                  {roles[activeTab].num} — {roles[activeTab].name}
                </span>
                <h3 className="text-3xl font-body mb-8 text-black">
                  {roles[activeTab].title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed font-body max-w-3xl">
                  {roles[activeTab].content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
