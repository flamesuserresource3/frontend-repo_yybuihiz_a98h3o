import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/90" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
          Remote-first • Global Delivery • Enterprise Security
        </span>
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Build. Scale. Transform.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Zyphex Tech delivers remote IT services that power digital transformation — from modern web apps
          and APIs to cloud, DevOps, and data analytics.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
          >
            Start Your Project
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors"
          >
            Explore Services
          </a>
        </div>
        <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Remote Delivery', value: '24/7' },
            { label: 'Avg. Engagement', value: '6+ mo' },
            { label: 'Global Clients', value: '20+' },
            { label: 'Satisfaction', value: '99%' },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-lg border border-white/10 bg-white/5 p-3 text-left">
              <div className="text-lg font-semibold text-white">{kpi.value}</div>
              <div className="text-xs text-slate-300">{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
