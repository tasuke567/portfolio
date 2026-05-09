import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProjectCard } from './ProjectCard';
import { Project } from '@/lib/projects';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/',
}));

const mockProject: Project = {
  id: 'test-proj',
  title: 'Test Project',
  description: 'This is a test project description.',
  longDescription: 'Long description.',
  technologies: ['React', 'TypeScript', 'Tailwind'],
  highlights: ['Did something cool', 'Improved performance'],
  isPrivate: false,
  githubUrl: 'https://github.com/tasuke567/test-project',
  demoUrl: 'https://test-project.demo',
};

describe('ProjectCard', () => {
  it('renders project title and description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(
      screen.getByText('This is a test project description.'),
    ).toBeInTheDocument();
  });

  it('renders technologies', () => {
    render(<ProjectCard project={mockProject} />);
    mockProject.technologies.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders highlights', () => {
    render(<ProjectCard project={mockProject} />);
    mockProject.highlights.forEach((highlight) => {
      expect(screen.getByText(highlight)).toBeInTheDocument();
    });
  });

  it('renders external links when public', () => {
    render(<ProjectCard project={mockProject} />);
    const githubLink = screen.getByText('GitHub ↗');
    expect(githubLink).toHaveAttribute('href', mockProject.githubUrl);

    const demoLink = screen.getByText('Live Demo ↗');
    expect(demoLink).toHaveAttribute('href', mockProject.demoUrl);
  });

  it('always renders the "Read more" detail link', () => {
    render(<ProjectCard project={mockProject} />);
    const readMore = screen.getByText('Read more →');
    expect(readMore).toHaveAttribute('href', `/projects/${mockProject.id}`);
  });

  it('renders private badge and hides GitHub link when private', () => {
    const privateProject = {
      ...mockProject,
      isPrivate: true,
      githubUrl: undefined,
      demoUrl: undefined,
    };
    render(<ProjectCard project={privateProject} />);
    expect(screen.getByText('Private')).toBeInTheDocument();
    expect(screen.queryByText('GitHub ↗')).not.toBeInTheDocument();
    expect(screen.queryByText('Live Demo ↗')).not.toBeInTheDocument();
    expect(screen.getByText('Read more →')).toBeInTheDocument();
  });
});
