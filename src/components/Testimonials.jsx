import React from "react";

const quotes = [
  { name: "Aisha K.", title: "CEO — Nova", text: "This UI transformed our product — crisp, fast and delightful." },
  { name: "Marco P.", title: "CTO — Flux", text: "Performance and accessibility at the same time. Highly recommended." },
  { name: "Li Wei", title: "Product — Orbit", text: "Design system saved us weeks of polish work." },
];

export default function Testimonials(){
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold">Trusted by teams worldwide</h2>
      <p className="text-slate-500 mt-2">Real feedback from product teams building with Tudo.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {quotes.map((q, i)=> (
          <blockquote key={i} className="p-5 bg-slate-50 rounded-xl shadow-sm">
            <p className="text-slate-700">“{q.text}”</p>
            <footer className="mt-3 text-sm text-slate-500">— {q.name}, <span className="text-slate-400">{q.title}</span></footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
