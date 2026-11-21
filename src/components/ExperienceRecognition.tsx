import { ACHIEVEMENTS, EXPERIENCES } from '../data/portfolio';

export function ExperienceRecognition() {
  return (
    <section
      id="experience"
      aria-label="Experience and Recognition"
      className="mx-auto max-w-[1160px] border-t border-[#111315]/10 px-[6vw] py-20 md:py-[110px]"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">
        {/* Experience Column */}
        <div>
          <span className="mb-3.5 inline-block text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#686D76]">
            02 / Experience
          </span>

          <h2 className="editorial-title mb-8 text-[clamp(30px,3.5vw,44px)] leading-[1.2] text-[#111315]">
            <span className="serif-light">Leadership &amp;</span>{' '}
            <strong>Creative Roles</strong>
          </h2>

          <div>
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.role}
                className="border-b border-[#111315]/10 pb-6 pt-2"
              >
                <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1E3A2F] tabular-nums">
                  {exp.period}
                </span>
                <h3 className="mb-1.5 text-[19px] font-semibold leading-[1.35] text-[#111315]">
                  {exp.role}
                </h3>
                <div className="mb-2.5 text-[14.5px] font-medium text-[#686D76]">
                  {exp.organization}
                </div>
                <p className="text-[14.5px] leading-[1.68] text-[#686D76]">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Column */}
        <div>
          <span className="mb-3.5 inline-block text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#686D76]">
            03 / Recognition
          </span>

          <h2 className="editorial-title mb-8 text-[clamp(30px,3.5vw,44px)] leading-[1.2] text-[#111315]">
            <span className="serif-light">Selected</span>{' '}
            <strong>Achievements</strong>
          </h2>

          <div className="space-y-5">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] border border-[#111315]/10 bg-[#FAF9F5] p-8 md:p-9"
              >
                <span className="mb-2.5 inline-block text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#1E3A2F]">
                  {item.category}
                </span>
                <h3 className="font-serif-editorial mb-3 text-[26px] font-bold leading-[1.24] text-[#111315]">
                  {item.title}
                </h3>
                <p className="text-[14.5px] leading-[1.7] text-[#686D76]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
