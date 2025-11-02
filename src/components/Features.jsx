import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    emoji: '🧠',
    title: 'AI-Powered Creation',
    desc: 'Instantly generate websites from a single prompt.',
  },
  {
    emoji: '⚡',
    title: 'Real-Time Editing',
    desc: 'Modify your site visually with natural language.',
  },
  {
    emoji: '💎',
    title: 'One-Click Deploy',
    desc: 'Publish instantly with your own domain.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative bg-[#070F25] text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(245,217,124,0.12),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(217,167,58,0.10),transparent_45%)]" />
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl">The Sovereign Features</h2>
          <p className="text-white/70 mt-2 max-w-2xl mx-auto font-sans">Everything you need to command your digital presence with grace and power.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl p-[2px] bg-gradient-to-br from-[#F5D97C] via-[#D9B04E] to-transparent"
            >
              <div className="h-full rounded-2xl bg-[#0A1536] p-6 transition relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(circle_at_30%_10%,rgba(245,217,124,0.18),transparent_40%)]" />
                <div className="text-3xl mb-4">{f.emoji}</div>
                <h3 className="text-xl font-semibold mb-2 font-serif text-[#F5D97C]">{f.title}</h3>
                <p className="text-white/80 font-sans">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
