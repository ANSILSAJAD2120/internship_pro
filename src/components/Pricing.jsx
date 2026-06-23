import React from "react";

const plans = [
  { name: 'Starter', price: '$0', features: ['1 project','Basic support','Community'] },
  { name: 'Pro', price: '$15/mo', features: ['Unlimited projects','Priority support','Analytics'] },
  { name: 'Enterprise', price: 'Contact', features: ['SLA','Dedicated support','Custom integrations'] },
]

export default function Pricing(){
  return (
    <section id="pricing" className="container py-12">
      <h2 className="text-2xl font-semibold">Pricing plans</h2>
      <p className="text-slate-500 mt-2">Transparent pricing for teams of all sizes.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p, idx)=> (
          <div key={idx} className={`p-6 rounded-2xl border ${idx===1? 'shadow-lg border-transparent bg-gradient-to-br from-white to-white/80': 'bg-white/5'} `}>
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <div className="mt-3 text-2xl font-bold">{p.price}</div>
            <ul className="mt-4 space-y-2 text-slate-500">
              {p.features.map((f,i)=>(<li key={i}>• {f}</li>))}
            </ul>
            <div className="mt-6">
              <button className="btn-primary">Choose {p.name}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
