import { Code2, Cloud, Settings, BarChart3, Users, Boxes } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Application Development',
    desc: 'High-performance, secure, and scalable web apps tailored to your business goals using modern stacks.',
  },
  {
    icon: Boxes,
    title: 'API Development',
    desc: 'Design-first REST/GraphQL APIs with robust auth, observability, and documentation for seamless integrations.',
  },
  {
    icon: Cloud,
    title: 'Cloud Migration',
    desc: 'Assess, plan, and migrate workloads to AWS, Azure, or GCP with zero-downtime strategies and cost optimization.',
  },
  {
    icon: Settings,
    title: 'DevOps & Automation',
    desc: 'CI/CD pipelines, infrastructure as code, and monitoring to accelerate delivery and reliability.',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    desc: 'Turn data into insight with pipelines, warehousing, and dashboards that drive smarter decisions.',
  },
  {
    icon: Users,
    title: 'Staff Augmentation',
    desc: 'Extend your team with vetted engineers, designers, and PMs — aligned to your timezone and culture.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Services</h2>
          <p className="mt-3 text-slate-600">Everything you need to build, ship, and scale world-class products.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <div className="mt-4 text-sm font-medium text-blue-700 opacity-0 transition group-hover:opacity-100">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
