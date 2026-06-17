import { services } from '../data/portfolio'
import PlatformLogo from './PlatformLogo'

export default function Services() {
  return (
    <section id="services" className="section-padding mx-auto max-w-6xl">
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-glow">
          Services
        </p>
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          What I can do for you
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Whether you need a native iOS app, a cross-platform Flutter solution, or ongoing
          support — I've got you covered.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="glass group rounded-2xl p-8 transition-all duration-300 hover:border-accent-glow/30 hover:shadow-lg hover:shadow-accent-glow/5"
          >
            {'platform' in service && service.platform ? (
              <PlatformLogo platform={service.platform} size="lg" />
            ) : (
              <span className="text-4xl">{'icon' in service ? service.icon : ''}</span>
            )}
            <h3 className="mt-4 font-display text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-400">{service.description}</p>
            <ul className="mt-4 space-y-2">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-accent-flutter">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
