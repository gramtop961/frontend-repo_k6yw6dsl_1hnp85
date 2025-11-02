import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Free',
    blurb: 'Build 1 site and explore Sovra’s magic.',
    price: '$0',
    accent: false,
  },
  {
    name: 'Creator',
    blurb: 'Unlimited sites and premium designs.',
    price: '$19',
    accent: true,
  },
  {
    name: 'Empire',
    blurb: 'Custom domains, AI templates, and VIP support.',
    price: '$49',
    accent: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-[#070F25] text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_40%,rgba(245,217,124,0.12),transparent_45%)]" />
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl">Choose Your Throne</h2>
          <p className="text-white/70 mt-2 font-sans">Simple plans crafted for creators at every stage of their reign.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-[2px] ${p.accent ? 'bg-gradient-to-b from-[#F5D97C] via-[#D9B04E] to-transparent' : 'bg-gradient-to-b from-[#C6A758] via-[#A98A44] to-transparent opacity-90'}`}
            >
              <div className={`h-full rounded-2xl ${p.accent ? 'bg-[#0A1536]' : 'bg-[#0B1F4A]'} p-6 flex flex-col`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl text-[#F5D97C]">{p.name}</h3>
                  <div className="text-3xl font-bold">{p.price}<span className="text-sm text-white/60">/mo</span></div>
                </div>
                <p className="text-white/80 mt-2 mb-6 font-sans">{p.blurb}</p>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• AI-powered builder</li>
                  <li>• Premium components</li>
                  <li>• Fast global hosting</li>
                  <li>• SSL, analytics, and more</li>
                </ul>
                <a href="#cta" className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2 bg-gradient-to-r from-[#F5D97C] to-[#D9A73A] text-[#121212] font-semibold shadow-[0_0_24px_rgba(245,217,124,0.3)] hover:shadow-[0_0_36px_rgba(245,217,124,0.45)] transition-shadow">
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
