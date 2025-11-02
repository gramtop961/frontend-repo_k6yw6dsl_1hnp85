import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-[#091634] via-[#0B1F4A] to-[#0E2A62] text-white">
      {/* Gold particle overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(closest-side, #F5D97C, transparent)' }} />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(closest-side, #E8C058, transparent)' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D97C] via-[#F1C556] to-[#D9A73A]">Rule the Web</span> with AI Power 👑
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-xl font-sans">
            Sovra empowers you to create, design, and launch your digital empire — all with a single command.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-[#F5D97C] to-[#D9A73A] text-[#121212] font-semibold shadow-[0_0_30px_rgba(245,217,124,0.35)] hover:shadow-[0_0_45px_rgba(245,217,124,0.55)] transition-shadow"
            >
              Try Sovra Free
            </a>
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-[#E8C058]/70 text-white/90 hover:text-white hover:border-[#F5D97C] hover:shadow-[0_0_25px_rgba(245,217,124,0.25)] transition"
            >
              Join Waitlist
            </a>
          </div>
        </motion.div>

        {/* Visual / Spline scene inside a luxury frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px]"
        >
          <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-[#F5D97C] via-[#D9B04E] to-transparent">
            <div className="relative h-full w-full rounded-2xl bg-[#0A1536]/60 backdrop-blur-sm overflow-hidden">
              {/* Subtle top glow */}
              <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-[#F5D97C]/30 to-transparent" />
              <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>

          {/* Elegant laptop mockup overlay */}
          <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-[78%] max-w-[720px]">
            <div className="mx-auto rounded-t-2xl border border-[#F5D97C]/50 bg-gradient-to-b from-[#0E1C46] to-[#0A1536] p-2 shadow-2xl">
              <div className="rounded-lg overflow-hidden border border-white/10">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-[#142863] via-[#0B1F4A] to-[#0E2A62] relative">
                  <div className="absolute inset-0 grid grid-cols-12 gap-2 p-3 opacity-90">
                    <div className="col-span-8 bg-white/5 rounded-md" />
                    <div className="col-span-4 bg-white/5 rounded-md" />
                    <div className="col-span-6 bg-white/5 rounded-md" />
                    <div className="col-span-6 bg-white/5 rounded-md" />
                    <div className="col-span-12 bg-white/5 rounded-md" />
                  </div>
                  <div className="absolute top-3 left-3 text-xs text-white/70 bg-black/30 px-2 py-1 rounded-full">Building with AI…</div>
                </div>
              </div>
            </div>
            <div className="mx-auto h-4 w-3/5 rounded-b-3xl bg-[#0A1536] border-x border-b border-[#F5D97C]/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
