import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { HeroTitle } from './HeroTitle';

vi.mock('framer-motion', async (orig) => {
  const actual = await orig<typeof import('framer-motion')>();
  return { ...actual, useReducedMotion: () => true };
});

describe('HeroTitle', () => {
  it('renders the resolved title to assistive tech', () => {
    render(<HeroTitle />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveAccessibleName(
      'Full-Stack Developer',
    );
  });

  it('marks decorative scrambling spans aria-hidden', () => {
    render(<HeroTitle />);
    const heading = screen.getByRole('heading', { level: 1 });
    const hidden = heading.querySelectorAll('[aria-hidden="true"]');
    expect(hidden.length).toBeGreaterThan(0);
  });
});
