export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Built on Trust, Driven by Quality</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            OceanStar UAE is a procurement and engineering partner trusted by ship owners, yards, and industrial clients. We source, fabricate, and deliver with strict adherence to international standards, ensuring reliability every step of the way.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Global sourcing network across Europe and Asia</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> 24/7 response for urgent vessel requirements</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> ISO-aligned processes and quality checks</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-3xl bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-lg" />
          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-3xl bg-white shadow border border-slate-200 flex items-center justify-center text-slate-700">
            Trusted Partner
          </div>
        </div>
      </div>
    </section>
  );
}
