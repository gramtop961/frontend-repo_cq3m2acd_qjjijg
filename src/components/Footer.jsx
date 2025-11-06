export default function Footer() {
  return (
    <footer id="contact" className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-6 items-center text-sm text-slate-600">
          <div>
            <div className="font-semibold text-slate-900">SmartWaste</div>
            <p className="mt-1">Smarter waste management for cleaner, greener cities.</p>
          </div>
          <div className="text-center">
            <p>Contact: support@smartwaste.city</p>
            <p className="mt-1">Hotline: +1 (555) 012-3456</p>
          </div>
          <div className="md:text-right">
            <p>&copy; {new Date().getFullYear()} SmartWaste. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
