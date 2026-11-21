import { Code2, Layers, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { SKILL_GROUPS, type SkillGroup } from '../data/portfolio';

const SKILL_NOTES: Record<string, string> = {
  TypeScript: 'Strict types, interfaces, and clean modular front-end state.',
  'C++': 'Structured algorithms, data structures, and problem-solving fundamentals.',
  Python: 'Clean scripting, automation, and foundational Informatics Engineering tasks.',
  'Responsive Layout': 'Adaptive layouts spanning desktop editorial grids to mobile.',
  'Graphic Design': 'Visual posters, announcements, and balanced composition.',
  'Editorial Layout': 'High-contrast serif hierarchy and breathable whitespace.',
  'Event Documentation': 'Capturing and curating photographic records for events.',
  'Digital Storytelling': 'Cohesive multi-channel visual narratives for audiences.',
  'Brand Identity': 'Consistent color tokens, typographic voice, and assets.',
  Adaptability: 'Transitioning smoothly between engineering and design roles.',
  Creativity: 'Translating abstract concepts into serene, tactile visuals.',
  'Cross-Team Communication': 'Coordinating publication timelines across student teams.',
  'Information Management': 'Structuring media archives and visual documentation.',
  'Creative Writing': 'Award-recognized narrative voice and concise copywriting.',
};

function renderGroupIcon(icon: SkillGroup['icon']) {
  switch (icon) {
    case 'code':
      return <Code2 className="h-5 w-5" aria-hidden="true" />;
    case 'design':
      return <Layers className="h-5 w-5" aria-hidden="true" />;
    case 'mindset':
      return <Sparkles className="h-5 w-5" aria-hidden="true" />;
  }
}

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      aria-label="Skills and Capabilities"
      className="mx-auto max-w-[1160px] border-t border-[#111315]/10 px-[6vw] py-20 md:py-[110px]"
    >
      <div className="mx-auto mb-14 max-w-[640px] text-center">
        <span className="mb-3.5 inline-block text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#686D76]">
          05 / Capabilities
        </span>
        <h2 className="editorial-title text-[clamp(34px,4.2vw,52px)] leading-[1.18] text-[#111315]">
          <span className="serif-light">Tools, Code &amp;</span>{' '}
          <strong>Creative Craft</strong>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.id}
            className="flex flex-col rounded-[20px] border border-[#111315]/10 bg-[#F7F8F6] p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1E3A2F]/25"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#E8EFEA] text-[#1E3A2F]">
              {renderGroupIcon(group.icon)}
            </div>

            <h3 className="mb-5 text-[20px] font-semibold leading-[1.3] text-[#111315]">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => {
                const isSelected = selectedSkill === skill;
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() =>
                      setSelectedSkill((prev) => (prev === skill ? null : skill))
                    }
                    aria-pressed={isSelected}
                    className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#1E3A2F] ${
                      isSelected
                        ? 'border-[#1E3A2F] bg-[#1E3A2F] text-white'
                        : 'border-[#111315]/10 bg-white text-[#111315] hover:-translate-y-0.5 hover:border-[#1E3A2F]'
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Subtle contextual capability detail when a user clicks a skill */}
      <div className="mt-6 min-h-[28px] text-center">
        {selectedSkill && SKILL_NOTES[selectedSkill] ? (
          <p className="inline-flex items-center gap-2 text-[13.5px] text-[#42474E]">
            <span className="font-semibold text-[#1E3A2F]">
              {selectedSkill}
            </span>
            <span aria-hidden="true">·</span>
            <span>{SKILL_NOTES[selectedSkill]}</span>
          </p>
        ) : (
          <p className="text-[13px] text-[#686D76]">
            Select any capability above to inspect how it is applied in practice.
          </p>
        )}
      </div>
    </section>
  );
}
