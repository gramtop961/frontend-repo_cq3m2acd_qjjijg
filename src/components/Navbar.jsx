import { useState } from 'react';
import { Menu, Recycle, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 text-emerald-700">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100">
              <Recycle className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight">SmartWaste</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-emerald-600 transition-colors">Features</a>
            <a href="#stats" className="hover:text-emerald-600 transition-colors">Impact</a>
            <a href="#schedule" className="hover:text-emerald-600 transition-colors">Schedule</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#schedule" className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors">Book Pickup</a>
          </div>

          <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-black/10" onClick={() => setOpen(o => !o)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm text-slate-700">
              <a href="#features" className="px-3 py-2 rounded-lg hover:bg-emerald-50" onClick={() => setOpen(false)}>Features</a>
              <a href="#stats" className="px-3 py-2 rounded-lg hover:bg-emerald-50" onClick={() => setOpen(false)}>Impact</a>
              <a href="#schedule" className="px-3 py-2 rounded-lg hover:bg-emerald-50" onClick={() => setOpen(false)}>Schedule</a>
              <a href="#contact" className="px-3 py-2 rounded-lg hover:bg-emerald-50" onClick={() => setOpen(false)}>Contact</a>
              <a href="#schedule" className="mt-2 px-3 py-2 rounded-lg bg-emerald-600 text-white text-center" onClick={() => setOpen(false)}>Book Pickup</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
