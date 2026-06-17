import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-surface-raised/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-flutter">
            Portfolio
          </p>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Featured projects
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400">
            A selection of mobile apps I've built. Replace these with your real projects —
            include screenshots and links when ready.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-surface-border bg-gradient-to-br ${project.color} p-8 transition-all duration-300 hover:border-gray-600`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`rounded-full border border-current/20 px-3 py-1 text-xs font-medium ${project.accent}`}
                >
                  {project.platform}
                </span>
                <span className="text-gray-600 transition-colors group-hover:text-gray-400">
                  ↗
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-black/30 px-2.5 py-1 text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
