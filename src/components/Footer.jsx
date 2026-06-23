import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer border-t py-6 mt-12">
      <div className="container footer-inner flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-slate-500">© {new Date().getFullYear()} Tudo — Crafted with care.</div>
        <div className="footer-links flex gap-4 mt-3 md:mt-0">
          <a className="text-slate-500 hover:text-slate-700" href="#">Privacy</a>
          <a className="text-slate-500 hover:text-slate-700" href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
