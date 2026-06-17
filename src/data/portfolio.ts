export const personalInfo = {
  name: 'Ritul Soni',
  title: 'iOS & Flutter Developer',
  tagline: 'I craft polished, performant mobile apps that users love.',
  email: 'ritulsoni2000@gmail.com',
  phone: '9510577844',
  location: 'Available for remote work worldwide',
  linkedin: 'https://www.linkedin.com/in/ritul-soni-r271018',
}

export const experience = {
  ios: '1.5 years',
  flutter: '1 year',
  total: '2.5+ years in mobile development',
}

export const about = `I'm a mobile developer specializing in native iOS and cross-platform Flutter development. With 1.5 years building iOS apps in Swift and SwiftUI, and 1 year delivering Flutter solutions, I bring a unique blend of platform expertise and cross-platform efficiency.

I help startups, agencies, and businesses turn ideas into App Store-ready products — from MVPs to feature-rich production apps. I care deeply about clean architecture, smooth UX, and shipping on time.`

export const skills = {
  ios: [
    { name: 'Swift', level: 90 },
    { name: 'SwiftUI', level: 88 },
    { name: 'UIKit', level: 85 },
    { name: 'Core Data', level: 80 },
    { name: 'Combine', level: 78 },
    { name: 'Xcode & Instruments', level: 85 },
  ],
  flutter: [
    { name: 'Dart', level: 88 },
    { name: 'Flutter', level: 85 },
    { name: 'State Management (Bloc/Riverpod)', level: 82 },
    { name: 'Firebase', level: 80 },
    { name: 'REST APIs', level: 85 },
    { name: 'Platform Channels', level: 75 },
  ],
  tools: [
    'Git',
    'GitHub',
    'Figma',
    'Jira',
    'Postman',
    'Firebase',
    'App Store Connect',
    'Google Play Console',
    'Xcode',
    'Android Studio',
    'VS Code',
    'Agile',
  ],
}

export const services = [
  {
    title: 'iOS App Development',
    description:
      'Native iOS apps built with Swift and SwiftUI — from concept to App Store submission.',
    platform: 'ios' as const,
    highlights: ['Custom UI/UX', 'App Store deployment', 'Performance optimization'],
  },
  {
    title: 'Flutter Development',
    description:
      'Cross-platform apps for iOS and Android from a single codebase — faster time to market.',
    platform: 'flutter' as const,
    highlights: ['iOS & Android', 'Firebase integration', 'Custom widgets'],
  },
  {
    title: 'App Maintenance & Updates',
    description:
      'Keep your app running smoothly with bug fixes, OS updates, and new feature rollouts.',
    icon: '🔧',
    highlights: ['Bug fixes', 'SDK updates', 'Feature additions'],
  },
  {
    title: 'UI/UX Implementation',
    description:
      'Pixel-perfect implementation of designs with attention to animations and micro-interactions.',
    icon: '✨',
    highlights: ['Figma to code', 'Responsive layouts', 'Smooth animations'],
  },
]

export const projects = [
  {
    title: 'HRMS System',
    platform: 'iOS',
    description:
      'Human resource management app with employee records, attendance tracking, leave management, and payroll overview.',
    tech: ['Swift', 'SwiftUI', 'Core Data', 'REST API'],
    color: 'from-blue-500/20 to-blue-600/5',
    accent: 'text-accent-ios',
  },
  {
    title: 'E-Commerce Mobile App',
    platform: 'Flutter',
    description:
      'Cross-platform shopping app with product catalog, cart, Stripe payments, and push notifications.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Stripe'],
    color: 'from-cyan-500/20 to-cyan-600/5',
    accent: 'text-accent-flutter',
  },
  {
    title: 'Inventory Management System',
    platform: 'iOS',
    description:
      'Stock and warehouse management app with real-time inventory tracking, low-stock alerts, and order fulfillment.',
    tech: ['Swift', 'SwiftUI', 'Core Data', 'Firebase'],
    color: 'from-indigo-500/20 to-indigo-600/5',
    accent: 'text-accent-glow',
  },
  {
    title: 'Book an Event Software',
    platform: 'Flutter',
    description:
      'Event booking platform with venue selection, date scheduling, ticket management, and payment integration.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Stripe'],
    color: 'from-purple-500/20 to-purple-600/5',
    accent: 'text-purple-400',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
