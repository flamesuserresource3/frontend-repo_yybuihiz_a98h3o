import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Zyphex Tech helped us migrate to the cloud and accelerate our release cycle. Our uptime and deployment speed have never been better.',
    name: 'Priya S.',
    title: 'CTO, Fintech Scaleup',
  },
  {
    quote:
      'Their remote team integrated seamlessly with our engineering org. Excellent communication, predictable delivery, and top-notch quality.',
    name: 'Marcus L.',
    title: 'VP Engineering, HealthTech',
  },
  {
    quote:
      'From discovery to launch, they were a strategic partner. The analytics platform they built unlocked new revenue streams for us.',
    name: 'Ana G.',
    title: 'Head of Data, Retail',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What clients say</h2>
          <p className="mt-3 text-slate-600">Real outcomes from remote-first partnerships.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-slate-900">
                {t.name}
                <span className="ml-2 text-slate-500 font-normal">— {t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
