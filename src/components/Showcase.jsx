import React from 'react';
import { motion } from 'framer-motion';

const PreviewCard = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="min-w-[280px] sm:min-w-[360px] md:min-w-[420px] mr-6 rounded-2xl overflow-hidden border border-[#F5D97C]/30 bg-gradient-to-b from-[#101B44] to-[#0A1536] shadow-[0_0_40px_rgba(245,217,124,0.12)]"
  >
    <div className="h-40 sm:h-52 bg-gradient-to-br from-[#F5D97C]/20 via-transparent to-transparent relative">
      <div className="absolute inset-0 p-4 grid grid-cols-12 gap-2">
        <div className="col-span-7 bg-white/10 rounded" />
        <div className="col-span-5 bg-white/10 rounded" />
        <div className="col-span-4 bg-white/10 rounded" />
        <div className="col-span-8 bg-white/10 rounded" />
        <div className="col-span-12 bg-white/10 rounded" />
      </div>
    </div>
    <div className="p-4">
      <div className="text-[#F5D97C] font-serif">{title}</div>
      <div className="text-white/70 text-sm font-sans">Elegant, fast, and AI-crafted perfection.</div>
    </div>
  </motion.div>
);

const Showcase = () => {
  return (
    <section className="relative bg-[#07122F] text-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl">Build Sites Worthy of a Crown</h2>
          <p className="text-white/70 mt-2 font-sans">Preview the caliber of experiences Sovra shapes for you.</p>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <div className="flex items-stretch pb-2">
            <PreviewCard title="Luxury Brand" />
            <PreviewCard title="Creative Studio" />
            <PreviewCard title="Modern SaaS" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
