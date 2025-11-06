import { motion } from 'framer-motion';
import { MapPin, Gauge, Gift, Shield } from 'lucide-react';

const items = [
  {
    icon: MapPin,
    title: 'Optimized Routes',
    desc: 'AI-powered path planning reduces fuel usage and pickup times across the city.'
  },
  {
    icon: Gauge,
    title: 'Smart Bin Sensors',
    desc: 'Monitor fill levels in real-time to prevent overflow and unnecessary trips.'
  },
  {
    icon: Gift,
    title: 'Rewards for Recycling',
    desc: 'Earn points for responsible disposal and redeem them for local perks.'
  },
  {
    icon: Shield,
    title: 'Reliable & Secure',
    desc: 'Built with modern infrastructure, privacy-first analytics, and robust uptime.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Everything you need for a cleaner community</h2>
          <p className="mt-3 text-slate-600">A connected platform that brings residents, fleet managers, and municipalities together.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
