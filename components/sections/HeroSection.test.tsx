import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import HeroSection from './HeroSection'

describe('HeroSection', () => {
  it('renders the hero title and accent', () => {
    render(<HeroSection isDark={false} />)
    
    // In our setup.ts, t returns the key itself
    expect(screen.getByText('HeroTaglineMain')).toBeInTheDocument()
    expect(screen.getByText('HeroTaglineAccent')).toBeInTheDocument()
  })

  it('renders the hero description', () => {
    render(<HeroSection isDark={false} />)
    expect(screen.getByText('HeroDescription')).toBeInTheDocument()
  })

  it('renders store buttons', () => {
    render(<HeroSection isDark={false} />)
    // StoreButton is a child, we can check for its presence or the platform specific buttons
    // Since StoreButton likely renders an anchor or button with specific text/role
    expect(screen.getAllByRole('link')).toHaveLength(2)
  })

  it('renders the phone mockup', () => {
    render(<HeroSection isDark={false} />)
    expect(screen.getByTestId('phone-mockup')).toBeInTheDocument()
  })
})
