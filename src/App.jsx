import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />

        {/* About */}
        <section id="about" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Zyphex Tech</h2>
              <p className="mt-4 text-slate-600">
                We are a remote-first technology partner helping ambitious companies deliver faster and smarter. Our
                cross-functional teams combine product thinking, engineering excellence, and cloud-native practices to
                ship outcomes — not just output.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="text-sm font-semibold text-slate-900">Mission</div>
                  <p className="text-sm text-slate-600 mt-1">Empower organizations worldwide to build resilient, scalable, and secure digital systems.</p>
                </div>
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="text-sm font-semibold text-slate-900">Values</div>
                  <p className="text-sm text-slate-600 mt-1">Ownership, craft, transparency, and relentless focus on customer value.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-blue-50 to-slate-50 p-6">
              <ul className="space-y-3 text-sm text-slate-700">
                <li>• Senior team across product, design, and engineering</li>
                <li>• Follow-the-sun delivery with global talent</li>
                <li>• Security-first processes and enterprise compliance</li>
                <li>• Proven playbooks for modernization and migration</li>
              </ul>
            </div>
          </div>
        </section>

        <Services />
        <Testimonials />

        {/* Case Studies / Insights */}
        <section id="cases" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Case Studies & Insights</h2>
              <p className="mt-3 text-slate-600">A glimpse into our recent wins and perspectives.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Zero-downtime cloud migration for a fintech platform',
                  tag: 'Cloud Migration',
                },
                {
                  title: 'From monolith to microservices: API-led transformation',
                  tag: 'API Development',
                },
                {
                  title: 'Data pipeline that cut reporting time from days to minutes',
                  tag: 'Analytics',
                },
              ].map((post) => (
                <article key={post.title} className="group rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition bg-white">
                  <div className="text-xs font-medium text-blue-700">{post.tag}</div>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-blue-700">{post.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">Read how we approached, executed, and measured impact.</p>
                  <div className="mt-4 text-sm font-medium text-blue-700">Read more →</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden bg-slate-900 py-20 text-white">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-600/10 via-transparent to-blue-400/10" />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s talk</h2>
              <p className="mt-3 text-slate-300">Tell us about your goals and we’ll follow up within one business day.</p>
              <div className="mt-6 space-y-2 text-sm text-slate-300">
                <div>📍 Remote • Global</div>
                <div>✉️ hello@zyphex.tech</div>
                <div>
                  🔗 <a className="underline decoration-blue-400/40 underline-offset-4 hover:decoration-blue-400" href="#">LinkedIn</a>
                  <span className="mx-2">•</span>
                  <a className="underline decoration-blue-400/40 underline-offset-4 hover:decoration-blue-400" href="#">Twitter</a>
                </div>
              </div>
            </div>

            <form className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-slate-200">First name</label>
                  <input className="mt-1 w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-slate-300 focus:border-blue-400 focus:outline-none" placeholder="Jane" />
                </div>
                <div>
                  <label className="text-sm text-slate-200">Last name</label>
                  <input className="mt-1 w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-slate-300 focus:border-blue-400 focus:outline-none" placeholder="Doe" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-slate-200">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-slate-300 focus:border-blue-400 focus:outline-none" placeholder="you@company.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-slate-200">How can we help?</label>
                  <textarea rows={4} className="mt-1 w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-slate-300 focus:border-blue-400 focus:outline-none" placeholder="Tell us about your project..." />
                </div>
              </div>
              <button type="button" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors">
                Send message
              </button>
              <p className="mt-3 text-xs text-slate-300">By sending, you agree to our privacy policy.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-white py-8 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Zyphex Tech. All rights reserved.</div>
          <div className="text-sm text-slate-600">Built for speed, security, and scale.</div>
        </div>
      </footer>
    </div>
  );
}
