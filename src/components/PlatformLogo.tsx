type Platform = 'ios' | 'flutter'

const logos: Record<Platform, { src: string; alt: string }> = {
  ios: { src: '/logos/ios.svg', alt: 'iOS logo' },
  flutter: { src: '/logos/flutter.svg', alt: 'Flutter logo' },
}

interface PlatformLogoProps {
  platform: Platform
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
}

export default function PlatformLogo({ platform, size = 'md', className = '' }: PlatformLogoProps) {
  const { src, alt } = logos[platform]
  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeClasses[size]} object-contain ${className}`}
    />
  )
}
