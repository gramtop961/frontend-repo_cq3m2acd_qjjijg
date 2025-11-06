import { motion } from 'framer-motion';

const stats = [
  { label: 'Waste Diverted', value: '2.4k tons' },
  { label: 'Fuel Saved', value: '18% less' },
  { label: 'Pickup Time', value: '35% faster' },
  { label: 'Citizen Satisfaction', value: '4.8/5' }
];

export default function ImpactStats() {
  return (
    <section id="stats" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }} className="text-center">
                <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                <div className="mt-1 text-sm text-slate-600">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
