import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="bg-[#050B1C] text-white antialiased">
      {/* Hero with Spline */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Showcase */}
      <Showcase />

      {/* Pricing */}
      <Pricing />

      {/* Final Call-to-Action */}
      <section id="cta" className="relative overflow-hidden py-24 bg-gradient-to-b from-[#07122F] via-[#08173C] to-[#0C2257]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,217,124,0.18),transparent_55%)]" />
        <div className="relative container mx-auto px-6 text-center">
          <h3 className="font-serif text-4xl sm:text-5xl mb-6 tracking-tight">Your Reign Begins Here.</h3>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-gradient-to-r from-[#F5D97C] to-[#D9A73A] text-[#121212] font-semibold shadow-[0_0_36px_rgba(245,217,124,0.35)] hover:shadow-[0_0_54px_rgba(245,217,124,0.5)] transition-shadow"
          >
            Start Building with Sovra
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#040817] border-t border-white/10">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#F5D97C] to-[#D9A73A]" />
            <div className="font-serif text-xl">SOVRA</div>
          </div>
          <nav className="flex flex-wrap items-center gap-6 text-white/80 text-sm font-sans">
            <a href="#about" className="hover:text-[#F5D97C] transition">About</a>
            <a href="#terms" className="hover:text-[#F5D97C] transition">Terms</a>
            <a href="#privacy" className="hover:text-[#F5D97C] transition">Privacy</a>
            <a href="#contact" className="hover:text-[#F5D97C] transition">Contact</a>
          </nav>
          <div className="text-white/60 text-sm font-sans text-center md:text-right">
            © 2025 Sovra. Built with Intelligence and Elegance.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
