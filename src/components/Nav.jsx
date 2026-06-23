import React from "react";

export default function Nav() {
  return (
    <header className="nav-wrapper">
      <div className="container nav-inner">
        <div className="brand flex items-center gap-3">
          <div className="logo" aria-hidden>
            <span className="logo-mark" />
          </div>
          <span className="brand-name text-lg">Tudo</span>
        </div>

        <nav className="nav">
          <a className="nav-link px-3 py-2 text-sm" href="#features">Features</a>
          <a className="nav-link px-3 py-2 text-sm" href="#pricing">Pricing</a>
          <a className="nav-link px-3 py-2 text-sm" href="#docs">Docs</a>
        </nav>

        <div className="nav-cta">
          <button className="btn-primary">Get started</button>
        </div>
      </div>
    </header>
  );
}
