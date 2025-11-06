import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/6a5b4aQtq8qHRfTT/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Smarter Waste Management for Cleaner Cities
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-4 text-lg text-slate-600">
                Real-time monitoring, optimized pickup routes, and community rewards — all in one platform.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-8 flex gap-3">
                <a href="#schedule" className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-medium shadow-lg shadow-emerald-600/20 hover:bg-emerald-700">Book a Pickup</a>
                <a href="#features" className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50">Learn More</a>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <img src="https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=1600&auto=format&fit=crop" alt="Smart bins" className="rounded-xl object-cover h-72 w-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
