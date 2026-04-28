import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectCard } from './ProjectCard';
import { Project } from '@/lib/projects';

const mockProject: Project = {
  id: 'test-proj',
  title: 'Test Project',
  description: 'This is a test project description.',
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
    expect(screen.getByText('This is a test project description.')).toBeInTheDocument();
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

  it('renders links correctly when public', () => {
    render(<ProjectCard project={mockProject} />);
    const githubLink = screen.getByText('View on GitHub →');
    expect(githubLink).toHaveAttribute('href', mockProject.githubUrl);

    const demoLink = screen.getByText('Live Demo ↗');
    expect(demoLink).toHaveAttribute('href', mockProject.demoUrl);
  });

  it('renders private badge and text when isPrivate is true', () => {
    const privateProject = { ...mockProject, isPrivate: true, githubUrl: undefined };
    render(<ProjectCard project={privateProject} />);
    
    // Using getAllByText since "Private" and "Private Repository" both match, wait, exact match might be fine for "Private"
    // Let's use getByText with exact: false or function
    expect(screen.getByText('Private')).toBeInTheDocument();
    expect(screen.getByText('Private Repository')).toBeInTheDocument();
    expect(screen.queryByText('View on GitHub →')).not.toBeInTheDocument();
  });
});
