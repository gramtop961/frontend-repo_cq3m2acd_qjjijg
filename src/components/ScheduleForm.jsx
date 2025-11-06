import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Send } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export default function ScheduleForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    async function loadSlots() {
      try {
        const res = await fetch(`${API_BASE}/api/slots`);
        const data = await res.json();
        setSlots(data.slots || []);
      } catch (e) {
        setSlots([]);
      }
    }
    loadSlots();
  }, []);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch(`${API_BASE}/api/pickups`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, address, date, time })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed');
      setStatus({ type: 'success', message: 'Pickup scheduled successfully!' });
      setName('');
      setAddress('');
      setDate('');
      setTime('');
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Something went wrong' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="schedule" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Schedule a Pickup</h2>
            <p className="mt-3 text-slate-600">Tell us where and when — we’ll handle the rest.</p>

            <motion.form onSubmit={submit} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mt-8 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Full name</label>
                <div className="mt-1 relative">
                  <input value={name} onChange={e => setName(e.target.value)} required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Jane Doe" />
                  <span className="pointer-events-none absolute right-3 top-2.5 text-slate-400"><Send className="h-4 w-4" /></span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Address</label>
                <div className="mt-1 relative">
                  <input value={address} onChange={e => setAddress(e.target.value)} required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="123 Green St, Springfield" />
                  <span className="pointer-events-none absolute right-3 top-2.5 text-slate-400"><MapPin className="h-4 w-4" /></span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Date</label>
                  <div className="mt-1 relative">
                    <input type="date" value={date} onChange={e => setDate(e.target.value)} required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                    <span className="pointer-events-none absolute right-3 top-2.5 text-slate-400"><Calendar className="h-4 w-4" /></span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Time</label>
                  <div className="mt-1 relative">
                    <select value={time} onChange={e => setTime(e.target.value)} required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option value="">Select a time</option>
                      {slots.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-2.5 text-slate-400"><Clock className="h-4 w-4" /></span>
                  </div>
                </div>
              </div>
              <button disabled={loading} className="inline-flex items-center justify-center w-full rounded-lg bg-emerald-600 text-white px-4 py-2.5 font-medium hover:bg-emerald-700 disabled:opacity-60">
                {loading ? 'Booking...' : 'Book Pickup'}
              </button>
              {status && (
                <div className={`${status.type === 'success' ? 'text-emerald-700 bg-emerald-50 border-emerald-200' : 'text-red-700 bg-red-50 border-red-200'} border rounded-lg px-3 py-2 text-sm`}>
                  {status.message}
                </div>
              )}
            </motion.form>
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">How it works</h3>
            <ol className="mt-3 space-y-2 text-sm text-slate-600 list-decimal list-inside">
              <li>Pick your time slot and address.</li>
              <li>Our system schedules the nearest vehicle.</li>
              <li>Track the status from your confirmation email.</li>
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
