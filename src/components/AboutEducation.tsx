import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { EDUCATION, PROFILE } from '../data/portfolio';

export function AboutEducation() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: focus mailto link naturally
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section
      id="about"
      aria-label="About and Education"
      className="mx-auto max-w-[1160px] px-[6vw] py-20 md:py-[110px]"
    >
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        {/* Editorial Bio */}
        <div>
          <span className="mb-3.5 inline-block text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#686D76]">
            01 / About Me
          </span>

          <h2 className="editorial-title mb-7 text-[clamp(34px,4vw,52px)] leading-[1.18] text-[#111315]">
            <span className="serif-light">Thoughtful design meets</span>
            <br />
            <strong>structured engineering.</strong>
          </h2>

          <p className="mb-4 text-[16.5px] leading-[1.8] text-[#111315]">
            {PROFILE.introPrimary}
          </p>

          <p className="text-[15.5px] leading-[1.8] text-[#686D76]">
            {PROFILE.introSecondary}
          </p>

          {/* Metadata Strip */}
          <div className="mt-9 flex flex-wrap gap-x-9 gap-y-5 border-t border-[#111315]/10 pt-7">
            <div>
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#686D76]">
                Based in
              </span>
              <span className="text-[14.5px] font-semibold text-[#111315]">
                {PROFILE.city}
              </span>
            </div>

            <div>
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#686D76]">
                Focus
              </span>
              <span className="text-[14.5px] font-semibold text-[#111315]">
                {PROFILE.focus}
              </span>
            </div>

            <div>
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#686D76]">
                Email
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-[14.5px] font-semibold text-[#111315] hover:text-[#1E3A2F] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A2F] rounded"
                >
                  {PROFILE.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  title="Copy email address"
                  className="inline-flex items-center gap-1 rounded-md px-1.5 py-1 text-[11.5px] font-medium text-[#686D76] hover:bg-[#F7F8F6] hover:text-[#1E3A2F] transition-colors focus-visible:outline-2 focus-visible:outline-[#1E3A2F]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#1E3A2F]" />
                      <span className="text-[#1E3A2F]">Copied</span>
                    </>
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Education Card */}
        <aside className="rounded-[20px] border border-[#111315]/10 bg-[#F7F8F6] p-8 md:p-9 lg:sticky lg:top-[104px]">
          <span className="mb-1 inline-block text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#686D76]">
            Education
          </span>

          <div className="relative mt-6 border-l-[1.5px] border-[#1E3A2F]/20 pl-5">
            {EDUCATION.map((item, idx) => (
              <div
                key={item.school}
                className={`relative ${idx < EDUCATION.length - 1 ? 'mb-8' : ''}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[26px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#F7F8F6] bg-[#1E3A2F]"
                />
                <span className="mb-2 inline-block rounded-full bg-[#E8EFEA] px-3 py-1 text-[11.5px] font-semibold text-[#1E3A2F] tabular-nums">
                  {item.period}
                </span>
                <h3 className="font-serif-editorial mb-1.5 text-[23px] font-bold leading-[1.25] text-[#111315]">
                  {item.school}
                </h3>
                <div className="mb-1.5 text-[14px] font-medium text-[#42474E]">
                  {item.degree}
                </div>
                <p className="text-[13.5px] leading-[1.6] text-[#686D76]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
