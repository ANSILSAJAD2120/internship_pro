import React from "react";

export default function Hero() {
  return (
    <section className="hero container flex flex-col md:flex-row items-center md:items-stretch gap-8 py-16">
      <div className="hero-left md:w-1/2">
        <h1 className="hero-title text-4xl md:text-5xl font-extrabold">Build beautiful products faster</h1>
        <p className="hero-sub mt-4 text-lg text-slate-500">A modern UI system with delightful interactions, glassmorphism and performance-first components.</p>

        <div className="hero-actions mt-6 flex gap-4">
          <button className="btn-primary">Start free trial</button>
          <button className="btn btn-ghost px-4 py-2 rounded-xl border">Learn more</button>
        </div>
      </div>

      <div className="hero-right md:w-1/2 flex justify-end">
        <div className="glass-illustration w-80 h-56 rounded-2xl glass flex items-center justify-center">
          <div className="blob w-48 h-36 rounded-xl bg-gradient-to-r from-primary-500 to-cyan-400 shadow-2xl transform -rotate-6" />
        </div>
      </div>
    </section>
  );
}
