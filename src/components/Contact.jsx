import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get in Touch</h2>
            <p className="mt-4 text-slate-300">
              Share your requirements and we’ll respond promptly with options, lead times, and pricing.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3"><Mail size={18} /> <a href="mailto:info@oceanstaruae.com" className="hover:underline">info@oceanstaruae.com</a></div>
              <div className="flex items-center gap-3"><Phone size={18} /> <a href="tel:+9710000000" className="hover:underline">+971 00 000 000</a></div>
              <div className="flex items-center gap-3"><MapPin size={18} /> Dubai, United Arab Emirates</div>
            </div>
          </div>

          <form className="bg-white text-slate-900 rounded-3xl p-6 border border-slate-200 shadow">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">Name</label>
                <input type="text" className="mt-1 w-full rounded-xl border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-600">Company</label>
              <input type="text" className="mt-1 w-full rounded-xl border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Company name" />
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-600">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-xl border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Tell us what you need" />
            </div>
            <button type="button" className="mt-6 w-full inline-flex justify-center rounded-xl bg-blue-600 text-white py-3 font-medium shadow hover:shadow-md">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
