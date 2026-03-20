import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import RatingStars from './RatingStars'

describe('RatingStars', () => {
  it('renders the correct number of stars', () => {
    const { container } = render(<RatingStars rating={4.5} size={20} />)
    // RatingStars uses Phosphor icons (Star).
    // We can check the number of SVG elements or specific classes if they are applied.
    const stars = container.querySelectorAll('svg')
    expect(stars).toHaveLength(5)
  })

  it('applies the correct size', () => {
    const { container } = render(<RatingStars rating={5} size={25} />)
    const star = container.querySelector('svg')
    expect(star).toHaveAttribute('height', '25')
    expect(star).toHaveAttribute('width', '25')
  })
})
