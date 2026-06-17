import { about, experience } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section-padding mx-auto max-w-6xl">
      <div className="mb-12">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-flutter">
          About Me
        </p>
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Building mobile experiences that matter
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-lg leading-relaxed text-gray-400 whitespace-pre-line">{about}</p>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="glass rounded-2xl p-6">
            <p className="text-sm text-gray-500">Total Experience</p>
            <p className="mt-1 font-display text-2xl font-bold text-gradient">
              {experience.total}
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <p className="text-sm text-gray-500">Specialization</p>
            <p className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-accent-ios/15 px-3 py-1 text-sm text-accent-ios">
                Native iOS
              </span>
              <span className="rounded-full bg-accent-flutter/15 px-3 py-1 text-sm text-accent-flutter">
                Flutter
              </span>
              <span className="rounded-full bg-accent-glow/15 px-3 py-1 text-sm text-purple-300">
                Cross-Platform
              </span>
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <p className="text-sm text-gray-500">Work Style</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Remote-friendly
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Clear communication
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> On-time delivery
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
