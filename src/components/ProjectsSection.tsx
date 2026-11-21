import { useState } from 'react';
import { PROJECTS, type ProjectItem } from '../data/portfolio';
import { ProjectModal } from './ProjectModal';

type FilterCategory = 'all' | 'engineering' | 'visual';

const FILTER_OPTIONS: { id: FilterCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'visual', label: 'Visual Direction' },
];

export function ProjectsSection() {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const visibleProjects =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="mx-auto max-w-[1160px] border-t border-[#111315]/10 px-[6vw] py-20 md:py-[110px]"
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="mb-3.5 inline-block text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#686D76]">
            04 / Selected Work
          </span>
          <h2 className="editorial-title text-[clamp(34px,4vw,50px)] leading-[1.18] text-[#111315]">
            <span className="serif-light">Featured</span>{' '}
            <strong>Projects</strong>
          </h2>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <p className="max-w-[320px] text-[14.5px] leading-[1.6] text-[#686D76] sm:text-right">
            A curation of code, responsive design &amp; visual communication
            works.
          </p>

          {/* Interactive segmented filter */}
          <div
            role="group"
            aria-label="Filter projects by discipline"
            className="inline-flex items-center gap-1 rounded-full border border-[#111315]/10 bg-[#F7F8F6] p-1"
          >
            {FILTER_OPTIONS.map((option) => {
              const active = filter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setFilter(option.id)}
                  aria-pressed={active}
                  className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#1E3A2F] ${
                    active
                      ? 'bg-white text-[#111315] shadow-xs'
                      : 'text-[#686D76] hover:text-[#111315]'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-[20px] border border-[#111315]/10 bg-white transition-all duration-400 hover:-translate-y-1.5 hover:border-[#1E3A2F]/25 hover:shadow-[0_20px_40px_-15px_rgba(17,19,21,0.08)]"
          >
            {/* Body */}
            <div className="flex flex-grow flex-col p-7 md:p-8">
              <span className="mb-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#1E3A2F] tabular-nums">
                {project.year} · {project.role}
              </span>

              <h3 className="font-serif-editorial mb-3 text-[28px] font-bold leading-[1.22] text-[#111315]">
                {project.title}
              </h3>

              <p className="mb-6 flex-grow text-[14.5px] leading-[1.68] text-[#686D76]">
                {project.tagline}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#111315]/10 bg-[#F7F8F6] px-3 py-1 text-[12px] font-medium text-[#111315] whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1E3A2F] transition-all duration-200 hover:gap-2.5 hover:text-[#111315] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A2F] rounded"
                >
                  {project.ctaLabel} <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
