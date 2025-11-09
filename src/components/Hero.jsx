import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      <div className="absolute inset-0">
        {/* Replace with a relevant Spline scene URL if available */}
        <Spline scene="https://prod.spline.design/9N7bSP7n3bP8n7I3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Premium Marine & Industrial Solutions in the UAE
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              From ship spare parts to steel fabrication, we deliver reliable products and services across marine, oil & gas, and industrial sectors.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 text-white shadow hover:shadow-md transition">
                Explore Services <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-full border border-slate-300 text-slate-700 bg-white hover:bg-slate-50">
                Get a Quote
              </a>
            </div>
          </div>

          <div className="md:pl-8">
            <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 shadow-sm">
              <dl className="grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm text-slate-500">Years of Experience</dt>
                  <dd className="text-3xl font-semibold text-slate-900">15+</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Happy Clients</dt>
                  <dd className="text-3xl font-semibold text-slate-900">1,000+</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Products Delivered</dt>
                  <dd className="text-3xl font-semibold text-slate-900">25k+</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Industries Served</dt>
                  <dd className="text-3xl font-semibold text-slate-900">10+</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
