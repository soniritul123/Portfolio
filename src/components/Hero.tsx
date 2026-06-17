import { personalInfo, experience } from '../data/portfolio'
import PlatformLogo from './PlatformLogo'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent-ios/10 blur-3xl" />
        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-accent-flutter/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-glow/5 blur-3xl" />
      </div>

      <div className="section-padding relative mx-auto flex max-w-6xl flex-col items-center text-center">
        <h1
          className="font-display text-4xl font-bold leading-tight tracking-tight opacity-0 animate-fade-up sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          Hi, I'm{' '}
          <span className="text-gradient">{personalInfo.name}</span>
        </h1>

        <p
          className="mt-4 font-display text-xl text-gray-300 opacity-0 animate-fade-up sm:text-2xl md:text-3xl"
          style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
        >
          {personalInfo.title}
        </p>

        <p
          className="mt-6 max-w-2xl text-lg text-gray-400 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          {personalInfo.tagline}
        </p>

        <div
          className="mt-8 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
        >
          <div className="glass flex items-center gap-3 rounded-2xl px-5 py-3">
            <PlatformLogo platform="ios" size="lg" />
            <div className="text-left">
              <p className="text-xs text-gray-500">iOS Development</p>
              <p className="font-semibold text-accent-ios">{experience.ios}</p>
            </div>
          </div>
          <div className="glass flex items-center gap-3 rounded-2xl px-5 py-3">
            <PlatformLogo platform="flutter" size="lg" />
            <div className="text-left">
              <p className="text-xs text-gray-500">Flutter Development</p>
              <p className="font-semibold text-accent-flutter">{experience.flutter}</p>
            </div>
          </div>
        </div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-accent-ios to-accent-flutter px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-ios/25 transition-transform hover:scale-105"
          >
            Start a Project
          </a>
          <a
            href="#projects"
            className="glass rounded-full px-8 py-3.5 text-sm font-semibold text-gray-200 transition-colors hover:border-gray-600 hover:text-white"
          >
            View My Work
          </a>
        </div>

        <div className="mt-20 animate-float opacity-30">
          <svg
            className="mx-auto h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
