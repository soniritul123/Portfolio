import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-surface-border px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500">
          © {year} {personalInfo.name}. Built with React & Tailwind.
        </p>
        <p className="text-sm text-gray-500">{personalInfo.title}</p>
      </div>
    </footer>
  )
}
