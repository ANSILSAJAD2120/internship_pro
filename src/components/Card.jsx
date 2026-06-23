import React from "react";

export default function Card({ title, desc }) {
  return (
    <article className="card glass p-6 rounded-2xl shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-2" tabIndex={0} role="article" aria-label={title}>
      <div className="card-body">
        <h3 className="card-title text-lg font-semibold">{title}</h3>
        <p className="card-desc text-slate-500 mt-2">{desc}</p>
      </div>
      <div className="card-footer mt-4 flex justify-end">
        <button className="text-primary-500 font-medium">Explore</button>
      </div>
    </article>
  );
}
