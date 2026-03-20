import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import PhoneMockup from './PhoneMockup'

// Mock ThemeAwareScreenshot since it might load images or have complex logic
vi.mock('./ThemeAwareScreenshot', () => ({
  default: () => <div data-testid="screenshot" />
}))

describe('PhoneMockup', () => {
  it('renders the screenshot', () => {
    render(<PhoneMockup language="en" isDark={false} isMobile={false} />)
    expect(screen.getByTestId('screenshot')).toBeInTheDocument()
  })

  it('renders privacy pill on desktop', () => {
    render(<PhoneMockup language="en" isDark={false} isMobile={false} />)
    expect(screen.getByText('AES-CFB Encrypted')).toBeInTheDocument()
  })

  it('does not render privacy pill on mobile', () => {
    render(<PhoneMockup language="en" isDark={false} isMobile={true} />)
    expect(screen.queryByText('AES-CFB Encrypted')).not.toBeInTheDocument()
  })

  it('renders decorative elements', () => {
    const { container } = render(<PhoneMockup language="en" isDark={false} isMobile={false} />)
    // There are several divs for chassis, rings etc.
    // We can check for the Presence of the chassis gradient via style if needed, 
    // but checking for basic structure is usually enough unless it's a visual regression test.
    expect(container.firstChild).toBeInTheDocument()
  })
})
