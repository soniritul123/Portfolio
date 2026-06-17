import { skills } from '../data/portfolio'
import PlatformLogo from './PlatformLogo'

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-sm">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-surface-border">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-ios to-accent-flutter transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface-raised/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-ios">
            Skills
          </p>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Technologies I work with
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass rounded-2xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <PlatformLogo platform="ios" size="lg" />
              <h3 className="font-display text-xl font-semibold text-accent-ios">
                iOS Development
              </h3>
            </div>
            <div className="space-y-4">
              {skills.ios.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <PlatformLogo platform="flutter" size="lg" />
              <h3 className="font-display text-xl font-semibold text-accent-flutter">
                Flutter Development
              </h3>
            </div>
            <div className="space-y-4">
              {skills.flutter.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500">
            Tools & Workflow
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((tool) => (
              <span
                key={tool}
                className="glass rounded-full px-4 py-2 text-sm text-gray-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
