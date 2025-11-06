import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ScheduleForm from './components/ScheduleForm';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ScheduleForm />
      </main>
    </div>
  );
}

export default App;
