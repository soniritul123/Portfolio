import { personalInfo } from '../data/portfolio'

const projectLabels: Record<string, string> = {
  ios: 'iOS App Development',
  flutter: 'Flutter App Development',
  both: 'Both / Not sure yet',
  maintenance: 'App Maintenance',
  other: 'Other',
}

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const project = formData.get('project') as string
    const message = formData.get('message') as string

    const text = [
      `Hi ${personalInfo.name}!`,
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Project Type: ${projectLabels[project] ?? project}`,
      '',
      message,
    ].join('\n')

    const whatsappUrl = `https://wa.me/91${personalInfo.phone}?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="section-padding mx-auto max-w-6xl">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-ios">
            Contact
          </p>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Let's build something great
          </h2>
          <p className="mt-4 text-gray-400">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll
            get back to you within 24 hours.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass flex items-center gap-4 rounded-xl p-4 transition-colors hover:border-accent-ios/30"
            >
              <span className="text-2xl">✉️</span>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-gray-200">{personalInfo.email}</p>
              </div>
            </a>
            <a
              href={`tel:+91${personalInfo.phone}`}
              className="glass flex items-center gap-4 rounded-xl p-4 transition-colors hover:border-accent-ios/30"
            >
              <span className="text-2xl">📞</span>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-gray-200">+91 {personalInfo.phone}</p>
              </div>
            </a>
            <div className="glass flex items-center gap-4 rounded-xl p-4">
              <span className="text-2xl">🌍</span>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="text-gray-200">{personalInfo.location}</p>
              </div>
            </div>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-4 rounded-xl p-4 transition-colors hover:border-accent-ios/30"
            >
              <span className="text-2xl">💼</span>
              <div>
                <p className="text-xs text-gray-500">LinkedIn</p>
                <p className="text-gray-200">ritul-soni-r271018</p>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-gray-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-gray-100 outline-none transition-colors focus:border-accent-ios"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-gray-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-gray-100 outline-none transition-colors focus:border-accent-ios"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="project" className="mb-1.5 block text-sm text-gray-400">
                Project Type
              </label>
              <select
                id="project"
                name="project"
                className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-gray-100 outline-none transition-colors focus:border-accent-ios"
              >
                <option value="ios">iOS App Development</option>
                <option value="flutter">Flutter App Development</option>
                <option value="both">Both / Not sure yet</option>
                <option value="maintenance">App Maintenance</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-surface-border bg-surface px-4 py-3 text-gray-100 outline-none transition-colors focus:border-accent-ios"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-accent-ios to-accent-flutter py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
