import { X } from 'lucide-react';
import { useEffect } from 'react';
import type { ProjectItem } from '../data/portfolio';
import { PainterlyArtwork } from './PainterlyArtwork';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111315]/55 p-4 md:p-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-[780px] overflow-y-auto rounded-[24px] border border-[#111315]/10 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Artwork Header */}
        <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#E8EFEA]">
          <PainterlyArtwork
            alt={project.title}
            style={{
              objectPosition: project.imagePosition,
              filter: project.imageFilter,
            }}
          />
          <div
            className="absolute inset-0 z-20 flex items-end justify-between p-6 md:p-8"
            style={{ background: project.scrimGradient }}
          >
            <div>
              <span className="mb-1.5 inline-block text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white/85">
                {project.year} · {project.role}
              </span>
              <h2
                id="project-modal-title"
                className="font-serif-editorial text-[28px] md:text-[36px] font-bold leading-[1.15] text-white"
              >
                {project.title}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-4 right-4 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#111315] backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-[#1E3A2F]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Case Study Body */}
        <div className="p-6 md:p-9 space-y-7">
          <div>
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#686D76]">
              Overview
            </span>
            <p className="text-[15.5px] leading-[1.75] text-[#42474E]">
              {project.caseStudy.overview}
            </p>
          </div>

          {/* Key Specs Row */}
          <div className="grid grid-cols-1 gap-4 rounded-[16px] border border-[#111315]/8 bg-[#F7F8F6] p-5 sm:grid-cols-3">
            {project.caseStudy.metrics.map((m) => (
              <div key={m.label}>
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#686D76]">
                  {m.label}
                </span>
                <span className="text-[14.5px] font-semibold text-[#111315] tabular-nums">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div>
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#686D76]">
              Execution Highlights
            </span>
            <ul className="space-y-2.5 text-[14.5px] leading-[1.65] text-[#42474E]">
              {project.caseStudy.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E3A2F]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Palette Swatches */}
          <div>
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#686D76]">
              Color Tokens
            </span>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.caseStudy.palette.map((swatch) => (
                <div
                  key={swatch.name}
                  className="flex items-center gap-2.5 rounded-xl border border-[#111315]/10 bg-[#FAF9F5] p-2.5"
                >
                  <span
                    className="h-6 w-6 shrink-0 rounded-full border border-[#111315]/15"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <div className="min-w-0">
                    <div className="truncate text-[12px] font-semibold text-[#111315]">
                      {swatch.name}
                    </div>
                    <div className="text-[11px] text-[#686D76] tabular-nums">
                      {swatch.hex}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Close Action */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#111315]/10 pt-5">
            <div className="flex flex-wrap gap-2 text-[12.5px] text-[#686D76]">
              {project.tags.map((tag, idx) => (
                <span key={tag} className="inline-flex items-center gap-2">
                  {idx > 0 && <span aria-hidden="true">·</span>}
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-[#111315] px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#1E3A2F] focus-visible:outline-2 focus-visible:outline-[#1E3A2F]"
            >
              Close Exploration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
