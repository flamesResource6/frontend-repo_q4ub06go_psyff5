import { Wrench, Factory, Fuel, ShieldCheck } from 'lucide-react';

const SERVICES = [
  {
    icon: Wrench,
    title: 'Marine & Ship Spare Parts',
    desc: 'Genuine and OEM spares for main and auxiliary engines, pumps, valves, deck machinery, and electrical systems.',
  },
  {
    icon: Factory,
    title: 'Steel Fabrication & Machining',
    desc: 'Custom fabrication, precision machining, and on-site repairs tailored for marine and industrial projects of any scale.',
  },
  {
    icon: Fuel,
    title: 'Oil & Gas Supplies',
    desc: 'Pipes, fittings, instrumentation, safety gear, and MRO supplies sourced from certified manufacturers.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Compliance',
    desc: 'Inspection, certification, and supply of lifesaving, fire-fighting, and compliance equipment for vessels and facilities.',
  },
];

function ServiceCard({ Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="inline-flex items-center justify-center p-3 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-100">
        <Icon size={22} />
      </div>
      <h3 className="mt-4 font-semibold text-slate-900 text-lg">{title}</h3>
      <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">What We Do</h2>
          <p className="mt-4 text-slate-600">
            Comprehensive procurement and engineering support for marine, industrial, and energy sectors across the GCC.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <ServiceCard key={title} Icon={Icon} title={title} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
